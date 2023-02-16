import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState('');
    console.log(loginError);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data => {
        // console.log(data);
        setLoginError('');

        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                navigate('/');
            })
            .catch(err => {
                // console.log(err)
                setLoginError(err.message);
            })
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold text-primary text-center'>Login</h2>

            <div className='border border-primary rounded-xl w-[350px] mt-6 mx-auto p-5'>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div>
                        <label className="label">
                            <span className="label-text text-lg">Email Address:</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('email', {
                                required: 'Email is required'
                            })}
                        />
                        {errors?.email && <span>{errors?.email.message}</span>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-lg">Password:</span>
                        </label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            {...register('password', {
                                required: 'Password is required'
                            })}
                        />
                        {errors?.password && <span>{errors?.password.message}</span>}
                        <p className='text-red-600'>{loginError}</p>
                    </div>

                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>

                    <input type="submit" value='Login' className='btn btn-primary w-full' />

                </form>

                <p className='mt-3 text-center text-lg'>New to this website? <Link to='/signup' className='text-primary font-bold'>Sign Up</Link></p>

                <div className="divider">OR</div>

                <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary w-full'>Login with Google</button>

            </div>

        </div>
    );
};

export default Login;