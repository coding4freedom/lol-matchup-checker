import React from 'react';
import { useSearch } from '../../provider/SearchContext';

import './Banner.css';

const Banner = () => {
    const { status } = useSearch();

    const getStatusColor = () => {
        switch (status) {
            case 'G':
                return 'lightgreen';
            case 'Y':
                return 'gold';
            case 'R':
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