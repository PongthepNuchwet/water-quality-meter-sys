import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Authenticate() {

    const user = useSelector((state) => state.auth.status)

    return user ? (<Redirect to={{ pathname: "/home" }} />) :
        (<Redirect to={{ pathname: "/login" }} />)
}