import style from './Setting.module.css'

const Info = () => {
   return (
      <div className={style.wrapper}>
         <h2>Info About My Site</h2>
         <hr />
         <h3>Bugs</h3>
         <p>
            <b>UsersComponent:</b> My Pagination does not work correctly
         </p>
         <p>
            <b>SetingsComponent:</b> InitialState for Inputs have bug
         </p>
         <p>
            <b>can't test site on free@samuraijs.com</b>
         </p>
         <hr />
         <h3>In progres</h3>
         <div>
            <ol>
               <li>recaptcha</li>
               <li>Loading Photo move to SetingsComponent</li>
               <li>Loader for all Async request</li>
               <li>Refactoring code</li>
               <li>Stylization App</li>
               <li>Testing</li>
            </ol>
         </div>
      </div>
   )
}

export default Info