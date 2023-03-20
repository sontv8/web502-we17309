import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products');
}
const deleteProduct = (id) => {
    return instance.delete('/products/' + id);
}
export { getAllProduct, deleteProduct }