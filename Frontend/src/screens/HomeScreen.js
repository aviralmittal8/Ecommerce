import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

// --- Inline CSS for the new design ---
const styles = {
  // Using a dark theme for the body can be done in index.css: body { background-color: #121212; color: #fff; }
  heroSection: {
    height: '90vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    overflow: 'hidden',
  },
  videoBackground: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-1',
    transform: 'translate(-50%, -50%)',
    filter: 'brightness(0.5)',
  },
  heroContent: {
    zIndex: '1',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 10vw, 5rem)',
    fontWeight: '800',
    letterSpacing: '-2px',
    background: 'linear-gradient(90deg, #ff219f, #355cff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    marginTop: '1rem',
    color: '#AEB4BF',
  },
  ctaButton: {
    background: 'linear-gradient(90deg, #355cff, #6ae3fe)',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    marginTop: '2rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  section: {
    padding: '80px 0',
    backgroundColor: '#1a1a1a',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '50px',
    color: '#fff',
  },
  trendingCard: {
    background: '#242424',
    border: '1px solid #333',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  },
  shopTheLook: {
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
  },
  shopTheLookImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  shopTheLookOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  shopTheLookTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  socialProof: {
    textAlign: 'center',
    padding: '60px 0',
    backgroundColor: '#121212',
  },
  socialHandle: {
    color: '#6ae3fe',
    fontWeight: 'bold',
  },
};

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        // We wrap in a div because React Fragments <> don't accept style props
        <div style={{ backgroundColor: '#121212' }}>
            {/* --- Hero Section with Video Background --- */}
            <section style={styles.heroSection}>
                <video autoPlay loop muted style={styles.videoBackground}>
                    {/* Placeholder video - you can replace this with any cool, edgy fashion/tech video */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-in-a-biker-jacket-and-sunglasses-29452-large.mp4" type="video/mp4" />
                </video>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>DEFY THE NORM</h1>
                    <p style={styles.heroSubtitle}>Your Style. Your Rules. The Future of Fashion is Here.</p>
                    <Link to="#trending" className="btn btn-primary" style={styles.ctaButton}>
                        Explore Drops
                    </Link>
                </div>
            </section>

            {/* --- Trending Products Section --- */}
            <section id="trending" style={styles.section}>
                <Container>
                    <h2 style={styles.sectionTitle}>🔥 VIRAL RIGHT NOW 🔥</h2>
                    {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
                        <Row>
                            {products.slice(0, 4).map(product => ( // Show first 4 products as trending
                                <Col key={product._id} sm={12} md={6} lg={3}>
                                    <div style={styles.trendingCard}>
                                        <Product product={product} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    }
                </Container>
            </section>

            {/* --- "Shop the Look" Section --- */}
            <section style={{ padding: '80px 0', backgroundColor: '#121212' }}>
                <Container>
                    <h2 style={styles.sectionTitle}>Shop the Vibe</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Link to="/product/1" style={styles.shopTheLook}>
                                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Streetwear Look" style={styles.shopTheLookImg} />
                                <div style={styles.shopTheLookOverlay}>
                                    <h3 style={styles.shopTheLookTitle}>Streetwear Essentials</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Link to="/product/2" style={styles.shopTheLook}>
                                <img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Techwear Look" style={styles.shopTheLookImg} />
                                <div style={styles.shopTheLookOverlay}>
                                    <h3 style={styles.shopTheLookTitle}>Urban Techwear</h3>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            {/* --- Social Proof Section --- */}
            <section style={styles.socialProof}>
                <Container>
                    <h2 style={styles.sectionTitle}>Join the Community</h2>
                    <p style={{ fontSize: '1.2rem', color: '#AEB4BF' }}>
                        Tag us in your fit <span style={styles.socialHandle}>@Store92Official</span> on Instagram to get featured!
                    </p>
                    {/* You could embed an Instagram feed here */}
                </Container>
            </section>
        </div>
    );
};

export default HomeScreen;