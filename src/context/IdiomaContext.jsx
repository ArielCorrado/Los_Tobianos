import React, {createContext, useState} from 'react';

const IdiomaContext = createContext();

const IdiomaProvider = ({children}) => {
    const [isInglish, setIsInglish] = useState(true);

    const setInglish = () => {
        setIsInglish(true);
        localStorage.setItem("isInglish", "true")
    }

    const setSpanish = () => {
        setIsInglish(false);
        localStorage.setItem("isInglish", "false")
    }

    return (      
        <IdiomaContext.Provider value={{setSpanish, setInglish, isInglish}}>
            {children}
        </IdiomaContext.Provider>
    );
}

export {IdiomaContext, IdiomaProvider};
