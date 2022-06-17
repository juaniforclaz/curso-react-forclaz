import { useAuthContext } from "../../Context/AuthContext"

export const UserInfo = () => {

    const { auth, logout } = useAuthContext()

    return (
        <div>
            <p className="text-primary">Bienvenido {auth.userId}</p>
            <button onClick={logout}>logout</button>
        </div>
    )
}