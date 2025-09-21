import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Laptops = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("laptops"); // Fetch only computer category
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    addToCart(product, quantity);
    alert(`${quantity} item(s) added to cart!`);
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, parseInt(quantity) || 1)
    }));
  };


  return (
    <div className="product-container category-page">
      <h2>Laptops</h2>
      <div className="product-grid category-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`http://localhost:8080/api/products/images/${product.imagePath}`} alt={product.name} />
              <div className="product-card-content">
                <div>
                  <h4>{product.name}</h4>
                  <p>₹{product.price.toLocaleString()}</p>
                </div>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <div className="product-grid category-grid">
            <div className="product-card">
              <img src="https://cdn.mos.cms.futurecdn.net/ScV86zVws5qDnowbP7KsWA.jpg" alt="ASUS Gaming Laptop" />
              <div className="product-card-content">
                <div>
                  <h4>ASUS Gaming Laptop</h4>
                  <p>₹2,07,499</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[3] || 1}
                    onChange={(e) => handleQuantityChange(3, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 3, name: "ASUS Gaming Laptop", price: 207499, imagePath: "asus.jpg"}, quantities[3] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://m.media-amazon.com/images/I/71B0Gu0Iz1L.jpg" alt="Samsung Galaxy Book" />
              <div className="product-card-content">
                <div>
                  <h4>Samsung Galaxy Book</h4>
                  <p>₹1,57,699</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[4] || 1}
                    onChange={(e) => handleQuantityChange(4, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 4, name: "Samsung Galaxy Book", price: 157699, imagePath: "samsung.jpg"}, quantities[4] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=892&hei=820&fmt=jpeg&qlt=90&.v=YnlWZDdpMFo0bUpJZnBpZjhKM2M3VGhTSEZFNjlmT2xUUDNBTjljV1BxWjZkZE52THZKR1lubXJyYmRyWWlhOXZvdUZlR0V0VUdJSjBWaDVNVG95Yk15Y0c3T3Y4UWZwZExHUFdTUC9lN28" alt="MacBook Pro" />
              <div className="product-card-content">
                <div>
                  <h4>MacBook Pro</h4>
                  <p>₹1,32,799</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[5] || 1}
                    onChange={(e) => handleQuantityChange(5, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 5, name: "MacBook Pro", price: 132799, imagePath: "macbook.jpg"}, quantities[5] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://i02.appmifile.com/109_operator_sg/23/08/2021/45d16ff368ca5f24dfa8f66d9238cb71.png" alt="Xiaomi Notebook Pro" />
              <div className="product-card-content">
                <div>
                  <h4>Xiaomi Notebook Pro</h4>
                  <p>₹1,07,899</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[6] || 1}
                    onChange={(e) => handleQuantityChange(6, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 6, name: "Xiaomi Notebook Pro", price: 107899, imagePath: "xiaomi.jpg"}, quantities[6] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://asset.msi.com/resize/image/global/product/product_1737602995c95879e6463325254f810682a141b82d.png62405b38c58fe0f07fcef2367d8a9ba1/400" alt="MSI Gaming Laptop" />
              <div className="product-card-content">
                <div>
                  <h4>MSI Gaming Laptop</h4>
                  <p>₹1,49,399</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[7] || 1}
                    onChange={(e) => handleQuantityChange(7, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 7, name: "MSI Gaming Laptop", price: 149399, imagePath: "msi.jpg"}, quantities[7] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://p2-ofp.static.pub/fes/cms/2023/07/17/cb33s6cv4scvgl4k2mxwpjhnmqfjgg628756.png" alt="Lenovo IdeaPad" />
              <div className="product-card-content">
                <div>
                  <h4>Lenovo IdeaPad</h4>
                  <p>₹1,16,199</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[8] || 1}
                    onChange={(e) => handleQuantityChange(8, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 8, name: "Lenovo IdeaPad", price: 116199, imagePath: "lenovo.jpg"}, quantities[8] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://lh3.googleusercontent.com/E1EPX3vM4uCQVYgE1Z858h67zWC9Osin_F3b6W5PxvjXCwj5Vomf2tXcre6X9eDdoCO961AwE8QQUCHPW5iBOUoO0KToPeJr6mKVi1-IEFokY9uHjw=w768-rwa-e365-v1" alt="Google Chromebook" />
              <div className="product-card-content">
                <div>
                  <h4>Google Chromebook</h4>
                  <p>₹99,599</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[9] || 1}
                    onChange={(e) => handleQuantityChange(9, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 9, name: "Google Chromebook", price: 99599, imagePath: "chromebook.jpg"}, quantities[9] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=95&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="HP Pavilion Laptop" />
              <div className="product-card-content">
                <div>
                  <h4>HP Pavilion Laptop</h4>
                  <p>₹74,699</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[10] || 1}
                    onChange={(e) => handleQuantityChange(10, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 10, name: "HP Pavilion Laptop", price: 74699, imagePath: "hp.jpg"}, quantities[10] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Laptops;
