import MainHeader from '../components/main-header/MainHeader'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <main>
            <MainHeader />
            <Outlet />
        </main>
    )
}

export default RootLayout
