import React from 'react';
import Business from '../business/business';
import Styles from './businessList.module.css';
function BusinessList() {
    return (
        <div className={Styles.BusinessList}>
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
}

export default BusinessList;