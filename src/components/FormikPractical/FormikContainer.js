import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropdownOptions = [
        {key:'Select an option', value:''},
        {key:'option 1', value:'option 1'},
        {key:'option 2', value:'option 2'},
        {key:'option 3', value:'option 3'},
    ]
    const radioOptions = [
        {key:'option 1', value:'option 1'},
        {key:'option 2', value:'option 2'},
        {key:'option 3', value:'option 3'},
    ]
    const initialValues = {
        email:'',
        description:'',
        selectOption:'',
        radioOption:''
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required')
        
    })
    const onSubmit = values => console.log("Form Data", values)
    return (
        <Formik 
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}  
        >
            {
               formik =>
               <Form>
                   <FormikControl control='input' type='email' label='Email' name='email'/>
                   <FormikControl control='textarea' label='Description' name='description' />
                   <FormikControl control='select' label='Select a topic' name='selectOption' options={dropdownOptions} />
                   <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions} />
                   <button type="submit">Submit</button>
               </Form>
            }
        </Formik>
    )
}

export default FormikContainer
