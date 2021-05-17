import style from './Info.module.css'

const Info = () => {
   return (
      <div className={style.wrapper}>
         <h2>Info About My Site</h2>
         <hr />
         <h3>Bugs</h3>
         <p>
            <b>Navigation:</b> Burger & main Nav PZDC, but work))
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
               <li>recaptcha <b>done</b></li>
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