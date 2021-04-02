import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { required } from '../common/FormValidated/FormValidate'
import { setAuthorized, Login } from '../redux/auth-reducer'
import style from './Login.module.css'
import { FORM_ERROR } from "final-form";
import { Redirect } from 'react-router'
import { useEffect } from 'react'




const LoginForm = (props) => {

   console.log(props);
   const onSubmit = async (values) => {

      let dataMesseg = await props.Login(values.email, values.password, values.rememberMe)

      await console.log(dataMesseg);





      return { [FORM_ERROR]: dataMesseg };
   }
   useEffect(() => {

   }, [props.autorized.authorized])

   return (


      <>
         {(props.autorized.authorized) ?
            <Redirect to='/profile' /> : null}

         <Form onSubmit={onSubmit}>

            {({
               submitError,
               handleSubmit,
               submitting,
               values,
            }) => (

               <form className={style.loginForm} onSubmit={handleSubmit}>
                  {submitError && <div className={style.error}>{submitError}</div>}
                  <h1>LOGIN FORM MZFC</h1>
                  <Field
                     name="email"
                     placeholder="Email"
                     validate={required}
                  >

                     {({ input, meta, placeholder }) => {
                        return (
                           <div>
                              <label>Email</label>
                              <input
                                 {...input}
                                 className={meta.touched && meta.error && submitError ? style.visited : style.input}
                                 type='email'
                                 placeholder={placeholder}

                              />
                              {
                                 meta.error && meta.touched && <span className={style.error}>{meta.error}</span>
                              }

                           </div>
                        )
                     }}

                  </Field>

                  <Field
                     name="password"
                     placeholder="Password"
                     validate={required}
                  >
                     {({ input, meta, placeholder }) => {
                        return (
                           (
                              <div>
                                 <label>Password</label>
                                 <input
                                    {...input}
                                    autoComplete='cc-csc'
                                    className={meta.touched && meta.error && submitError ? style.visited : style.input}
                                    type='password'
                                    placeholder={placeholder}
                                 />
                                 {
                                    meta.error && meta.touched && <span className={style.error}>{meta.error}</span>
                                 }

                              </div>

                           )
                        )
                     }}
                  </Field>
                  <Field
                     name="rememberMe"
                     type='checkbox'
                  // validate={required}

                  >
                     {({ input, meta }) => {
                        return (
                           (
                              <div>
                                 <label>Check Me</label>
                                 <input  {...input} />
                                 {
                                    meta.error && meta.touched && <span className={style.error}>{meta.error}</span>
                                 }
                              </div>
                           )
                        )
                     }}
                  </Field>

                  <button type="submit" disabled={submitting}>Submit</button>
                  <button type="reset" disabled={submitting}>Reset</button>

                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
                  <pre>{JSON.stringify(submitError, 0, 2)}</pre>


               </form>
            )}
         </Form>
      </>
   )
}
const mapStateToProps = (state) => {
   return {
      autorized: state.auth
   }
}
export default connect(mapStateToProps, { setAuthorized, Login })(LoginForm)
