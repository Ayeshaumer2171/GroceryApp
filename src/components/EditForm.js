import React from 'react';

const EditForm = ({ productToEdit, handleUpdateProduct, handleCancelEdit, setProductToEdit }) => {
  const handleTitleChange = (e) => {
    setProductToEdit({ ...productToEdit, title: e.target.value });
  };

  const handlePriceChange = (e) => {
    setProductToEdit({ ...productToEdit, price: parseFloat(e.target.value) || 0 });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Product</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              value={productToEdit.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="text"
              className="form-control"
              value={productToEdit.price}
              onChange={handlePriceChange}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleUpdateProduct}>
            Update
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
