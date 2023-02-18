import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [signUpError, setSignUpError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data)
        setSignUpError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                // toast.success('User created successfully.')
                // navigate('/');

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        // console.log('updated user:', user);

                        saveUserDetail(data.name, data.email, data.role)

                        toast.success('User created successfully.')
                        navigate('/');
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => {
                console.log(err)
                setSignUpError(err.message);
            })
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                // console.log(user);

                saveUserDetail(user.displayName, user.email);

                navigate('/');
            })
            .catch(err => console.log(err))
    };

    const saveUserDetail = (name, email, role = 'Buyer') => {
        const userDetail = {
            name,
            email,
            role
        }
        // console.log(userDetail);

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetail)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('save user:', data);

            })

    }

    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold text-primary text-center'>Sign Up</h2>

            <div className='border border-primary rounded-xl w-[380px] mt-6 mx-auto p-6'>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div>
                        <label className="label">
                            <span className="label-text text-lg">Name:</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('name', {
                                required: 'Name is required'
                            })}
                        />
                        {errors?.name && <p className='text-red-600'>{errors?.name.message}</p>}
                    </div>

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
                        {errors?.email && <p className='text-red-600'>{errors?.email.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-lg">Password:</span>
                        </label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                        />
                        {errors?.password && <p className='text-red-600'>{errors?.password.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-lg">User Role:</span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            {...register('role', {
                                required: 'Role is required'
                            })}
                        >
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                        {errors?.role && <p className='text-red-600'>{errors?.role.message}</p>}
                    </div>

                    <div>
                        <p className='text-red-600'>{signUpError}</p>
                    </div>

                    <input type="submit" value='Sign Up' className='btn btn-primary w-full mt-6' />

                </form>

                <p className='mt-3 text-center text-lg'>Already Have an account? <Link to='/login' className='text-primary font-bold'>Login</Link></p>

                <div className="divider">OR</div>

                <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary w-full'>Login with Google</button>

            </div>

        </div>
    );
};

export default SignUp;