import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://travel-mate-server.onrender.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    };
    return (
        <div className="add-package">
            <h2 className="text-light fw-bold mt-5 mb-3 fs-1">Please add some package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control' {...register("title", { required: true, maxLength: 200 })} placeholder="Title" />
                <input className='form-control' {...register("location", { required: true, maxLength: 200 })} placeholder="Location" />
                <textarea {...register("description")} placeholder="Description" />
                <input className='form-control' type="number" {...register("price")} placeholder="Price" />
                <input className='form-control' {...register("img")} placeholder="Image url" />
                <input className="btn btn-success form-control fs-6 fw-bold text-white" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;