import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const UpdateProductPage = (props) => {
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams()
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id == Number(id))
        reset(currentProduct)
    }, [props])
    const onHandleSubmit = (data) => {
        props.onUpdate(data);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage