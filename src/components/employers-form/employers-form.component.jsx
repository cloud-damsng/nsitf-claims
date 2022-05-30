import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.utils';

import './employers-form.styles.scss';
const defaultFormFields = {
  ecsNumber: '',
  employerName: '',
  employerStreetNo: '',
  employerStreetName:'',
  employerLga:'',
  employerCity:'',
  employerState:'',
  employerIncorporationNo:'',
  employerTelNo:'',
  employerEmail:'',
    
  };
  const EmployerForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { 
      ecsNumber,
      employerName,
      employerStreetNo,
      employerStreetName,
      employerLga,
      employerCity,
      employerState,
      employerIncorporationNo,
      employerTelNo,
      employerEmail, } = formFields;
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      //if (password !== confirmPassword) {
        //alert('passwords do not match');
        //return;
      }
  
      //try {
       // const { employer } = 
  
       // await createUserDocumentFromAuth(employer, { ecsNumber });
       // resetFormFields();
      //} catch (error) {
       // if (error.code === 'auth/email-already-in-use') {
       //   alert('Cannot create user, email already in use');
       // } else {
         // console.log('user creation encountered an error', error);
       // }
      //}
    //};
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  
    return (
      <div className='sign-up-container'>
        <h2>CREATE AN EMPLOYER</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='ECS Number'
            type='text'
            required
            onChange={handleChange}
            name='ecsNumber'
            value={ecsNumber}
          />
  
          <FormInput
            label='Employer Name'
            type='text'
            required
            onChange={handleChange}
            name='employerName'
            value={employerName}
          />
  
          <FormInput
            label='Street No'
            type='text'
            required
            onChange={handleChange}
            name='employerStreetNo'
            value={employerStreetNo}
          />
  
          <FormInput
            label='Street Name'
            type='text'
            required
            onChange={handleChange}
            name='employerStreetName'
            value={employerStreetName}
          />
          <FormInput
            label='LGA'
            type='text'
            required
            onChange={handleChange}
            name='employerLga'
            value={employerLga}
          />
          <FormInput
            label='City'
            type='text'
            required
            onChange={handleChange}
            name='employerCity'
            value={employerCity}
          />
          <FormInput
            label='State'
            type='text'
            required
            onChange={handleChange}
            name='employerState'
            value={employerState}
          />
          <FormInput
            label='Tel Number'
            type='text'
            required
            onChange={handleChange}
            name='employerTelNo'
            value={employerTelNo}
          />
          <FormInput
            label='Email'
            type='text'
            required
            onChange={handleChange}
            name='employerEmail'
            value={employerEmail}
          />
          <Button type='submit'>Add Employer</Button>
        </form>
      </div>
    );
  };
  
  export default EmployerForm;