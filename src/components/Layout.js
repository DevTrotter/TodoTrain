import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import '../Style/global.css'

export const Layout = ({children}) => {
    return (
        <>
            <Sidebar/>
            {children}
        </>
    )
}
