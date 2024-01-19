import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login successfully.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                console.log(error.message)
                toast.error('Enter your valid information');
            })
    }

    return (
        <>
            <Helmet>
                <title>Medical Camp | Login Page</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 p-10">
                <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mt-20">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="my-4 text-center">New to Blog Site ?
                            <Link to='/signUp' className='text-orange-600 font-bold'> Sign Up</Link>
                        </p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;