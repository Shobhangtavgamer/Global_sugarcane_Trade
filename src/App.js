import React, { useState, useEffect } from 'react';
import './App.css';
const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const driveLink = "https://drive.google.com/drive/u/0/folders/1A75-1IyiMqMZEVx4Xs4ZSwxsfo6zYBIK";
  const logolink = require('./SugarTradelogo.jpeg');

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  // Navigation handler
  const navigateTo = (section) => {
    setCurrentSection(section);
    setMobileMenuOpen(false);
    setSelectedProduct(null);
    setSelectedService(null);
  };

  // WhatsApp order handler
  const handleWhatsAppOrder = (product) => {
    if (!orderQuantity || isNaN(orderQuantity) || orderQuantity <= 0) {
      alert("Please enter a valid quantity in tons.");
      return;
    }
    const phoneNumber = "918828914940";
    const message = `Hello SugarTrade Global, I am interested in purchasing ${orderQuantity} tons of ${product.name} (${product.grade}). Please provide me with a quotation and further details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Student portal handlers
  const handlePortalAccess = () => {
    setShowModal(true);
  };

  const handleStudentSelection = (student) => {
    setSelectedStudent(student);
    setShowModal(false);
    setCurrentSection('student-portal');
  };

  const handleOptionClick = () => {
    window.open(driveLink, '_blank');
  };

  // our bussines 
  const services = [
    {
      icon: "🌾",
      title: "Sugarcane Trading",
      description: "Direct sourcing and export of premium quality sugarcane from certified farms across India"
    },
    {
      icon: "🚢",
      title: "International Shipping",
      description: "Comprehensive logistics solutions with worldwide shipping and delivery tracking"
    },
    {
      icon: "📋",
      title: "Documentation Support",
      description: "Complete assistance with export documentation, customs clearance, and compliance"
    },
    {
      icon: "🏭",
      title: "Processing Solutions",
      description: "Value-added processing services including juice extraction and sugar production"
    },
    {
      icon: "💰",
      title: "Trade Finance",
      description: "Flexible payment terms and trade financing options for international buyers"
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "Established partnerships with buyers and suppliers across 25+ countries"
    }
  ];

  // Products data
  const products = [
    {
      image: require('./sugarcane.jpg'),
      name: "Fresh Sugarcane",
      grade: "Premium A-Grade",
      description: "Freshly harvested sugarcane with high sucrose content (18-22%)",
      specifications: ["Length: 2-3 meters", "Diameter: 2-4 cm", "Moisture: 70-75%"]
    },
    {
      image: require('./raw sugar.jpg'),
      name: "Raw Sugar",
      grade: "ICUMSA 600-1200",
      description: "Unrefined brown sugar directly from sugarcane processing",
      specifications: ["Purity: 96-98%", "Moisture: <0.15%", "Ash: <1.5%"]
    },
    {
      image: require('./juice.jpg'),
      name: "Sugarcane Juice",
      grade: "Fresh Pressed",
      description: "Natural sugarcane juice with no additives or preservatives",
      specifications: ["Brix: 18-22°", "pH: 5.2-6.8", "Shelf life: 48 hours"]
    },
    {
      image: require('./jaggery.jpg'),
      name: "Jaggery (Gur)",
      grade: "Organic",
      description: "Traditional unrefined sweetener made from sugarcane juice",
      specifications: ["Sucrose: 65-85%", "Moisture: <3%", "Iron: 11mg/100g"]
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">🌾</div>
          <h2>Loading Sugarcane Business Portal...</h2>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen sugar-background relative">
      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${Math.random() * 10 + 12}px`
            }}
          >
            {['🌾', '🌱', '🍃', '🌿', '🚢', '🌍'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-container">
                <img 
                  src={logolink} 
                  alt="Sugarcane Trade Logo" 
                  className="logo-image"
                />
              </div>
              <div className="logo-text">
                <h3>SugarTrade Global</h3>
                <p>Import & Export</p>
              </div>
            </div>
            <nav className="desktop-nav">
              <button 
                className={currentSection === 'home' ? 'nav-active' : ''}
                onClick={() => navigateTo('home')}
              >
                🏠 Home
              </button>
              <button 
                className={currentSection === 'about' ? 'nav-active' : ''}
                onClick={() => navigateTo('about')}
              >
                ℹ️ About
              </button>
              <button 
                className={currentSection === 'services' ? 'nav-active' : ''}
                onClick={() => navigateTo('services')}
              >
                🛠️ Services
              </button>
              <button 
                className={currentSection === 'products' ? 'nav-active' : ''}
                onClick={() => navigateTo('products')}
              >
                🌾 Products
              </button>
              <button 
                className={currentSection === 'contact' ? 'nav-active' : ''}
                onClick={() => navigateTo('contact')}
              >
                📞 Contact
              </button>
              <button 
                className="portal-btn"
                onClick={handlePortalAccess}
              >
                🎓 Student Portal
              </button>
            </nav>

            {/* button for mobile*/}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* mobile  */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <button onClick={() => navigateTo('home')}>🏠 Home</button>
          <button onClick={() => navigateTo('about')}>ℹ️ About</button>
          <button onClick={() => navigateTo('services')}>🛠️ Services</button>
          <button onClick={() => navigateTo('products')}>🌾 Products</button>
          <button onClick={() => navigateTo('contact')}>📞 Contact</button>
          <button onClick={handlePortalAccess}>🎓 Student Portal</button>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Home Section */}
        {currentSection === 'home' && (
          <section className="hero-section">
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">
                  🌾 Premium Sugarcane Import & Export
                </h1>
                <p className="hero-subtitle">
                  Connecting global markets with the finest quality sugarcane products from India
                </p>
                <p className="hero-description">
                  Leading supplier of premium sugarcane, raw sugar, and processed products to international markets. 
                  With over a decade of experience, we ensure quality, reliability, and competitive pricing.
                </p>
                <div className="hero-buttons">
                  <button 
                    className="primary-btn"
                    onClick={() => navigateTo('products')}
                  >
                    🌾 View Products
                  </button>
                  <button 
                    className="secondary-btn"
                    onClick={() => navigateTo('contact')}
                  >
                    📞 Get Quote
                  </button>
                </div>
                <div className="hero-stats">
                  <div className="stat">
                    <h3>25+</h3>
                    <p>Countries Served</p>
                  </div>
                  <div className="stat">
                    <h3>10K+</h3>
                    <p>Tons Exported</p>
                  </div>
                  <div className="stat">
                    <h3>500+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {currentSection === 'about' && (
          <section className="about-section">
            <div className="container">
              <div className="section-header">
                <h2>🏢 About SugarTrade Global</h2>
                <p>Your trusted partner in international sugarcane trade</p>
              </div>
              <div className="about-content">
                <div className="about-text">
                  <h3>Our Story</h3>
                  <p>
                    Established in 2024, SugarTrade Global has grown from a small family business to one of India's 
                    leading sugarcane export companies. We specialize in connecting premium sugarcane producers 
                    with international buyers, ensuring quality and reliability at every step.
                  </p>
                  <h3>Our Mission</h3>
                  <p>
                    To promote sustainable sugarcane farming while providing the global market with the highest 
                    quality sugarcane products. We believe in fair trade practices that benefit both farmers and consumers.
                  </p>
                  <h3>Why Choose Us?</h3>
                  <ul>
                    <li>✅ Direct sourcing from certified organic farms</li>
                    <li>✅ Comprehensive quality assurance programs</li>
                    <li>✅ Competitive pricing with flexible terms</li>
                    <li>✅ Expert logistics and documentation support</li>
                    <li>✅ Sustainable and ethical business practices</li>
                  </ul>
                </div>
                <div className="about-image" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                  <img src={require('./sugarcane premium.avif')} alt="Premium Sugarcane Fields" style={{ width: '100%', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)', padding: '1.5rem 1rem', textAlign: 'center', color: '#fff' }}>
                    <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                       🌾 Premium Organic Sugarcane
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {currentSection === 'services' && (
          <section className="services-section">
            <div className="container">
              {selectedService ? (
                <div className="service-detail-view" style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                  <button 
                    onClick={() => setSelectedService(null)}
                    style={{ background: 'transparent', border: 'none', color: '#2c5d3f', fontSize: '1rem', cursor: 'pointer', marginBottom: '2rem', fontWeight: 'bold' }}
                  >
                    ⬅ Back to Services
                  </button>
                  
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '4rem' }}>{selectedService.icon}</span>
                    <h2 style={{ color: '#222', marginTop: '1rem' }}>{selectedService.title}</h2>
                    <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>{selectedService.description}</p>
                  </div>

                  <div className="service-deep-dive" style={{ marginTop: '2rem' }}>
                    {selectedService.title === "Trade Finance" && (
                      <div className="finance-chart" style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ color: '#222', textAlign: 'center', marginBottom: '2rem' }}>Trade Finance & Funding Distribution</h3>
                        <div style={{ display: 'flex', alignItems: 'flex-end', height: '250px', gap: '20px', borderBottom: '2px solid #ccc', paddingBottom: '10px', margin: '0 auto', maxWidth: '600px' }}>
                           <div style={{ height: '80%', background: '#2c5d3f', flex: 1, textAlign: 'center', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '1rem', borderRadius: '4px 4px 0 0' }}><strong>80%</strong><span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Export Revenue</span></div>
                           <div style={{ height: '45%', background: '#4caf50', flex: 1, textAlign: 'center', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '1rem', borderRadius: '4px 4px 0 0' }}><strong>45%</strong><span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Domestic Sales</span></div>
                           <div style={{ height: '65%', background: '#81c784', flex: 1, textAlign: 'center', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '1rem', borderRadius: '4px 4px 0 0' }}><strong>65%</strong><span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Investor Funding</span></div>
                           <div style={{ height: '30%', background: '#aed581', flex: 1, textAlign: 'center', color: '#222', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '1rem', borderRadius: '4px 4px 0 0' }}><strong>30%</strong><span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Govt. Subsidy</span></div>
                        </div>
                      </div>
                    )}

                    {selectedService.title === "Documentation Support" && (
                      <div className="fake-document" style={{ border: '1px solid #ccc', padding: '2rem', background: '#fffcf2', fontFamily: '"Times New Roman", Times, serif', borderRadius: '4px' }}>
                        <div style={{ border: '4px double #b8860b', padding: '2rem', background: '#fff', position: 'relative', overflow: 'hidden' }}>
                          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-30deg)', color: 'rgba(218, 165, 32, 0.1)', fontSize: '8rem', whiteSpace: 'nowrap', pointerEvents: 'none', fontWeight: 'bold' }}>
                            OFFICIAL COPY
                          </div>
                          <h1 style={{ color: '#b8860b', textAlign: 'center', letterSpacing: '2px', borderBottom: '2px solid #b8860b', paddingBottom: '1rem' }}>CERTIFICATE OF VERIFICATION</h1>
                          <h2 style={{ textAlign: 'center', marginTop: '1.5rem', color: '#333' }}>SugarTrade Global Pvt. Ltd.</h2>
                          <p style={{ textAlign: 'center', fontSize: '1.2rem', lineHeight: '1.8', marginTop: '1.5rem', color: '#444' }}>
                            This is to formally certify that the business entity mentioned above is a verified agricultural trading firm, fully licensed, and meticulously complies with all <strong>International Trade & Agricultural Export Regulations</strong> of the Government of India.
                          </p>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', borderTop: '1px solid #ddd', paddingTop: '1.5rem' }}>
                            <div style={{ fontSize: '1.1rem', color: '#333' }}>
                              <p style={{ margin: '0.5rem 0' }}><strong>License No:</strong> STG-IND-2025-9982</p>
                              <p style={{ margin: '0.5rem 0' }}><strong>Date of Issue:</strong> January 15, 2024</p>
                              <p style={{ margin: '0.5rem 0' }}><strong>Issuing Authority:</strong> Directorate General of Foreign Trade</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '4px solid #c62828', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c62828', transform: 'rotate(-15deg)', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', backgroundColor: 'rgba(198, 40, 40, 0.05)' }}>
                                GOVERNMENT<br/>VERIFIED
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedService.title === "Global Network" && (
                      <div className="network-connections" style={{ background: '#f0f4f8', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ color: '#222', textAlign: 'center', marginBottom: '2rem' }}>Our Prestigious Supporters & Verified Investors</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                           {[
                             { name: 'AgriVentures Capital', type: 'Primary Investor', icon: '💰' },
                             { name: 'Global Export Bank', type: 'Financial Partner', icon: '🏦' },
                             { name: 'State Farming Council', type: 'Govt. Supporter', icon: '🏛️' },
                             { name: 'International Shipping Co.', type: 'Logistics Partner', icon: '🚢' },
                             { name: 'Green Earth Funds', type: 'Sustainability Investor', icon: '🌱' },
                             { name: 'APAC Trade Consortium', type: 'Trade Network', icon: '🌏' }
                           ].map((investor, i) => (
                             <div key={i} style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', flex: '1 1 300px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', transition: 'transform 0.2s', cursor: 'default' }}>
                               <span style={{ fontSize: '2.5rem' }}>{investor.icon}</span>
                               <div>
                                 <h4 style={{ margin: '0 0 0.25rem 0', color: '#222', fontSize: '1.1rem' }}>{investor.name}</h4>
                                 <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 'bold' }}>{investor.type}</span>
                               </div>
                             </div>
                           ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedService.title === "Sugarcane Trading" && (
                      <div className="trading-stats" style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ color: '#222', textAlign: 'center', marginBottom: '2rem' }}>Annual Trading Volume Highlights</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #2c5d3f', flex: '1 1 200px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: '#666', margin: '0 0 0.5rem 0' }}>Total Procured</h4>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c5d3f' }}>1.2M <span style={{ fontSize: '1rem', color: '#888' }}>Tons</span></div>
                          </div>
                          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #4caf50', flex: '1 1 200px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: '#666', margin: '0 0 0.5rem 0' }}>Farms Connected</h4>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4caf50' }}>15,000+</div>
                          </div>
                          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #81c784', flex: '1 1 200px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ color: '#666', margin: '0 0 0.5rem 0' }}>Export Volume</h4>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#81c784' }}>850K <span style={{ fontSize: '1rem', color: '#888' }}>Tons</span></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedService.title === "International Shipping" && (
                      <div className="shipping-fleet" style={{ background: '#e3f2fd', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ color: '#1565c0', textAlign: 'center', marginBottom: '2rem' }}>Our Global Logistics Fleet</h3>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                          <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', flex: '1 1 300px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚢</div>
                            <h4 style={{ fontSize: '1.5rem', color: '#1565c0', margin: '0 0 0.5rem 0' }}>12 Cargo Ships</h4>
                            <p style={{ color: '#666', margin: 0 }}>Active dedicated bulk carrier vessels operating across 4 continents ensuring timely delivery.</p>
                          </div>
                          <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', flex: '1 1 300px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚛</div>
                            <h4 style={{ fontSize: '1.5rem', color: '#1565c0', margin: '0 0 0.5rem 0' }}>450+ Transport Trucks</h4>
                            <p style={{ color: '#666', margin: 0 }}>A robust domestic and harbor fleet of heavy-duty transport vehicles for seamless port transit.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedService.title === "Processing Solutions" && (
                      <div className="processing-steps" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #eee' }}>
                        <h3 style={{ color: '#222', textAlign: 'center', marginBottom: '2rem' }}>Our Value-Added Processing Cycle</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#2c5d3f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>1</div>
                            <div>
                              <h4 style={{ margin: '0 0 0.5rem 0', color: '#2c5d3f', fontSize: '1.2rem' }}>Arrival & Quality Sorting</h4>
                              <p style={{ margin: 0, color: '#555' }}>Fresh sugarcane is received at our facility and undergoes rigorous quality checks and cleaning.</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#4caf50', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>2</div>
                            <div>
                              <h4 style={{ margin: '0 0 0.5rem 0', color: '#4caf50', fontSize: '1.2rem' }}>Crushing & Extraction</h4>
                              <p style={{ margin: 0, color: '#555' }}>Industrial crushing mills extract maximum juice with minimal waste, separating the bagasse.</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#81c784', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>3</div>
                            <div>
                              <h4 style={{ margin: '0 0 0.5rem 0', color: '#81c784', fontSize: '1.2rem' }}>Refining & Crystallization</h4>
                              <p style={{ margin: 0, color: '#555' }}>The juice is boiled, purified, and centrifuged to produce high-quality raw sugar and jaggery.</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#aed581', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>4</div>
                            <div>
                              <h4 style={{ margin: '0 0 0.5rem 0', color: '#aed581', fontSize: '1.2rem' }}>Packaging & Dispatch</h4>
                              <p style={{ margin: 0, color: '#555' }}>Final products are securely packed in export-grade packaging and loaded into shipping containers.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="section-header">
                    <h2>🛠️ Our Services</h2>
                    <p>Comprehensive solutions for all your sugarcane trading needs</p>
                  </div>
                  <div className="services-grid">
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        className="service-card" 
                        onClick={() => setSelectedService(service)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <button style={{ marginTop: '1rem', width: '100%', padding: '0.5rem', background: 'transparent', color: '#2c5d3f', border: '1px solid #2c5d3f', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                          Learn More
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* Products Section */}
        {currentSection === 'products' && (
          <section className="products-section">
            <div className="container">
              {selectedProduct ? (
                <div className="product-detail-view">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    style={{ background: 'transparent', border: 'none', color: '#2c5d3f', fontSize: '1rem', cursor: 'pointer', marginBottom: '1rem', fontWeight: 'bold' }}
                  >
                    ⬅ Back to Products
                  </button>
                  <div className="product-detail-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <div style={{ flex: '1 1 300px' }}>
                      <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover', maxHeight: '400px' }} />
                    </div>
                    <div style={{ flex: '2 1 400px' }}>
                      <h2 style={{ color: '#222' }}>{selectedProduct.name}</h2>
                      <span className="product-grade" style={{ display: 'inline-block', marginBottom: '1rem', background: '#e8f5e9', color: '#2c5d3f', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>{selectedProduct.grade}</span>
                      <p style={{ fontSize: '1.1rem', color: '#555' }}>{selectedProduct.description}</p>
                      
                      <div className="product-specs" style={{ margin: '1.5rem 0' }}>
                        <h4 style={{ color: '#222' }}>Specifications:</h4>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '0.5rem', color: '#555' }}>
                          {selectedProduct.specifications.map((spec, i) => (
                            <li key={i} style={{ marginBottom: '0.5rem' }}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="order-form" style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                        <h3 style={{ color: '#222', marginBottom: '0.5rem' }}>Place Bulk Order</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>Enter the required quantity to request a quotation via WhatsApp.</p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'stretch' }}>
                          <input 
                            type="number" 
                            placeholder="Quantity (in tons)" 
                            value={orderQuantity}
                            onChange={(e) => setOrderQuantity(e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', flex: '1 1 200px', fontSize: '1rem' }}
                          />
                          <button 
                            onClick={() => handleWhatsAppOrder(selectedProduct)}
                            style={{ padding: '0.75rem 1.5rem', background: '#25D366', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flex: '1 1 200px' }}
                          >
                            💬 Order via WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="section-header">
                    <h2>🌾 Our Products</h2>
                    <p>Premium quality sugarcane products for global markets</p>
                  </div>
                  <div className="products-grid">
                    {products.map((product, index) => (
                      <div 
                        key={index} 
                        className="product-card" 
                        onClick={() => { setSelectedProduct(product); setOrderQuantity(''); }} 
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="product-image">
                          <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                        </div>
                        <div className="product-info">
                          <h3>{product.name}</h3>
                          <span className="product-grade">{product.grade}</span>
                          <p>{product.description}</p>
                          <div className="product-specs">
                            <h4>Specifications:</h4>
                            <ul>
                              {product.specifications.map((spec, i) => (
                                <li key={i}>{spec}</li>
                              ))}
                            </ul>
                          </div>
                          <button style={{ marginTop: '1.5rem', width: '100%', padding: '0.75rem', background: '#2c5d3f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                            View Details & Order
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {currentSection === 'contact' && (
          <section className="contact-section">
            <div className="container">
              <div className="section-header">
                <h2>📞 Contact Us</h2>
                <p>Get in touch for quotes and business inquiries</p>
              </div>
              <div className="contact-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <h3>🏢 Office Address</h3>
                    <p>
                      SugarTrade Global Pvt. Ltd.<br/>
                      Agricultural Trade Center<br/>
                      Satara, Maharashtra 413106<br/>
                      India
                    </p>
                  </div>
                  <div className="contact-item">
                    <h3>📱 Phone Numbers</h3>
                    <p>
                      Sales: +91 7881252027<br/>
                      Export: +91 9769330703<br/>
                      import: +91 4477889923<br/>
                      General: +91 8828914940<br/>
                    </p>
                  </div>
                  <div className="contact-item">
                    <h3>📧 Email Addresses</h3>
                    <p>
                      General: karshobhan61@gmail.com<br/>
                      export: dhireshmargaj@gmail.com<br/>
                      import: amanjha10c.41@gmail.com<br/> 
                      sales: arnavkutur1478@gmail.com<br/> 
                    </p>
                  </div>
                  <div className="contact-item">
                    <h3>⏰ Business Hours</h3>
                    <p>
                      Monday - Saturday: 9:00 AM - 6:00 PM<br/>
                      Sunday: 10:00 AM - 4:00 PM<br/>
                      Emergency: 24/7 Support Available
                    </p>
                  </div>
                </div>
                <div className="quote-form">
                  <h3>Request a Quote</h3>
                  <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="tel" placeholder="Phone Number" />
                    <select required>
                      <option value="">Select Product</option>
                      <option value="fresh-sugarcane">Fresh Sugarcane</option>
                      <option value="raw-sugar">Raw Sugar</option>
                      <option value="sugarcane-juice">Sugarcane Juice</option>
                      <option value="jaggery">Jaggery (Gur)</option>
                    </select>
                    <input type="number" placeholder="Quantity (in tons)" />
                    <textarea placeholder="Additional Requirements" rows="4"></textarea>
                    <button type="submit" className="submit-btn">
                      📋 Submit Quote Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Student Portal Section */}
        {currentSection === 'student-portal' && selectedStudent && (
          <section className="portal-section">
            <div className="container">
              <div className="portal-header">
                <h2>🎓 Welcome, {selectedStudent}</h2>
                <p>Access your learning materials and resources</p>
              </div>
              <div className="portal-options">
                <div className="portal-card" onClick={handleOptionClick}>
                  <div className="portal-icon">🔬</div>
                  <h3>Experiments</h3>
                  <p>Access laboratory experiments and research materials</p>
                  <span className="portal-link">📂 Open Drive Folder</span>
                </div>
                <div className="portal-card" onClick={handleOptionClick}>
                  <div className="portal-icon">⚗️</div>
                  <h3>Practicals</h3>
                  <p>Access practical sessions and hands-on activities</p>
                  <span className="portal-link">📂 Open Drive Folder</span>
                </div>
              </div>
              <button 
                className="back-btn"
                onClick={() => {
                  setCurrentSection('home');
                  setSelectedStudent('');
                }}
              >
                🏠 Back to Home
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Student Selection Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>🎓 Student Portal Access</h3>
              <p>Select your profile to continue</p>
            </div>
            <div className="student-options">
              <button 
                className="student-btn"
                onClick={() => handleStudentSelection('Shobhan Kar')}
              >
                <span className="student-avatar">👨‍💼</span>
                <span>Shobhan Kar</span>
              </button>
              <button 
                className="student-btn"
                onClick={() => handleStudentSelection('Dhiresh Margaj')}
              >
                <span className="student-avatar">👨‍💻</span>
                <span>Dhiresh Margaj</span>
              </button>
              <button 
                className="student-btn"
                onClick={() => handleStudentSelection('AmanKumar Jha')}
              >
                <span className="student-avatar">👨‍💻</span>
                <span>AmanKumar Jha</span>
              </button>
              <button 
                className="student-btn"
                onClick={() => handleStudentSelection('Arnav Kutur')}
              >
                <span className="student-avatar">👨‍💻</span>
                <span>Arnav Kutur</span>
              </button>
            </div>
            <button 
              className="close-modal"
              onClick={() => setShowModal(false)}
            >
              ✕ Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🌾 SugarTrade Global</h4>
              <p>Leading the future of sugarcane trade with quality, sustainability, and innovation.</p>
              <div className="social-links">
                <span>🌐 Website</span>
                <span>📧 Email</span>
                <span>📱 WhatsApp</span>
                <span>📞 Phone</span>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <button onClick={() => navigateTo('about')}>About Us</button>
              <button onClick={() => navigateTo('services')}>Services</button>
              <button onClick={() => navigateTo('products')}>Products</button>
              <button onClick={() => navigateTo('contact')}>Contact</button>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <p>Fresh Sugarcane</p>
              <p>Raw Sugar</p>
              <p>Sugarcane Juice</p>
              <p>Jaggery (Gur)</p>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📍 Satara, Maharashtra, India</p>
              <p>📞 +91-8828914940</p>
              <p>📞 +91-9769330703</p>
              <p>📞 +91-4578896661</p>
              <p>📞 +91-1447852232</p>
              <p>📧 info@sugartradeglobal.com</p>
              <p>🌐 www.sugartradeglobal.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025-26 SugarTrade Global Pvt. Ltd. All rights reserved.</p>
            <p>Professional Agricultural Import/Export Business Portal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;