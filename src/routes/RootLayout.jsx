import MainHeader from '../components/main-header/MainHeader'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}

export default RootLayout
