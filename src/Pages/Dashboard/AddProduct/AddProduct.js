import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

    const imgHostingKey = process.env.REACT_APP_imgbb_Key;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP')

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = data => {
        // console.log(data.img[0]);
        const image = data.img[0];

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {

                    const product = {
                        postedDate: date,
                        seller: user?.displayName,
                        sellerEmail: user?.email,
                        name: data.product,
                        imgURL: imgData.data.url,
                        brand: data.category,
                        description: data.description,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        usedTime: data.usedTime,
                        condition: data.condition,
                        sellerPhone: data.phone,
                        location: data.location,
                        status: 'Available'
                    }
                    // console.log(product);

                    fetch('https://resale-shop-server-delta.vercel.app/laptops', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.acknowledged) {
                                toast.success('Your product successfully added.');

                                navigate('/dashboard/products');
                            }
                        })

                }
            })

    }

    return (
        <div className='mt-5'>
            <h2 className='text-3xl text-primary text-center'>Add Your Product</h2>
            <div className='flex flex-col-reverse lg:flex-row gap-10 mt-5'>

                <div className='w-full lg:w-1/2 px-8 lg:px-0'>

                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div>
                            <label className="label">
                                <span className="label-text">Date:</span>
                            </label>
                            <input
                                {...register('date')}
                                type="text"
                                defaultValue={date}
                                className="input input-bordered w-full"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input
                                {...register('name')}
                                type="text"
                                defaultValue={user?.displayName}
                                className="input input-bordered w-full"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email Address:</span>
                            </label>
                            <input
                                {...register('email')}
                                type="email"
                                defaultValue={user?.email}
                                className="input input-bordered w-full"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Category:</span>
                            </label>
                            <select
                                {...register('category', {
                                    required: true
                                })}
                                className="select select-bordered w-full"
                            >
                                <option>HP</option>
                                <option>DELL</option>
                                <option>ASUS</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Name:</span>
                            </label>
                            <input
                                {...register('product', {
                                    required: true
                                })}
                                type="text"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Description:</span>
                            </label>
                            <textarea
                                {...register('description')}
                                className="textarea textarea-bordered w-full" placeholder="Type here"
                            ></textarea>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Condition:</span>
                            </label>
                            <select
                                {...register('condition', {
                                    required: true
                                })}
                                className="select select-bordered w-full"
                            >
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Original Price (in dollar):</span>
                            </label>
                            <input
                                {...register('originalPrice', {
                                    required: true
                                })}
                                type="text"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Resale Price (in dollar):</span>
                            </label>
                            <input
                                {...register('resalePrice', {
                                    required: true
                                })}
                                type="text"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Years of Use:(years, months)</span>
                            </label>
                            <input
                                {...register('usedTime', {
                                    required: true
                                })}
                                type="text"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone:</span>
                            </label>
                            <input
                                {...register('phone', {
                                    required: true
                                })}
                                type="text"
                                placeholder="Type here" className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Location:</span>
                            </label>
                            <input
                                {...register('location', {
                                    required: true
                                })}
                                type="text"
                                placeholder="Type here" className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Image:</span>
                            </label>
                            <input
                                {...register('img', {
                                    required: true
                                })}
                                type="file"
                                className="file-input file-input-bordered w-full"
                            />
                        </div>
                        <input type="submit" value="Add Product" className='btn btn-primary w-full mt-4' />
                    </form>

                </div>

                <div className='w-full lg:w-1/2 px-8 lg:px-0'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                    />
                </div>

            </div>
        </div>
    );
};

export default AddProduct;