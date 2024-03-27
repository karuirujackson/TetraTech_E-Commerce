import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import MenuImg from '../images/menu.svg';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>
                Free Delivery for Over KES 100,000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Mobile: <a className='text-white' href="tel:+254711659920">+254711659920</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className='text-info mt-2'>TetraTech Electronics</Link>
              </h2>
            </div>
            <div className="col-5">
            <div className="input-group mt-2">
              <input 
                type="text" 
                className="form-control py-2" 
                placeholder="Search Product Here..." 
                aria-label="Search Product Here..." 
                aria-describedby="basic-addon2" 
              />
              <span class="input-group-text p-3 text-danger" id="basic-addon2">
                <BsSearch className='fs-6' /> 
              </span>
            </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-info'>
                    <img src="images/compare.svg" alt="Compare" />
                    <p className='mb-0'>
                      Compare <br />Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-info'>
                    <img src="images/wishlist.svg" alt="Wishlist" />
                    <p className='mb-0'>
                      Favorite <br />Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-info'>
                    <img src="images/user.svg" alt="User" />
                    <p className='mb-0'>
                      Login <br />My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-info'>
                    <img src="images/cart.svg" alt="Cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-danger">0</span>
                      <p className='mb-0'>KES 50,000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
       
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle='dropdown' aria-expanded='false'>
                      <img src={MenuImg} alt="" />
                      <span>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby='dropdownMenuButton1'>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Our Store</NavLink>
                    <NavLink to='/'>Blogs</NavLink>
                    <NavLink to='/'>Contact</NavLink>
                    
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
