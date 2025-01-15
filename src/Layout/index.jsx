import React from 'react'
import {Outlet} from 'react-router-dom'
import { UpperHeader } from './Header/UpperHeader'

const Layout = () => {
  return (
    <div>
        <div>
             <UpperHeader />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout