import react from 'react';
import './InputHandler.css';

const InputHandler = () => {

    return (
        <div className='input-handler'>
            <input 
                id='inputId'
                className='input__field'
                type="text" 
                placeholder='Enter Champions name'
            />
            <button className='input__btn'>Find Counter</button>
        </div>
    )
}

export default InputHandler;