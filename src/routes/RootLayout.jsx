import { Fragment } from 'react'
import MainHeader from '../components/main-header/MainHeader'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <Fragment>
            <MainHeader />
            <Outlet />
        </Fragment>
    )
}

export default RootLayout
