import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Mobiles = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("mobiles"); // Fetch only computer category
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
      <h2>Mobiles</h2>
      <div className="product-grid category-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imagePath ? `http://localhost:8081/api/products/images/${product.imagePath}` : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=95&w=300&auto=format&fit=crop&ixlib=rb-4.0.3'} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹{product.price.toLocaleString()}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <div className="product-grid category-grid">
            <div className="product-card">
              <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/image_P9_2024Q2_Peony_LT_T-Shot_r.width-500.format-webp_iwsszqn.webp" alt="Google Pixel 9 Pro" />
              <div className="product-card-content">
                <div>
                  <h4>Google Pixel 9 Pro</h4>
                  <p>₹82,999</p>
                </div>
                <button onClick={() => handleAddToCart({id: 4, name: "Google Pixel 9 Pro", price: 82999, imagePath: "pixel.jpg"})}>Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <img src="https://inventstore.in/wp-content/uploads/2024/07/63.webp" alt="iPhone 16 Plus" />
              <div className="product-card-content">
                <div>
                  <h4>iPhone 16 Plus</h4>
                  <p>₹66,399</p>
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
                  <button onClick={() => handleAddToCart({id: 5, name: "iPhone 16 Plus", price: 66399, imagePath: "iphone.jpg"}, quantities[5] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://m.media-amazon.com/images/I/51jAxBrJCtL.jpg" alt="iQOO Legend" />
              <div className="product-card-content">
                <div>
                  <h4>iQOO Legend</h4>
                  <p>₹49,799</p>
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
                  <button onClick={() => handleAddToCart({id: 6, name: "iQOO Legend", price: 49799, imagePath: "iqoo.jpg"}, quantities[6] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1702983367485/d0467cb4099841dae725d707fce48b51.png" alt="Vivo X100" />
              <div className="product-card-content">
                <div>
                  <h4>Vivo X100</h4>
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
                  <button onClick={() => handleAddToCart({id: 7, name: "Vivo X100", price: 58099, imagePath: "vivo.jpg"}, quantities[7] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/s/a/samsung_galaxy_a16_5g_gold_.jpg" alt="Samsung Galaxy A16 5G" />
              <div className="product-card-content">
                <div>
                  <h4>Samsung Galaxy A16 5G</h4>
                  <p>₹99,599</p>
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
                  <button onClick={() => handleAddToCart({id: 8, name: "Samsung Galaxy A16 5G", price: 99599, imagePath: "samsung-a16.jpg"}, quantities[8] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://m.media-amazon.com/images/I/71VW8LmqqPL._UF894,1000_QL80_.jpg" alt="Redmi Note 13 Pro" />
              <div className="product-card-content">
                <div>
                  <h4>Redmi Note 13 Pro</h4>
                  <p>₹1,49,399</p>
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
                  <button onClick={() => handleAddToCart({id: 9, name: "Redmi Note 13 Pro", price: 149399, imagePath: "redmi.jpg"}, quantities[9] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/v/r/z/-original-imahbzrquuzcbyv3.jpeg?q=90" alt="POCO X7 5G" />
              <div className="product-card-content">
                <div>
                  <h4>POCO X7 5G</h4>
                  <p>₹58,099</p>
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
                  <button onClick={() => handleAddToCart({id: 10, name: "POCO X7 5G", price: 58099, imagePath: "poco.jpg"}, quantities[10] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/275686_qmnwi6.png" alt="OnePlus Nord CE3 5G" />
              <div className="product-card-content">
                <div>
                  <h4>OnePlus Nord CE3 5G</h4>
                  <p>₹66,399</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[11] || 1}
                    onChange={(e) => handleQuantityChange(11, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 11, name: "OnePlus Nord CE3 5G", price: 66399, imagePath: "oneplus.jpg"}, quantities[11] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.gizmochina.com/wp-content/uploads/2022/06/Nothing-phone-1.jpg" alt="Nothing Phone 1" />
              <div className="product-card-content">
                <div>
                  <h4>Nothing Phone 1</h4>
                  <p>₹49,799</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[12] || 1}
                    onChange={(e) => handleQuantityChange(12, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 12, name: "Nothing Phone 1", price: 49799, imagePath: "nothing.jpg"}, quantities[12] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://dlcdnwebimgs.asus.com/gain/08d3fa8a-25d1-4439-991d-34cf59fa6b4e/" alt="ASUS ZenFone 8" />
              <div className="product-card-content">
                <div>
                  <h4>ASUS ZenFone 8</h4>
                  <p>₹66,399</p>
                </div>
                <div className="quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantities[13] || 1}
                    onChange={(e) => handleQuantityChange(13, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleAddToCart({id: 13, name: "ASUS ZenFone 8", price: 66399, imagePath: "asus-zenfone.jpg"}, quantities[13] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobiles;
