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

    const checkBoxOptions = [
        {key:'option 1', value:'Coption 1'},
        {key:'option 2', value:'Coption 2'},
        {key:'option 3', value:'Coption 3'},
    ]

    const initialValues = {
        email:'',
        description:'',
        selectOption:'',
        radioOption:'',
        checkBoxOptions: [],
        birthDate: null
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkBoxOptions:Yup.array().min(1,"check atleast one").required('required'),
        // birthDate:Yup.date().required('Required').nullable
        
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
                   <FormikControl control='checkbox' label='checkbox topics'
                   name='checkBoxOptions'
                   options={checkBoxOptions} 
                   />
                   <FormikControl
                    control='date'
                    label='Pick a date'
                    name='birthDate'
                   /> 
                   <button type="submit">Submit</button>
               </Form>
            }
        </Formik>
    )
}

export default FormikContainer
