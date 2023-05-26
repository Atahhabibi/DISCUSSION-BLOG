import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>
              Busan is an amazing magazine Blogger theme that is easy to
              customize for your needs
            </p>
            <i className="fa fa-envelope"></i>
            <span> hello@beautiful.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +91 60521488</span>
          </div>
          <div className="box" >
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <Link
              className="item"
              to={`/other/Cespedes play the winning Baseball Game`}
            >
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Cespedes play the winning Baseball Game</p>
            </Link>
          </div>
          <Link className="box" to={`/other/US news`}>
            <h3>CRICKET</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </Link>
          <div className="box">
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <Link to={`/other/US Boxing`} className="li-footer">
                <span>Boxing</span> <label>(5)</label>
              </Link>
              <Link to={`/other/US Fashion`} className="li-footer">
                <span>Fashion</span> <label>(6)</label>
              </Link>
              <Link to={`/other/US Health`} className="li-footer">
                <span>Health</span> <label>(7)</label>
              </Link>
              <Link to={`/other/US Nature`} className="li-footer">
                <span>Nature</span> <label>(9)</label>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <p>© all rights reserved</p>
          <p>
            made with <i className="fa fa-heart"></i> by gorkhcoder
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer
