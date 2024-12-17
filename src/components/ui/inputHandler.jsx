import React from 'react';
import './InputHandler.css';
import { useSearch } from '../../provider/SearchContext';

const InputHandler = () => {
    const { champList, status } = useSearch();
    const isDisabled = status === 'R' ? 'disabled' : undefined;

    return (
        <div className='input-handler'>
            <input 
                id='input-champ'
                className='input__field'
                type="text" 
                placeholder='Enter Champions name'
                list='champ__suggestion-list'
                {...(isDisabled && { disabled: true})}
            />
            <button 
                className='input__btn' 
                {...(isDisabled && { disabled: true})}
            >
                Find Counter
            </button>
        </div>
    )
}

export default InputHandler;