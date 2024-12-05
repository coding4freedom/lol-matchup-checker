import react, {useState} from 'react';
import './InputHandler.css';

const InputHandler = () => {

    const [champsUri, setChampsUri] = useState([]);

    return (
        <div className='input-handler'>
            <input 
                id='input-champ'
                className='input__field'
                type="text" 
                placeholder='Enter Champions name'
                list='champ__suggestion-list'
            />
            <button className='input__btn'>Find Counter</button>
        </div>
    )
}

export default InputHandler;