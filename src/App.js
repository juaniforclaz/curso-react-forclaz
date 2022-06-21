import './Styles/Styles.css'

import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import { AppRouter } from './Routes/AppRouter';

function App() {

  return (

    <AuthProvider>

      <CartProvider>

        <AppRouter />

      </CartProvider>

    </AuthProvider>

  )
}

export default App;
