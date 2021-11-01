import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'

export const Layout = ({children}) => {
    return (
        <>
            <Sidebar/>
            {children}
        </>
    )
}
