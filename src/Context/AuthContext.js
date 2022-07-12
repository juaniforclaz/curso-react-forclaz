import { createContext, useContext, useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const mockUsers = [
    { email: 'juaniforclaz55@gmail.com', pass: '1234' },
    { email: 'admin@admin.com', pass: 'admin' }
]

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        loggedIn: false,
        userId: null
    })

    const login = (values) => {
        const { email, password } = values
        const match = mockUsers.find((user) => user.email === email)
        if (match) {
            if (match.pass === password) {
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Contraseña incorrecta',
                    showConfirmButton: false,
                    showCloseButton: true,
                })

            }
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario no encontrado',
                showConfirmButton: false,
                showCloseButton: true,
            })
        }
    }

    const logout = () => {
        setAuth({
            loggedIn: false,
            userId: null
        })
    }

    return (

        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>

    )

}