import { Redirect } from "react-router-dom";

export default function Authenticate({ user }) {


    return user ? (<Redirect to={{ pathname: "/home" }} />) :
        (<Redirect to={{ pathname: "/login" }} />)
}