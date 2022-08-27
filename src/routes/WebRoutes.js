import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const WebRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        // {
        //     path: '/',
        //     element: <SamplePage />
        // },
        // {
        //     path: 'SamplePage',
        //     children: [
        //         {
        //             path: 'default',
        //             element: <SamplePage />
        //         }
        //     ]
        // },
    ]
};

export default WebRoutes;
