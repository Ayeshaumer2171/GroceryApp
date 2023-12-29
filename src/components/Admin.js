import React, { useState } from 'react';
import { items } from "../Data/ProductsData";
import EditForm from './EditForm';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import './Admin.css'; 


export default function Admin() {
  const [products, setProducts] = useState(items.slice(0, 10));
  const [formData, setFormData] = useState({ name: '', price: '' });
  const [productToEdit, setProductToEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
//show model
const [showEditModal, setShowEditModal] = useState(false);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //create product
  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      title: formData.name,
      price: parseFloat(formData.price), 
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', price: '' });
  };
  
//delete product
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };


//edit product
const handleEditProduct = (product) => {
  setProductToEdit(product);
  setIsEditing(true);
  setShowEditModal(true); 
};


 const handleUpdateProduct = () => {
  const updatedProducts = products.map((product) =>
    product.id === productToEdit.id ? { ...productToEdit } : product
  );
  setProducts(updatedProducts);
  setProductToEdit(null);
  setIsEditing(false);
};

// Function to cancel editing
const handleCancelEdit = () => {
  setProductToEdit(null);
  setIsEditing(false);
};
  return (
    <>
    <div className="container admincontainer">
    <div className="form-container">
      <h2>Add Product</h2>
      <form>
          <div className="form-group">
            <label className="label">Name:</label>
            <input
              type="text"
              className="input-field"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Price:</label>
            <input
              type="text"
              className="input-field"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAddProduct}>
            Create
          </button>
        </form>
      </div>

      <h2 className="mt-4">Product List</h2>
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>images</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td className="image-container">
            <img src={product.image} alt='no image ' style={{ maxWidth: '80px'}}/>
              </td>

              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
        <button className="btn btn-primary edit-button" onClick={() => handleEditProduct(product)}><FaEdit /></button>
       <button className="btn btn-danger delete-button" onClick={() => handleDeleteProduct(product.id)}><AiFillDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {isEditing && productToEdit && showEditModal && (
        <EditForm
          productToEdit={productToEdit}
          setProductToEdit={setProductToEdit} 
     handleUpdateProduct={handleUpdateProduct}
          handleCancelEdit={handleCancelEdit}
        />
      )}

    </>
  );
}
