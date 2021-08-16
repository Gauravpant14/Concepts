import React from "react";
import styles from "./Formik.module.css";
import { Formik, Form , Field, ErrorMessage, FieldArray} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments:"",
    address:"",
    social:{
        facebook:'',
        insta:'',
    },
    phoneNumbers:['','']
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
    comments:Yup.string().required('Required'),
    social: Yup.object().shape({
        facebook: Yup.string().required('Facebook username is required'),
        insta: Yup.string().required('Insta username is required')
      }),
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
              <ErrorMessage name='name' component={TextError}/> 
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                 
                />
                <ErrorMessage name='email'>
                    {
                    (errMsg) => <div className={styles.error}>{errMsg}</div>
                    }
                 </ErrorMessage>   
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
                <label htmlFor="comments">Comments</label>
                    <Field
                        as='textarea'
                        id='comments'
                        name='comments'
                        className={styles.input}
                    />
                    <ErrorMessage name="comments" />
                </div>
                <div className="form-control">
                    <label htmlFor='address'>Address</label>
                    <Field name='address' className={styles.input}>
                      {
                          (props) => {
                            const { field,form, meta } = props  
                            console.log(props);
                            return (<div>
                             <input type='text' id='address' {...field} className={styles.input} />
                            { meta.touched && meta.error ? <div> {meta.error} </div> : null }
                            </div>
                            )
                          }
                      }              
                    </Field>  
                </div> 

                {/*  Here We are implementing nested objects
                  *  checkout at initaialValues for how we have define nested object
                  *  also checkout validateSchema for getting idea of how we implement validation for that
                */}
                      
                <div className="form-control">
                    <label htmlFor="facebook">Facebook Profile</label>
                    <Field type="text" id="facebook" name="social.facebook" className={styles.input}/>
                    <ErrorMessage name="social.facebook" />
                </div> 
                <div className="form-control">
                    <label htmlFor="instagram">Instagram Profile</label>
                    <Field type="text" id="instagram" name="social.insta" className={styles.input} />
                    <ErrorMessage name="social.insta" />
                </div> 

                 {/*  Here We are implementing array's
                  *  
                  *  
                */}

                <div className="form-control">
                    <label htmlFor="primaryPh">Primary Phone Number</label>
                    <Field type="text" id="primaryPh" name="phoneNumbers[0]" className={styles.input} />
                    <ErrorMessage name="social.insta" />
                </div> 
                <div className="form-control">
                    <label htmlFor="secondaryPh">Secondary Phone Number</label>
                    <Field type="text" id="secondaryPh" name="phoneNumbers[1]" className={styles.input} />
                    <ErrorMessage name="social.insta" />
                </div> 
                <button type="submit" className={styles.submit} >Submit</button>
            </Form>
        </Formik>
        </div>
    );
};

export default YoutubeForm;
