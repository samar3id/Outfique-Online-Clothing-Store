
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([
    // { id: 1, name: "T-Shirt", price: 250, image: "https://images.dubizzle.com.eg/thumbnails/75994061-800x600.jpeg" },
    // { id: 2, name: "Hoodie", price: 450, image: "https://tse1.mm.bing.net/th/id/OIP.0qpubKRn0X4Werylv67niwHaIm?w=1549&h=1799&rs=1&pid=ImgDetMain&o=7&rm=3" }[
    {
        "id": 1,
        "title": "Sut Muzaffar",
        "description": "Sut Muzaffar - Dark Brown",
        "price": 19.99,
        "image": "https://khotwh.com/cdn/shop/files/dark-brown-upside-sleeve-plexus-suit-6341938_342x.progressive.jpg?v=1763044914",
        "category": "Clothing",
        "colors": ["Brown", "Black", "Gray"],
        "sizes": ["S", "M", "L", "XL"],
        "rating": 4.5,
        "material": "Cotton Blend",
        "availability": "In Stock"
    },
    {
        "id": 2,
        "title": "Hoodie Women",
        "description": "Hoodie Oversize Women's Zipper Sweatshirt",
        "price": 39.99,
        "image": "https://f.nooncdn.com/p/pzsku/ZE9F84B6DF1CD75CEDA57Z/45/1758794037/6a29e9cb-aead-4105-a668-796b8534427d.jpg?width=800",
        "category": "Clothing",
        "colors": ["Black", "White", "Gray"],
        "sizes": ["S", "M", "L", "XL"],
        "rating": 4.2,
        "material": "Polyester",
        "availability": "In Stock"
    },
    {
        "id": 3,
        "title": "Poncho",
        "description": "Black Oversized Poncho.",
        "price": 79.99,
        "image": "https://www.dresscodeme.com/wp-content/uploads/2024/09/Untitleddesign-2025-10-16T143659.66.jpeg",
        "category": "Clothing",
        "colors": ["Black", "Brown", "Beige"],
        "sizes": ["One Size"],
        "rating": 4.7,
        "material": "Wool Blend",
        "availability": "In Stock"
    },
    {
        "id": 4,
        "title": "OversiWhite Vest",
        "description": "Wrap Oversized White Vest",
        "price": 59.99,
        "image": "https://www.dresscodeme.com/wp-content/uploads/2024/09/Untitled-design_20250922_220852_0000.jpg",
        "category": "Clothing",
        "colors": ["White", "Cream", "Gray"],
        "sizes": ["S", "M", "L"],
        "rating": 4.3,
        "material": "Cotton",
        "availability": "In Stock"
    },
    {
        "id": 5,
        "title": "pullover",
        "description": "long-sleeved pullover",
        "price": 15.99,
        "image": "https://www.dresscodeme.com/wp-content/uploads/2021/10/flip-KTM10075RD.jpg",
        "category": "Clothing",
        "colors": ["Red", "Black", "Blue"],
        "sizes": ["S", "M", "L", "XL"],
        "rating": 4.0,
        "material": "Cotton",
        "availability": "In Stock"
    },
    {
        "id": 6,
        "title": " Hoodie",
        "description": "Latte Over Size Hoodie.",
        "price": 29.99,
        "image": "https://khotwh.com/cdn/shop/files/latte-over-size-hoodie-4554279_342x.progressive.jpg?v=1763044910",
        "category": "Clothing",
        "colors": ["Latte", "Black", "Gray"],
        "sizes": ["S", "M", "L", "XL"],
        "rating": 4.6,
        "material": "Fleece",
        "availability": "In Stock"
    },
    {
        "id": 7,
        "title": " Pullover",
        "description": "Black Design 419 Round Pullover.",
        "price": 9.99,
        "image": "https://khotwh.com/cdn/shop/files/black-design-419-round-pullover-7135923_342x.progressive.jpg?v=1763044909",
        "category": "Clothing",
        "colors": ["Black", "White", "Red"],
        "sizes": ["S", "M", "L", "XL"],
        "rating": 4.1,
        "material": "Cotton",
        "availability": "In Stock"
    },
    {
        "id": 8,
        "title": "Hoodie",
        "description": "Hoodie",
        "price": 25.99,
        "image": "https://www.dresscodeme.com/wp-content/uploads/2020/07/HDM10001WHT-flip.jpg",
        "category": "Clothing",
        "colors": ["Red", "Blue", "Black"],
        "sizes": ["One Size"],
        "rating": 4.4,
        "material": "Cotton",
        "availability": "In Stock"
    },
    {
        "id": 9,
        "title": "Summer sweatpants",
        "description": "Summer sweatpants",
        "price": 20.99,
        "image": "https://khotwh.com/cdn/shop/files/grey-elastic-winter-wide-leg-1617394_342x.progressive.jpg?v=1761217370",
        "category": "Clothing",
        "colors": ["Black", "Brown"],
        "sizes": ["S", "M", "L"],
        "rating": 4.2,
        "material": "Cotton",
        "availability": "In Stock"
    },
    {
        "id": 10,
        "title": "Toggi jeans",
        "description": "Comfortable Toggi jeans.",
        "price": 29.99,
        "image": "https://khotwh.com/cdn/shop/files/Black2TogyJeans_1_342x.jpg",
        "category": "Clothing",
        "colors": ["Blue", "Black", "Khaki"],
        "sizes": ["28", "30", "32", "34"],
        "rating": 4.3,
        "material": "jeans",
        "availability": "In Stock"
    },
    {
        "id": 11,
        "title": "House pants",
        "description": "House pants - Design 1",
        "price": 49.99,
        "image": "https://khotwh.com/cdn/shop/files/checkered-1-home-pants-2406803_342x.jpg",
        "category": "Clothing",
        "colors": ["Blue,white", "Black,Blue"],
        "sizes": ["One Size"],
        "rating": 4.8,
        "material": "Cotton",
        "availability": "In Stock"
    },
    {
        "id": 12,
        "title": "Milton",
        "description": "Milton Wide Leg Trousers",
        "price": 99.99,
        "image": "https://khotwh.com/cdn/shop/files/dark-brown-melton-wide-leg-7477678_342x.progressive.jpg?v=1759648062",
        "category": "Accessories",
        "colors": ["Black", "Dark Brown", "Gold"],
        "sizes": ["One Size"],
        "rating": 4.5,
        "material": "Cotton",
        "availability": "In Stock"
    },
    {
        "id": 13,
        "title": "Makeup bag",
        "description": "Makeup bag - Design 21.",
        "price": 79.99,
        "image": "https://khotwh.com/cdn/shop/files/design-21-makeup-bag-289623_342x.progressive.jpg?v=1756336190",
        "category": "bag",
        "colors": ["Silver", "Gold"],
        "sizes": ["One Size"],
        "rating": 4.7,
        "material": "Leather",
        "availability": "In Stock"
    },
    {
        "id": 14,
        "title": "Makeup bag",
        "description": "Makeup bag - Design 43",
        "price": 129.99,
        "image": "https://khotwh.com/cdn/shop/files/design-43-makeup-bag-225063_342x.progressive.jpg?v=1756332542",
        "category": "bag",
        "colors": ["It contains roses"],
        "sizes": ["One Size"],
        "rating": 4.9,
        "material": "Leather",
        "availability": "In Stock"
    },
    {
        "id": 15,
        "title": "Scarf",
        "description": "Women's Powder Color Block, Soft Textured Scarf.",
        "price": 69.99,
        "image": "https://f.nooncdn.com/p/pzsku/ZDE44919F0E8D79AA9C46Z/45/1760617856/e024f7ee-429d-43ff-8ff8-73e2da593367.jpg?width=800",
        "category": "Accessories",
        "colors": ["Kashmiri"],
        "sizes": ["One Size"],
        "rating": 4.4,
        "material": "wool",
        "availability": "In Stock"
    },
    {
        "id": 16,
        "title": "Night belt ",
        "description": "Night belt - Design 2",
        "price": 39.99,
        "image": "https://khotwh.com/cdn/shop/files/lilac-design-2-belt-165538_342x.progressive.jpg?v=1756335935",
        "category": "Accessories",
        "colors": ["rosy"],
        "sizes": ["One Size"],
        "rating": 4.3,
        "material": "Leather",
        "availability": "In Stock"
    },
    {
        "id": 17,
        "title": "necklace",
        "description": "Square stainless steel pendant set with cubic zirconia.",
        "price": 89.99,
        "image": "https://f.nooncdn.com/p/pzsku/Z089032FDE2F0B69A5E4EZ/45/_/1725714881/d01c853d-9909-46eb-a4fa-481bf2305711.jpg?width=800",
        "category": "jewelry",
        "colors": ["silver"],
        "sizes": ["L"],
        "rating": 4.6,
        "material": "Solater",
        "availability": "In Stock"
    },
    {
        "id": 18,
        "title": "Women's gold necklace",
        "description": "Women's gold multi-layered necklace with a heart pendant – a stylish accessory for parties and everyday wear",
        "price": 79.99,
        "image": "https://f.nooncdn.com/p/pzsku/Z09843B04837B9DAE87B0Z/45/1761753863/7ce87df3-6b3f-4c8f-98d8-21700da4ad49.jpg?width=800",
        "category": "Accessories",
        "colors": ["gold"],
        "sizes": ["17"],
        "rating": 4.5,
        "material": "gold",
        "availability": "In Stock"
    },
    {
        "id": 19,
        "title": "Sunglasses",
        "description": "Oversized square-frame sunglasses, classic sunglasses for outdoor activities, travel, beach, and multi-colored.",
        "price": 59.99,
        "image": "https://f.nooncdn.com/p/pzsku/Z2994DB454F6B7DE45EBBZ/45/1759615569/f66ab020-a2ff-4fc5-9549-cf30f7d4da63.jpg?width=800",
        "category": "Accessory",
        "colors": ["black and gold", "Silver"],
        "sizes": ["One Size"],
        "rating": 4.7,
        "material": "Gold Plated",
        "availability": "In Stock"
    },
    {
        "id": 20,
        "title": "Adhoomax smartwatches",
        "description": " Adhoomax Silicone replacement strap, ideal for sports or everyday use, highly compatible with smartwatches.",
        "price": 49.99,
        "image": "https://f.nooncdn.com/p/pzsku/Z44588FF8CE114DC8DBF6Z/45/1748704724/cca68524-8cc3-43de-aeab-04cfd71ca819.jpg?width=800",
        "category": "Accessory",
        "colors": ["Gray", "Black", "White"],
        "sizes": ["S", "M", "L", "XL"],
        "rating": 4.4,
        "material": "Silicone",
        "availability": "In Stock"
    }
]

  );

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
    <div className="container py-5">
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
          <p>Orders system can be added here later.</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
