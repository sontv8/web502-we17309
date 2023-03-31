import React from 'react'
import { useForm } from 'react-hook-form' //import useForm hook

const AddProductPage = (props) => {
    const { register, handleSubmit } = useForm()
    //register là hàm dể đăng ký các trường dữ liệu trong form
    //handleSubmit là hàm dể xử lý khi submit form
    const onHandleSubmit = (data) => {
        props.onAdd(data);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage