import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Computers = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("computers"); // Fetch only computer category
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
      <h2>Computers</h2>
      <div className="product-grid category-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.imagePath ? `http://localhost:8081/api/products/images/${product.imagePath}` : 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=95&w=300&auto=format&fit=crop&ixlib=rb-4.0.3'}
                alt={product.name}
              />
              <div className="product-card-content">
                <div>
                  <h4>{product.name}</h4>
                  <p>₹{product.price.toLocaleString()}</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart(product, quantities[product.id] || 1)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="product-grid category-grid">
            <div className="product-card">
              <img src="https://bitkart.com/media/catalog/product/cache/e7e09b70aea2a5bf44f081c4611eb096/l/i/lianli_216_.png" alt="Lian Li Gaming PC" />
              <div className="product-card-content">
                <div>
                  <h4>Lian Li Gaming PC</h4>
                  <p>₹1,07,999</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[1] || 1}
                    onChange={(e) => handleQuantityChange(1, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 1, name: "Lian Li Gaming PC", price: 107999, imagePath: "lianli.jpg"}, quantities[1] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.primeabgb.com/wp-content/uploads/2025/08/pre-bult-pc-Heaven-1-PC-Thumb.jpg" alt="PrimeABGB Gaming PC" />
              <div className="product-card-content">
                <div>
                  <h4>PrimeABGB Gaming PC</h4>
                  <p>₹74,699</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[2] || 1}
                    onChange={(e) => handleQuantityChange(2, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 2, name: "PrimeABGB Gaming PC", price: 74699, imagePath: "primeabgb.jpg"}, quantities[2] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.thevaluestore.in/image/cache/catalog/2024/Banners%202024/Gear-W4-Visualization-PC-270x270.jpg" alt="Gear W4 Gaming PC" />
              <div className="product-card-content">
                <div>
                  <h4>Gear W4 Gaming PC</h4>
                  <p>₹1,65,999</p>
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
                  <button onClick={() => handleAddToCart({id: 3, name: "Gear W4 Gaming PC", price: 165999, imagePath: "gearw4.jpg"}, quantities[3] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21820772/NZXT_starter.jpg?quality=90&strip=all&crop=0%2C5.5555555555556%2C100%2C88.888888888889%2Cw%3D2400" alt="NZXT Starter PC" />
              <div className="product-card-content">
                <div>
                  <h4>NZxT Starter PC</h4>
                  <p>₹49,799</p>
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
                  <button onClick={() => handleAddToCart({id: 4, name: "NZxT Starter PC", price: 49799, imagePath: "nzxt.jpg"}, quantities[4] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://cdn11.bigcommerce.com/s-ntb5wmh3f/images/stencil/1280x1280/products/240/2326/Periphio-Terra-Prebuilt-Gaming-PC-H__95252.1725647355.png?c=1" alt="Periphio Terra Gaming PC" />
              <div className="product-card-content">
                <div>
                  <h4>Periphio Terra Gaming PC</h4>
                  <p>₹99,599</p>
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
                  <button onClick={() => handleAddToCart({id: 5, name: "Periphio Terra Gaming PC", price: 99599, imagePath: "periphio.jpg"}, quantities[5] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://powergpu.com/wp-content/uploads/2025/09/Elite-mainimg-.png" alt="PowerGPU Elite PC" />
              <div className="product-card-content">
                <div>
                  <h4>PowerGPU Elite PC</h4>
                  <p>₹1,32,799</p>
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
                  <button onClick={() => handleAddToCart({id: 6, name: "PowerGPU Elite PC", price: 132799, imagePath: "powergpu.jpg"}, quantities[6] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.pcstudio.in/wp-content/uploads/2024/07/Antec-Flux-Pro-E-ATX-Full-Tower-Cabinet-1-600x600.webp" alt="Antec Flux Pro PC" />
              <div className="product-card-content">
                <div>
                  <h4>Antec Flux Pro PC</h4>
                  <p>₹58,099</p>
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
                  <button onClick={() => handleAddToCart({id: 7, name: "Antec Flux Pro PC", price: 58099, imagePath: "antec.jpg"}, quantities[7] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://hips.hearstapps.com/hmg-prod/images/best-gaming-pc-654963ac24adf.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" alt="Premium Gaming PC" />
              <div className="product-card-content">
                <div>
                  <h4>Premium Gaming PC</h4>
                  <p>₹2,48,999</p>
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
                  <button onClick={() => handleAddToCart({id: 8, name: "Premium Gaming PC", price: 248999, imagePath: "premium.jpg"}, quantities[8] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.ekfluidgaming.com/media/wysiwyg/redesign/FG-gaming-PC-first-section.png" alt="EK Fluid Gaming PC" />
              <div className="product-card-content">
                <div>
                  <h4>EK Fluid Gaming PC</h4>
                  <p>₹1,90,999</p>
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
                  <button onClick={() => handleAddToCart({id: 9, name: "EK Fluid Gaming PC", price: 190999, imagePath: "ekfluid.jpg"}, quantities[9] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.pcstudio.in/wp-content/uploads/2024/07/Phanteks-NV5-MKII-E-Atx-Mid-Tower-Tempered-Glass-Cabinet-Black-1.webp" alt="Phanteks NV5 Gaming PC" />
              <div className="product-card-content">
                <div>
                  <h4>Phanteks NV5 Gaming PC</h4>
                  <p>₹1,49,399</p>
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
                  <button onClick={() => handleAddToCart({id: 10, name: "Phanteks NV5 Gaming PC", price: 149399, imagePath: "phanteks.jpg"}, quantities[10] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Computers;
