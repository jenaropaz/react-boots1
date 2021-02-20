import React, { Component } from 'react';
import image1 from '../../src/1.jpg';
import image4 from '../../src/4.jpg';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='card-group'>
      <div className='card'>
      <img className='card-img-top w-100 d-block' src={image4} alt=' ' />
      <div className='card-body'>
        <h4 className='card-title'>Title</h4>
        <h6 className='text-muted card-subtitle mb-2'>Subtitle</h6>
        <p className='card-text'>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
          non mi porta gravida at eget metus.
        </p>
        <button className='btn btn-primary' type='button'>
          Button
        </button>
      </div>
    </div>
    <div className='card'>
      <img class='card-img-top w-100 d-block' src={image1} alt=' ' />
      <div className='card-body'>
        <h4 className='card-title'>Title</h4>
        <h6 className='text-muted card-subtitle mb-2'>Subtitle</h6>
        <p className='card-text'>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
          non mi porta gravida at eget metus.
        </p>
        <a className='card-link' href='http://www.epcc.edu'>
          Link
        </a>
        <a className='card-link' href='http://www.uacj.mx'>
          Link
        </a>
      </div>
    </div>
  </div>
      
    );
  }
}
