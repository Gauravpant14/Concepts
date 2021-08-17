import React from "react";
import styles from "./Formik.module.css";
import { Formik, Form , Field, ErrorMessage, FieldArray} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import { useState } from "react";

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
    phoneNumbers:['',''],
    phNumbers:['']
}

/*

* Now we are creating savedVaues that will be same as initial values 
* For loading saved data we have to use enableReinitialize prop inside formik
* The saved data willbe come from api

*/

const savedValues = {
    name: "Gaurav",
    email: "g@g.com",
    channel: "reac-js",
    comments:"welcome to the channel",
    address:"kuchauli malsoona",
    social:{
        facebook:'',
        insta:'',
    },
    phoneNumbers:['',''],
    phNumbers:['']
}

const onSubmit =  (values,onSubmitProps) => {
    console.log(values, "form data");
    setTimeout(() => {
        onSubmitProps.setSubmitting(false);
    }, 5000);
    // onSubmitProps.setSubmitting(false); // call this after api response (Button will be disabled until this is true)
    onSubmitProps.resetForm(); // Reset Form after Submitting the form
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
    phoneNumbers:Yup.array().of(Yup.string().required("Add Mobile Numbers"))  
})


//this is for field level validation 
const validateNums = value => {
    let error;
    if(!value){
        error= 'required !!!'
    }
    return error
}

const isBool = 'checking'


const YoutubeForm = () => {
    const [val,setVal] = React.useState(!isBool); 
    const [formValues,setFormValues] = React.useState(null);

    return (
        <div  className={styles.container}> 
        {console.log(val)}
        <Formik 
        initialValues={ formValues ||initialValues }
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
       >
          { (formik) => {
              console.log(formik);
            return(
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

                 {
                 /*  Here We are implementing array's
                  *   validation for array type is also added in   
                  *   validation schema
                  */
                  }

                <div className="form-control">
                    <label htmlFor="primaryPh">Primary Phone Number</label>
                    <Field type="text" id="primaryPh" name="phoneNumbers[0]" className={styles.input} />
                    <ErrorMessage name="phoneNumbers" />
                </div> 
                <div className="form-control">
                    <label htmlFor="secondaryPh">Secondary Phone Number</label>
                    <Field type="text" id="secondaryPh" name="phoneNumbers[1]" className={styles.input} />
                    <ErrorMessage name="phoneNumbers" />
                </div> 

                  {
                  /*  Here We are implementing Dynamic fields using 
                  *    FieldArray component, inital value of array 
                  *    will be one empty string '', cause there 
                  *    will be only one field at first.  
                  *    
                  *    To be in control of dynamic form control,We 
                  *    need to use the render props pattern
                  *    (function as children)
                  *    of FieldArray 
                  */ 
                  }

                  <div className="form-control">
                      <label htmlFor="">
                          List of Phone Numbers
                      </label>
                      <FieldArray name="phNumbers">
                        {
                            (fieldArrayProps) => {
                                // console.log("fieldArrayProps",fieldArrayProps)
                                const { push, remove, form } = fieldArrayProps;
                                const {values} = form;
                                const { phNumbers } = values;
                                return <div>
                                    {
                                    phNumbers.map((phNumbers,index) => (
                                        <div key={index}>
                                            <Field name={`phNumbers[${index}]`} className={styles.input} validate={validateNums}/>
                                            {
                                                index > 0 && <button type="button" onClick={() => remove(index)}>-</button>
                                            }
                                            <button type="button" onClick={() => push('')} >+</button>
                                            <ErrorMessage name={`phNumbers[${index}]`} />
                                        </div>
                                    ))
                                    }
                                    </div>
                            }
                        }
                      </FieldArray>
                  </div>

                <button type='button' onClick={() => setFormValues(savedValues)}>Load Saved Data</button>  
                <button type="reset">Reset</button>
                <button type="submit" className={styles.submit} disabled={!formik.isValid || formik.isSubmitting} style={formik.isSubmitting ? {backgroundColor:'red' } : null}>Submit</button>
            </Form>);
           } 
        }
        </Formik>
        </div>
    );
};

export default YoutubeForm;
