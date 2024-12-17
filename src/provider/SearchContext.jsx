import React, {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';


const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {
    const [champList, setChampList] = useState([]);
    const [status, setStatus] = useState('R'); // R = Red (error), G = Green (success), Y = Yellow (warning)
    const [prevChampList, setPrevChampList] = useState([]);

    const fetchChamps = async () => {
       try {
        const response = await axios.get('http://localhost:3000/api-names');
        const newChampList =  response.data;

        if (newChampList.length === 0) {
            throw new Error('No data returned from backend');
        }

        setChampList(newChampList);
        setPrevChampList(newChampList);
        setStatus('G');

       } catch (error) {
        console.log('Error fetching champ list', error);

        if ( prevChampList.length > 0) {
            setChampList(prevChampList);
            setStatus('Y');
        } else if (prevChampList.length < 0) {
            setStatus('R');
        }
       }
    }

    useEffect(() => {
        fetchChamps();
        const intervalId =  setInterval(fetchChamps, 60000);

        return () => clearInterval(intervalId);

    }, [prevChampList]);

    return (
        <SearchContext.Provider value={{ champList, status }}>
            { children }
        </SearchContext.Provider>
    )
}