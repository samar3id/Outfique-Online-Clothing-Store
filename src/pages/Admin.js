
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Orders from './Orders';
import data from '../data/products.json'

const Admin = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState(data);

  const [activeTab, setActiveTab] = useState("products");

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [editProductId, setEditProductId] = useState(null);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Please fill all fields");
      return;
    }

    const product = {
      id: Date.now(),
      ...newProduct,
    };

    setProducts([...products, product]);

    setNewProduct({ name: "", price: "", image: "" });

    alert("Product added successfully!");
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (product) => {
    setEditProductId(product.id);
    setNewProduct({
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleSaveEdit = () => {
    setProducts(
      products.map((p) =>
        p.id === editProductId ? { ...p, ...newProduct } : p
      )
    );
    setEditProductId(null);
    setNewProduct({ name: "", price: "", image: "" });
    alert("Updated successfully!");
  };

  return (
    <div className="container py-5 adm">
      <h1 className="mb-4">Admin Dashboard</h1>
      <p>Welcome, {user.email}! You have full admin access.</p>

      <div className="mb-4">
        <button
          className={`btn me-2 ${
            activeTab === "products" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Manage Products
        </button>

        <button
          className={`btn me-2 ${
            activeTab === "orders" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("orders")}
        >
          Manage Orders
        </button>
      </div>

      {activeTab === "products" && (
        <div>
          <h3>{editProductId ? "Edit Product" : "Add New Product"}</h3>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Name"
              className="form-control mb-2"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price"
              className="form-control mb-2"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              className="form-control mb-2"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            {editProductId ? (
              <button className="btn btn-warning" onClick={handleSaveEdit}>
                Save Edit
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleAddProduct}>
                Add Product
              </button>
            )}
          </div>

          <h3 className="mt-4">Existing Products</h3>

          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-3" key={product.id}>
                <div className="card p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-text">Name: {product.title}</h6>
                    <p className="card-text">Price: {product.price} $</p>

                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "orders" && (
        <div>
          <h3>Orders Management</h3>
          <Orders />
        </div>
      )}
    </div>
    
  );
};

export default Admin;
