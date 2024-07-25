import React from 'react';
import Business from '../business/business';
import Styles from './businessList.module.css';
function BusinessList(props) {
    return (
        <div className={Styles.BusinessList}>
            {props.businesses.map((business) => (
                <Business business={business} />
            ))}
        </div>
    );
}

export default BusinessList;