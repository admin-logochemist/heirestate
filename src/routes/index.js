import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import WebRoutes from './WebRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([ AuthenticationRoutes, MainRoutes]);
}
