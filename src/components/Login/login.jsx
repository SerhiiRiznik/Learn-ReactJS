import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { required } from '../common/FormValidated/FormValidate'
import { setAuthorized, Login } from '../redux/auth-reducer'
import style from './Login.module.css'



const LoginForm = (props) => {
   if (props.autorized.authorized) {
      <Redirect to='/profile' />
   }
   const onSubmit = value => {
      props.Login(value.email, value.password, value.rememberMe)

   }
   return (
      <>
         <h1>LOGIN FORM MZFC</h1>
         <Form onSubmit={onSubmit}>
            {({ handleSubmit, values, submitting }) => (
               <form className={style.loginForm} onSubmit={handleSubmit}>
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
                                 className={meta.touched && meta.error ? style.visited : style.input}
                                 type='email'
                                 placeholder={placeholder}

                              />
                              {
                                 meta.error && meta.touched && <span>{meta.error}</span>
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
                                    className={meta.touched && meta.error ? style.visited : style.input}
                                    type='password'
                                    placeholder={placeholder}
                                 />
                                 {
                                    meta.error && meta.touched && <span>{meta.error}</span>
                                 }
                              </div>
                           )
                        )
                     }}
                  </Field>
                  <Field
                     name="rememberMe"
                     type='checkbox'

                  >
                     {({ input, meta, placeholder }) => {
                        return (
                           (
                              <div>
                                 <label>Check Me</label>
                                 <input  {...input} />
                                 {
                                    meta.error && meta.touched && <span>{meta.error}</span>
                                 }
                              </div>
                           )
                        )
                     }}
                  </Field>

                  <button type="submit" disabled={submitting}>Submit</button>
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
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
