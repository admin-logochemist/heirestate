import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const ProductDetail = Loadable(lazy(() => import('views/productdetail/index')));
const Products = Loadable(lazy(() => import('views/product/index')));
const Contact = Loadable(lazy(() => import('views/contact')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
        {
            path: 'ProductDetail',
            element: <ProductDetail />
        },
        {
            path: 'Products',
            element: <Products />
        },
        {
            path: 'Contact',
            element: <Contact />
        },
        {
            path: '/pages/login/login3',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister3 />
        }
    ]
};

export default AuthenticationRoutes;
