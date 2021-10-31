import { useHistory, useLocation } from "react-router";
import useAuth from "../../../context/useAuth";
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (

        <div className="login-page">
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;