import React from 'react';
import Styles from './business.module.css';
function Business() {
    const business = {
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipM4wgNQaEd_FN0VBR4rSanZDaAqoVY5S-pwc5W_=s1360-w1360-h1020',
      name: 'Newport Pizza Company',
      address: '601 Monmouth Street',
      city: 'Newport',
      state: 'KY',
      zipcode: '41071',
      category: 'Pizza',
      rating: 4.5,
      reviewCount: 123
    };
  
    return (
      <div className={Styles.business}>
        <img src={business.imageUrl} alt={business.name} className={Styles.businessImg}/>
        <h1 className={Styles.businessHeading}>{business.name}</h1>
        <div className={Styles.businessInfo}>
          <p>{business.address}</p>
          <p>{business.city}, {business.state} {business.zipcode}</p>
          <p>{business.category}</p>
          <p>{business.rating} stars</p>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    );
  }
  
  export default Business;