import React from 'react'
import styles from './Formik.module.css'
import { useFormik } from 'formik'
const YoutubeForm = () => {
    
    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            channel:''
        }
    })

    console.log('form values', formik.values);

    return (
        <div className={styles.container}>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name='name' className={styles.input} onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email'  className={styles.input} onChange={formik.handleChange} value={formik.values.email}  />

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name='channel'  className={styles.input} onChange={formik.handleChange} value={formik.values.channel} />

                <button className={styles.submit}>Submit</button>
                
            </form>
        </div>
    )
}

export default YoutubeForm
