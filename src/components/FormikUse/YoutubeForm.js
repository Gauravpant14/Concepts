import React from "react";
import styles from "./Formik.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
}
const onSubmit =  values => {
    console.log(values, "form data");
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('email is required'),
    channel:Yup.string().required('Required')
})

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    });

    console.log("visited fields", formik.touched); //reflects state of the form ...
    console.log("form state value", formik.values);
    console.log("form errors", formik.errors);

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
                   {...formik.getFieldProps('name')}
                />
                { formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
               
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    {...formik.getFieldProps('email')}
                />
                 { formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null }

                <label htmlFor="channel">Channel</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    className={styles.input}
                   {...formik.getFieldProps('channel')} //for reducing code ===> when we have same onChange,onBlur, value.......
                />
                 { formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null }

                <button type="submit" className={styles.submit} >Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;
