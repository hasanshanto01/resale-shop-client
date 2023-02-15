import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data)
    };

    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold text-primary text-center'>Sign Up</h2>

            <div className='border border-primary rounded-xl w-[350px] mt-6 mx-auto p-5'>
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
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-lg">Join As:</span>
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
                    </div>

                    <input type="submit" value='Sign Up' className='btn btn-primary w-full mt-6' />

                </form>

                <p className='mt-3 text-center text-lg'>Already Have an account? <Link to='/login' className='text-primary font-bold'>Login</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline btn-primary w-full'>SIgnUp with Google</button>

            </div>

        </div>
    );
};

export default SignUp;