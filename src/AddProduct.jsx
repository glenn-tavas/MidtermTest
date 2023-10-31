import React, { useState } from 'react';

function AddProduct() {
  const [productData, setProductData] = useState({
    Name: '',
    Description: '',
    Category: '',
    Quantity: '',
    Price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(productData, null, 2));
    console.log("New Product Added!");
    console.log(productData);
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name*:
          <input
            type="text" required
            name="Name"
            value={productData.Name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Description*:
          <input
            type="text" required
            name="Description"
            value={productData.Description}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Category:
          <input
            type="text"
            name="Category"
            value={productData.Category}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Quantity:
          <input
            type="number"
            onclick="errorMessage()"
            name="Quantity"
            min="0"
            value={productData.Quantity}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Price:
          <input
            type="number"
            name="Price"
            min="0"
            step="0.01"
            value={productData.Price}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => {
          setProductData({
            Name: '',
            Description: '',
            Category: '',
            Quantity: '',
            Price: '',
          });
        }}>
          Cancel
        </button>
      </form><br></br>

    <p>All forms with an asterisk* are required.</p>  
    </div>
  );
}



export default AddProduct;
