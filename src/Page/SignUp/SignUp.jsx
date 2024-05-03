import { Link } from "react-router-dom";
import img from "../../assets/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providres/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)



    const handleSignUp = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)

            })
            .then(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={img} alt="" />

                </div>


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body " onSubmit={handleSignUp}>
                        <div className="form-control">
                            <h1 className="text-5xl font-bold">Sign Up !</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />

                            </div>

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Confirm Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center mb-4">Already Have an Account? <Link to="/login" className="text-orange-600 font-bold">Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;