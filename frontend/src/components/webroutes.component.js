import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import CollectionsPage from '../pages/collections';

const routes = [
    {
        page: <HomePage/>,
        link: '/'
    },
    {
        page: <HomePage/>,
        link: '/home'
    },
    {
        page: <CollectionsPage/>,
        link: '/:collections'
    },
    {
        page: <LoginPage/>,
        link: '/login'
    },
    // {
    //     page: <ProfilePage/>,
    //     link: '/profile'
    // },
    // {
    //     page: <LogoutPage/>,
    //     link: '/logout'
    // },
]

const WebRoutes = () => {
    return(
        <Routes>
            {
                routes.map((a_route, index)=>{
                    return (
                        <Route exact key={index} path={a_route.link} element={a_route.page} />
                    );
                })
            }
        </Routes>
    );
}

export default WebRoutes;