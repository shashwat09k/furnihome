import { useEffect } from 'react';
import { Tag } from 'lucide-react';
import { smoothScrollToTop, updatePageTitle } from '../utils/navigation';
import '../styles/home.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Modern Wooden Chair',
    price: 8500,
    image: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comfortable ergonomic chair with premium wood finish'
  },
  {
    id: 2,
    name: 'Dining Table',
    price: 35000,
    image: 'https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious 6-seater dining table made from solid oak'
  },
  {
    id: 3,
    name: 'Luxury Bed',
    price: 65000,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'King size bed with premium mattress and elegant design'
  },
  {
    id: 4,
    name: 'Comfortable Couch',
    price: 48000,
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '3-seater sofa with soft fabric and modern styling'
  },
  {
    id: 5,
    name: 'Wooden Cupboard',
    price: 42000,
    image: 'https://images.pexels.com/photos/8666819/pexels-photo-8666819.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious wardrobe with multiple compartments'
  }
];

function Home() {
  useEffect(() => {
    smoothScrollToTop();
    updatePageTitle('FurniHome - Premium Furniture Store in Nepal');
  }, []);
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Space</h1>
          <p>Discover premium furniture that combines style, comfort, and quality</p>
        </div>
      </section>

      <section className="products-section">
        <div className="products-container">
          <div className="section-header">
            <h2>Our Featured Products</h2>
            <p>Explore our handpicked collection of premium furniture pieces</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="price-tag">
                      <Tag size={18} />
                      <span className="price">Rs. {product.price.toLocaleString()}</span>
                    </div>
                    <button className="btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
