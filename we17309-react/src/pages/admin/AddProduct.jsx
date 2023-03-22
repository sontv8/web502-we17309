import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate() // tạo ra 1 biến navigate để chuyển hướng
    const [inputValue, setInputValue] = useState({}) // tạo ra 1 biến inputValue để lưu giá trị input
    const onHandleChange = (e) => { // tạo ra 1 hàm onHandleChange để lấy giá trị input
        setInputValue({ name: e.target.value }); // lấy giá trị input và gán vào biến inputValue
    }
    const onHandleSubmit = (e) => { // tạo ra 1 hàm onHandleSubmit để submit form
        e.preventDefault();
        props.onAdd(inputValue)// gọi hàm onAdd từ props và truyền vào biến inputValue
        navigate('/admin/products') //điều hướng đến trang /admin/products
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage