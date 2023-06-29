import React, {createContext, useState} from 'react';

const IdiomaContext = createContext();

const IdiomaProvider = ({children}) => {
    const [isInglish, setIsInglish] = useState(true);

    const setInglish = () => {
        setIsInglish(true);
    }

    const setSpanish = () => {
        setIsInglish(false);
    }

    return (      
        <IdiomaContext.Provider value={{setSpanish, setInglish, isInglish}}>
            {children}
        </IdiomaContext.Provider>
    );
}

export {IdiomaContext, IdiomaProvider};
