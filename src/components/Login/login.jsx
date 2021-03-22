import { Form, Field } from 'react-final-form'

const Login = (props) => {


   return (
      <>
         <h1>LOGINFORM MZFC</h1>
         <Form


            initialValues={{
               // firstName: 'Dan',
               CheckMe: true
            }}
            onSubmit={e => {
               console.log(e)
            }}
            validate={e => {
               console.log(e)

            }}
         >
            {({ handleSubmit }) => (

               <form onSubmit={handleSubmit}>


                  <div>
                     <label>Email</label>
                     <Field name="email" type='email' component="input" placeholder="Email" />
                  </div>
                  <div>
                     <label>Password</label>
                     <Field name="password" type='password' component="input" placeholder="Password" />
                  </div>
                  <div>
                     <label>Check Me</label>
                     <Field name="CheckMe" type='checkbox' component="input" placeholder="Check Me" />
                  </div>

                  <button type="submit">Submit</button>
               </form>
            )}
         </Form>
      </>
   )
}
export default Login