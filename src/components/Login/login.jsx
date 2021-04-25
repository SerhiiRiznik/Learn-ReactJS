import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { required } from '../common/FormValidated/FormValidate'
import { setAuthorized, Login } from '../redux/auth-reducer'
import style from './Login.module.css'
import { FORM_ERROR } from "final-form";
import { Redirect } from 'react-router'
import Captcha from './Captcha'
// import Captcha from './Captcha'

const LoginForm = ({ Login, autorized }) => {


   const onSubmit = async (values) => {
      console.log();
      let dataMesseg = await Login(values.email, values.password, values.rememberMe, values.captcha)
      await console.log(dataMesseg);

      return { [FORM_ERROR]: dataMesseg };
   }

   return (
      <>
         <div>
            Данные тестового аккаунта: <br />
            Email: free@samuraijs.com <br />
            Password: free
         </div>
         {(autorized.authorized) ?
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
                           <div className={style.loginFormWrap}>
                              <label>Email</label>
                              <input
                                 {...input}
                                 className={meta.touched && meta.error ? style.visited : style.input}
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
                              <div className={style.loginFormWrap}>
                                 <label>Password</label>
                                 <input
                                    {...input}
                                    autoComplete='cc-csc'
                                    className={meta.touched && meta.error ? style.visited : style.input}
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

                  >
                     {({ input, meta }) => {
                        return (
                           (
                              <div className={style.loginFormWrap}>
                                 <label>Remember my details</label>
                                 <input  {...input} />
                                 {
                                    meta.error && meta.touched && <span className={style.error}>{meta.error}</span>
                                 }
                              </div>
                           )
                        )
                     }}
                  </Field>

                  {autorized.captchaUrl &&
                     <Field
                        name='captcha'
                        type="text"
                        validate={required}
                        component={Captcha}
                        captchaUrl={autorized.captchaUrl}
                     />
                  }

                  <button type="submit" disabled={submitting}>Submit</button>

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
