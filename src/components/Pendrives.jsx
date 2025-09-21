import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Pendrives = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("pendrives"); // Fetch only computer category
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
      <h2>Accessories</h2>
      <div className="product-grid category-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`http://localhost:8080/api/products/images/${product.imagePath}`} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹{product.price.toLocaleString()}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <div className="product-grid category-grid">
            <div className="product-card">
              <img src="https://www.lg.com/content/dam/channel/wcms/in/images/monitors/27gs60f-b_atr_eail_in_c/gallery/27GS60F-B-DZ-1.jpg/jcr:content/renditions/thum-1600x1062.jpeg" alt="LG Gaming Monitor" />
              <div className="product-card-content">
                <div>
                  <h4>LG Gaming Monitor</h4>
                  <p>₹24,899</p>
                </div>
                <button onClick={() => handleAddToCart({id: 5, name: "LG Gaming Monitor", price: 24899, imagePath: "lg-monitor.jpg"})}>Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <img src="http://zebronics.com/cdn/shop/files/Zeb-power-pic1.jpg?v=1747306528&width=2048" alt="Zebronics Gaming Mouse" />
              <div className="product-card-content">
                <div>
                  <h4>Zebronics Gaming Mouse</h4>
                  <p>₹4,149</p>
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
                  <button onClick={() => handleAddToCart({id: 6, name: "Zebronics Gaming Mouse", price: 4149, imagePath: "zebronics.jpg"}, quantities[6] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://sony.scene7.com/is/image/sonyglobalsolutions/Primary_image_1200_black?$mediaCarouselSmall$&fmt=png-alpha" alt="Sony Gaming Headphones" />
              <div className="product-card-content">
                <div>
                  <h4>Sony Gaming Headphones</h4>
                  <p>₹7,469</p>
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
                  <button onClick={() => handleAddToCart({id: 7, name: "Sony Gaming Headphones", price: 7469, imagePath: "sony.jpg"}, quantities[7] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://cdn.mos.cms.futurecdn.net/TR8y8oowioU7DTiYKzUyna.jpg" alt="Professional Microphone" />
              <div className="product-card-content">
                <div>
                  <h4>Professional Microphone</h4>
                  <p>₹12,449</p>
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
                  <button onClick={() => handleAddToCart({id: 8, name: "Professional Microphone", price: 12449, imagePath: "mic.jpg"}, quantities[8] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://m.media-amazon.com/images/I/61loBgfOrkL.jpg" alt="Gaming Chair" />
              <div className="product-card-content">
                <div>
                  <h4>Gaming Chair</h4>
                  <p>₹16,599</p>
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
                  <button onClick={() => handleAddToCart({id: 9, name: "Gaming Chair", price: 16599, imagePath: "chair.jpg"}, quantities[9] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.logitech.com/content/dam/logitech/en/products/mice/mouse-pad-studio-series/gallery/logitech-mouse-pad-studio-series-corner-view-graphite.png" alt="Logitech Mouse Pad" />
              <div className="product-card-content">
                <div>
                  <h4>Logitech Mouse Pad</h4>
                  <p>₹1,659</p>
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
                  <button onClick={() => handleAddToCart({id: 10, name: "Logitech Mouse Pad", price: 1659, imagePath: "logitech.jpg"}, quantities[10] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://www.office-furniture-direct.co.uk/Cache/Images/MI003283-1-2048-2048-1500x1500-opaque.jpg" alt="Gaming Desk" />
              <div className="product-card-content">
                <div>
                  <h4>Gaming Desk</h4>
                  <p>₹2,074</p>
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
                  <button onClick={() => handleAddToCart({id: 11, name: "Gaming Desk", price: 2074, imagePath: "desk.jpg"}, quantities[11] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://images-cdn.ubuy.co.in/64d322a36ee88826152fd266-hexagon-lights-rgb-led-wall-lights-with.jpg" alt="RGB Hexagon Lights" />
              <div className="product-card-content">
                <div>
                  <h4>RGB Hexagon Lights</h4>
                  <p>₹3,319</p>
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
                  <button onClick={() => handleAddToCart({id: 12, name: "RGB Hexagon Lights", price: 3319, imagePath: "rgb.jpg"}, quantities[12] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <img src="https://cdn.webshopapp.com/shops/277909/files/430023898/1100x720x2/wireless-earpods-xg-true-pro-50.jpg" alt="Wireless Earpods" />
              <div className="product-card-content">
                <div>
                  <h4>Wireless Earpods</h4>
                  <p>₹6,639</p>
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
                  <button onClick={() => handleAddToCart({id: 13, name: "Wireless Earpods", price: 6639, imagePath: "earpods.jpg"}, quantities[13] || 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pendrives;
