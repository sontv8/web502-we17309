import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' //import useForm hook
import { IProduct } from '../../types/product'
interface IProps {
    onAdd: (product: IProduct) => void
}
interface IFormInput {
    id: number,
    name: string,
    price: number
}
const AddProductPage = (props: IProps) => {
    const { register, handleSubmit } = useForm<IFormInput>()
    //register là hàm dể đăng ký các trường dữ liệu trong form
    //handleSubmit là hàm dể xử lý khi submit form
    const onHandleSubmit: SubmitHandler<IFormInput> = (data: IProduct) => {
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