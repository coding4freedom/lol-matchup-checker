import react from 'react';

const inputHandler = () => {

    return (
        <div className='input-handler'>
            <input 
                id='inputId'
                type="text" 
                placeholder='Enter Champioins name'
            />
            <button className='input__btn'>Submit</button>
        </div>
    )
}

export default inputHandler;