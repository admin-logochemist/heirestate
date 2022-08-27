import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Property = Loadable(lazy(() => import('views/utilities/Property')));
const Showing = Loadable(lazy(() => import('views/utilities/Showing')));
const Offers = Loadable(lazy(() => import('views/utilities/Offers')));
const Comps = Loadable(lazy(() => import('views/utilities/Comps')));
const Sale = Loadable(lazy(() => import('views/utilities/Sale')));
const Services = Loadable(lazy(() => import('views/utilities/Services')));
const Probate = Loadable(lazy(() => import('views/utilities/Probate')));

const Courtconfirmation = Loadable(lazy(() => import('views/utilities/Courtconfirmation')));
const Contact = Loadable(lazy(() => import('views/utilities/Contact')));


// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const  MainRoutes = {
    
    path: '/d',
    element: <MainLayout />,
    children: [
     //hhhhhhhhhhhhhhhhhhhhhhhhh
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'dashboard',
                    element: <DashboardDefault />
                }
            ]
        },
        // {
        //     path: '/',
        //     element: <DashboardDefault />
        // },
        // {
        //     path: 'dashboard',
        //     children: [
        //         {
        //             path: 'default',
        //             element: <DashboardDefault />
        //         }
        //     ]
        // },
        
        //hhhhhhhhhhhhhh
        {
            path: 'utils',
            children: [
                {
                    path: 'property',
                    element: <Property />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'showing',
                    element: <Showing />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'offers',
                    element: <Offers />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'comps',
                    element: <Comps />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'sale',
                    element: <Sale />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'probate',
                    element: <Probate />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'services',
                    element: <Services />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'Courtconfirmation',
                    element: <Courtconfirmation />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'Contact',
                    element: <Contact />
                }
            ]
        },
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // }
    ]
};

export default MainRoutes;
