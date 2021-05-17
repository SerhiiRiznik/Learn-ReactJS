import styles from '../Loader/Loader.module.css'

let Loader = () => {

   return (
      <>
         <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </>
   )
}


export default Loader