import { Link } from "react-router-dom";
import img from "../../assets/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providres/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const from = event.target
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={img} alt="" />

                </div>


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body " onSubmit={handleLogin}>
                        <div className="form-control">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Log in" />
                        </div>
                    </form>
                    <p className="text-center mb-4">New Here? <Link to="/signup" className="text-orange-600 font-bold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;