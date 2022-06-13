import { createContext, useContext, useState } from "react"

const mockUsers = [
    { email: 'juaniforclaz55@gmail.com', pass: '1234' },
    { email: 'nose@gmail.com', pass: '5678' }
]

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {


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
                alert('password incorrecto')
            }
        } else {
            alert('usuario no encontrado')
        }
    }

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{ auth }}>
            {children}
        </AuthContext.Provider>
    )
}