import React from 'react';
import Styles from './business.module.css';
function Business({business}) {
    return (
      <div className={Styles.business}>
        <img src={business.imageUrl} alt={business.name} className={Styles.businessImg}/>
        <h1 className={Styles.businessHeading}>{business.name}</h1>
        <div className={Styles.businessInfo}>
          <p>{business.address}</p>
          <p>{business.city}, {business.state} {business.zipcode}</p>
          <div className={Styles.data}>
            <p>{business.category}</p>
            <p>{business.rating} stars</p>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
  
export default Business;