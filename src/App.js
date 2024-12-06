import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const backgrounds = [
    require('../src/assets/image.JPEG'),
    require('../src/assets/image2.JPEG'),
    require('../src/assets/image4.JPEG'),
  ];
  const [currentBackground, setCurrentBackground] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // Manual navigation handler
  const goToSlide = (index) => {
    setCurrentBackground(index);
  };

  // State untuk menyimpan ulasan pengguna
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");

  // Fungsi untuk menangani input ulasan
  const handleInputChange = (e) => {
    setReviewInput(e.target.value);
  };

  // Fungsi untuk menambahkan ulasan ke daftar
  const handleAddReview = (e) => {
    e.preventDefault();
    if (reviewInput.trim()) {
      setReviews([...reviews, reviewInput]);
      setReviewInput("");
    }
  };

  return (
    <div>
      <Header />
      <main>
        {/* Slider Section */}
        <section
          id="home"
          className="full-screen"
          style={{
            backgroundImage: `url(${backgrounds[currentBackground]})`,
          }}
        >
          <div className="content">
            <h1>LIFE IS AN EVENT, MAKE IT REMARKABLE.</h1>
            <p>
              With PETO, we believe that every event is an opportunity to create
              unforgettable memories. With our experience and dedication, we ensure
              every detail of your event is meticulously planned and executed to
              perfection. With PETO, let your vision become reality.
            </p>
            <a href="#form" className="cta-button">
              Submit Your Details
            </a>
          </div>

          {/* Navigation Dots */}
          <div className="slider-navigation">
            {backgrounds.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentBackground === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </section>

        {/* Halaman About */}
        <section id="about">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={require('./assets/Logo Peto.png')} alt="Peto Team" />
            </div>
            <div className="about-text">
              <div className="bold-text">AT PETO, WE TURN DREAMS INTO REALITY</div>
              <div className="small-text">
              PETO is a leading event organizer dedicated to transforming your visions into unforgettable experiences. Our team of passionate professionals is committed to delivering excellence in every event we handle. With years of experience and a keen eye for detail, we ensure that every moment of your event is meticulously planned and executed.
              </div>
              <div className="small-text">
              Established in 2009 as Joyful Event Planner, we initially focused on creating joyful and memorable events. Since 2013, we have expanded our services to cover all types of events, including weddings and MICE (Meeting, Incentive, Conference, & Exhibition) events. In 2020, we rebranded as PETO Organizer to reflect our broader range of services and our commitment to delivering excellence.
              </div>
            </div>
          </div>
        </section>

        {/* Halaman Portfolio */}
<section id="portfolio" className="portfolio-section">
  <h2>Our Portfolio</h2>
  <p>Check out our past events and how we bring your ideas to life.</p>
  <div className="portfolio-gallery">
    {/* Foto 1 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/summit.JPEG')} alt="Portfolio 2" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 2</h3>
      </div>
    </div>

    {/* Foto 2 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/image2.JPEG')} alt="Portfolio 3" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 3</h3>
      </div>
    </div>

    {/* Foto 3*/}
    <div className="portfolio-item">
      <img src={require('../src/assets/image4.JPEG')} alt="Portfolio 4" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>TOP BRAND</h3>
      </div>
    </div>

    {/* Foto 4 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/ASEAN summit.JPEG')} alt="Portfolio 5" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>ASEAN</h3>
      </div>
    </div>

    {/* Foto 5 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/image.JPEG')} alt="Portfolio 6" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 6</h3>
      </div>
    </div>

    {/* Foto 6 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/summit 2.JPEG')} alt="Portfolio 7" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 7</h3>
      </div>
    </div>

    {/* Foto 7 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/B20 Summit.JPEG')} alt="Portfolio 8" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 8</h3>
      </div>
    </div>

    {/* Foto 8 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/Soe International Conference.JPEG')} alt="Portfolio 9" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 8</h3>
      </div>
    </div>
    {/* Foto 8 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/Soe International Conference.JPEG')} alt="Portfolio 9" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 8</h3>
      </div>
    </div>
    {/* Foto 8 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/Soe International Conference.JPEG')} alt="Portfolio 9" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 8</h3>
      </div>
    </div>
    {/* Foto 8 */}
    <div className="portfolio-item">
      <img src={require('../src/assets/Soe International Conference.JPEG')} alt="Portfolio 9" className="portfolio-image" />
      <div className="portfolio-text">
        <h3>Event Title 8</h3>
      </div>
    </div>
  </div>
</section>

        {/* Halaman Our Clients */}
        <section id="clients" className="clients-section">
    <h2>Our Clients</h2>
    <p className="clients-description">
        At PETO, we are honored to work with a diverse range of esteemed clients 
        across industries. Each partnership is a testament to our dedication, 
        quality, and ability to deliver exceptional events.
    </p>
    <div className="clients-gallery">
        <div className="client-item">
            <img src={require('../src/assets/artajasa.png')} alt="Client 1 Logo" />
        </div>
        <div className="client-item">
            <img src={require('../src/assets/ASEAN.png')} alt="Client 2 Logo" />
        </div>
        <div className="client-item">
            <img src={require('../src/assets/G20.png')} alt="Client 3 Logo" />
        </div>
        <div className="client-item">
            <img src={require('../src/assets/Logo-C20.png')} alt="Client 4 Logo" />
        </div>
        <div className="client-item">
            <img src={require('../src/assets/pertamina.png')} alt="Client 5 Logo" />
        </div>
        <div className="client-item">
            <img src={require('../src/assets/BUMN.svg.png')} alt="Client 6 Logo" />
        </div>
        <div className="client-item">
            <img src={require('../src/assets/B20.png')} alt="Client 6 Logo" />
        </div>
    </div>
</section>

        {/* Halaman Contact Us */}
<section id="contact" className="contact-section">
  <h2>Contact Us</h2>
  <p>Get in touch with us for your next event!</p>
  <a 
    href="https://wa.me/6287762114174?text=Halo%20saya%20ingin%20melakukan%20pemesanan" 
    className="whatsapp-button" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Contact Us on WhatsApp
  </a>
</section>

{/* Form Section */}
<section className="review-form">
          <h2>Leave a Review</h2>
          <form onSubmit={handleAddReview}>
            <textarea
              value={reviewInput}
              onChange={handleInputChange}
              placeholder="Write your review here..."
              rows="4"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </section>

        {/* Reviews Section */}
        <section className="review-list">
          <h2>Reviews</h2>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review, index) => (
                <li key={index} className="review-item">
                  {review}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-reviews">No reviews yet. Be the first to leave one!</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
