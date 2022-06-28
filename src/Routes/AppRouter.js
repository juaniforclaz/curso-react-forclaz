import { BrowserRouter } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext';
import { useCartContext } from '../Context/CartContext';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {

    const { auth } = useAuthContext()
    
    return (
        <BrowserRouter>

            {
                auth.loggedIn
                    ? <PrivateRoutes />
                    : <PublicRoutes />
            }

        </BrowserRouter >
    )
}