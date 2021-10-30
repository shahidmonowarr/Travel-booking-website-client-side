import React from 'react';
import './AddPackage.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    };
    return (
        <div className="add-package">
            <h2>Please add some package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 200 })} placeholder="Title" />
                <input {...register("location", { required: true, maxLength: 200 })} placeholder="Location" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;