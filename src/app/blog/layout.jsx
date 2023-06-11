import React from 'react'
import styles from "./page.module.css"

function Bloglayout({children}) {
  return (
    <div> 
        <h1 className={styles.mainTitle}>This is Layout</h1>
        {children}
    </div>
  )
}

export default Bloglayout