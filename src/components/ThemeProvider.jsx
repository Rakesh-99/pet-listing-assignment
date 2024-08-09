import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({ children }) => {

    const { theme } = useSelector((state) => state.theme);

    return (
        <>
            <div className={`${theme === 'light' ? 'bg-white text-black ease-in-out transition-all' : 'bg-zinc-800 text-white ease-in-out transition-all'}`}>
                {children}
            </div>
        </>
    )
}

export default ThemeProvider