import useAuth from "../../../context/useAuth";


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (

        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;