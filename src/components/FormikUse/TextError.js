import React from 'react'
import styles from "./Formik.module.css";
const TextError = (props) => {
    console.log(props,"----------------------------")
    return (
        <div className={styles.error}>
            {props.children}
        </div>
    )
}

export default TextError
