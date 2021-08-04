import React from "react";
import styles from "./Formik.module.css";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: "",
}
const onSubmit =  values => {
    console.log(values, "form data");
}

const validate = values => {
    let errors = {}

    if (!values.name) {
        errors.name = 'Required !!!'
    }
    if (!values.email) {
        errors.email = 'Required !!!'
    }
    // eslint-disable-next-line no-useless-escape
    else if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = "Invalid email format"
    }
    if (!values.channel) {
            errors.channel = 'Required !!!'
    }
    return errors
}

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    console.log("visited fields", formik.touched); //reflects state of the form ...


    return (
        <div className={styles.container}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                { formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
               
             
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                 { formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <label htmlFor="channel">Channel</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    className={styles.input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}
                />
                 { formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

                <button type="submit" className={styles.submit} >Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;
