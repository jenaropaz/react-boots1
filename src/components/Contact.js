import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
        <section className='d-flex align-items-center align-content-center contact-clean'>
    <form className='text-dark'>
      <h2 className='text-center'>Form Heading</h2>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          name='name'
          placeholder='Name'
          required=''
        />
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          type='email'
          name='email'
          placeholder='Email'
          required=''
        />
      </div>
      <div className='form-group'>
        <textarea
          className='form-control'
          name='message'
          placeholder='Message'
          rows='14'
          minLength='10'
          required=''
        ></textarea>
      </div>
      <div className='form-group text-center'>
        <button className='btn btn-primary' type='submit'>
          send
        </button>
      </div>
    </form>
  </section>
    )
}
}

