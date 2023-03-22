import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate() // tạo ra 1 biến navigate để chuyển hướng
    const [inputValue, setInputValue] = useState({}) // tạo ra 1 biến inputValue để lưu giá trị input
    const onHandleChange = (e) => { // tạo ra 1 hàm onHandleChange để lấy giá trị input
        // setInputValue({ name: e.target.value }); // lấy giá trị input và gán vào biến inputValue
        // const name = e.target.name; // lấy giá trị name của input
        // const value = e.target.value; // lấy giá trị value của input
        const { name, value } = e.target; // lấy giá trị name và value của input
        setInputValue({ ...inputValue, [name]: value });
    }
    const onHandleSubmit = (e) => { // tạo ra 1 hàm onHandleSubmit để submit form
        e.preventDefault();
        // console.log(inputValue);
        props.onAdd(inputValue)// gọi hàm onAdd từ props và truyền vào biến inputValue
        navigate('/admin/products') //điều hướng đến trang /admin/products
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} name='name' placeholder='Product Name' />
                <input type="number" onChange={onHandleChange} name='price' />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage