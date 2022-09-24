import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const Hometest = Loadable(lazy(() => import('views/homepage/index')));
const Contact = Loadable(lazy(() => import('views/utilities/Contact')));


// ==============================|| AUTHENTICATION ROUTING ||============================== //

const WebRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <Hometest />
        },
    ]
};

export default WebRoutes;
