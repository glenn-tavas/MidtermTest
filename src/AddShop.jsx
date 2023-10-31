import React, { useState } from 'react';

function AddShop() {
  const [productData, setProductData] = useState({
    Name: '',
    Description: '',
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
    console.log("New Shop Added!");
    console.log(productData);
  };

  return (
    <div>
      <h1>New Shop</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={productData.Name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="Description"
            value={productData.Description}
            onChange={handleChange}
          />
        </label>
        <br />
        <br></br>            
        <button type="submit">Submit</button>
        <button type="button" onClick={() => {
          setProductData({
            Name: '',
            Description: '',           
          });
        }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddShop;
