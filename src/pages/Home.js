import React from 'react';
import {Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img 
                  src="images/main-banner-1.jpg" 
                  alt="Main Banner" 
                  className='img-fluid rounded-3' 
                />
                <div className="main-banner-content position-absolute">
                   <h4>SUPERCHARGED FOR PROS</h4>
                   <h5>ipad S13+ Pro</h5>
                   <p>From KES 150,000 or KES 20,000/mo.</p>
                   <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-01.jpg" 
                    alt="Main Banner" 
                    className='img-fluid rounded-3' 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From KES 20,000 or <br /> KES 10,000/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-02.jpg" 
                    alt="Main Banner" 
                    className='img-fluid rounded-3' 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>10% OFF</h4>
                    <h5>Smart Watch 7</h5>
                    <p>Shop the latest band styles <br /> and colors</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-03.jpg" 
                    alt="Main Banner" 
                    className='img-fluid rounded-3' 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From KES 50,000 or <br /> KES 5,000/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-04.jpg" 
                    alt="Main Banner" 
                    className='img-fluid rounded-3' 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>Airpods Max</h5>
                    <p>High Fidelity playbacks and <br /> ultra-low distributon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="Services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">For all orders above KES 100, 000</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="Services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save Upto 25% Off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="Services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="Services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="Services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items -center">
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch.jpg" alt="Camera" />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Laptop and Computers</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="Camera" />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>20 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="Camera" />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Headphones</h6>
                    <p>5 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera" />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Accessories</h6>
                    <p>100 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="Camera" />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h6>Portable Speaker</h6>
                    <p>15 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="Camera" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
