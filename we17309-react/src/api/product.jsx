import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products');
}
const deleteProduct = (id) => {
    return instance.delete('/products/' + id);
}
const addProduct = (product) => {
    return instance.post('/products', product);
}
const updateProduct = (product) => {
    return instance.put('/products/' + product.id, product)
}
export { getAllProduct, deleteProduct, addProduct, updateProduct }