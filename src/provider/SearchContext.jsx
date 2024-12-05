import React, {createContext, useContext, useState} from 'react';

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {

    return (
        <SearchContext.Provider value={{}}>
            { children }
        </SearchContext.Provider>
    )
}