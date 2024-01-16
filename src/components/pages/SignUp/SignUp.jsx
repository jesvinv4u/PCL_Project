import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../pages/Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            toast.error('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character');
            toast.error('Your password should have at least one uppercase character');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\/-]/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            toast.error('Your password should have at least one special character');
            return;
        }
        else if (!/\d/.test(password)) {
            setRegisterError('Your password should have at least one numeric digit');
            toast.error('Your password should have at least one numeric digit');
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    console.log('user added to the database')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 py-10">
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mt-20">
                <div className="card-body ">
                    <h1 className="text-3xl text-center font-bold">Sign up</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        {
                            registerError &&
                            <>{registerError}<ToastContainer /></>
                        }
                        {
                            success &&
                            <>{success}<ToastContainer /></>
                        }
                    </form>
                    <p className="my-4 text-center">Already have an account ?
                        <Link to='/login' className='text-orange-600 font-bold'> Please Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;