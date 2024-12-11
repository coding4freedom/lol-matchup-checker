import React from 'react';
import { useSearch } from '../../provider/SearchContext';

import './Banner.css';

const Banner = () => {
    const { status } = useSearch();

    const getStatusColor = () => {
        switch (status) {
            case 'green':
                return 'lightgreen';
            case 'yellow':
                return 'gold';
            case 'red':
                return 'lightcoral';
            default:
                return 'gray';
        }
    };
    return(
        <div className='banner'>
            <img src="/logo.png" alt="logo" />
            <span 
                className='status-light'
                style={{
                    backgroundColor: getStatusColor(),
                }}
            >
                {status}
            </span>
        </div>
    )
}

export default Banner;