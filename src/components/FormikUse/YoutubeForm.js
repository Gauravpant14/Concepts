import React from "react";
import styles from "./Formik.module.css";
import { Formik, Form , Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments:"",
    address:""
}
const onSubmit =  values => {
    console.log(values, "form data");
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('email is required'),
    channel:Yup.string().required('Required'),
    address:Yup.string().required('Required'),
})

const YoutubeForm = () => {
    

    return (
        <div  className={styles.container}>

       
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
       >
            <Form>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                />
                {/* ErrorMessage component render errors conditionaly now we dont have to use formik.touched and formik.error */}
              <ErrorMessage name='name' /> 
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                 
                />
                <ErrorMessage name='email' />
                </div>
                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field
                    type="text"
                    id="channel"
                    name="channel"
                    className={styles.input}
                />
                <ErrorMessage name='channel' />
                </div>
                <div className="form-control">
                    <Field
                        as='textarea'
                        id='comments'
                        name='comments'
                        className={styles.input}
                    />
                </div>
                <div className="form-control">
                    <Field name='address' className={styles.input}>
                      {
                          (props) => {
                            const { field, form, meta } = props  
                            console.log(props);
                            return (<div>
                             <input type='text' id='address' {...field} />
                            { meta.touched && meta.error ? <div> {meta.error} </div> : null }
                            </div>
                            )
                          }
                      }              
                    </Field>
                </div>        
                <button type="submit" className={styles.submit} >Submit</button>
            </Form>
        </Formik>
        </div>
    );
};

export default YoutubeForm;
