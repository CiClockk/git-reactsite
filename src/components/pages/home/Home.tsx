import React from 'react';
import SliderBox from '../../sliderBox/sliderBox';
import { NavLink } from "react-router-dom"

export const Home = () => {
  return  (
    <main className="main">
      <section className="main_intro">
        <div className="main_intro--image">
          <img src="http://localhost:3000/pictures/images/jt4.jpg" alt="img3"/>
          <div className="main_intro--text">
            <div className="main_intro--text-h">
              <h2>Find freedom in Sky</h2>
            </div>
            <div className="main_intro--text-p">
              <p>Come to our place under the sky
                near to beautiful  desert</p>
            </div>
          </div>
        </div>
        <div className="main_intro--butt">
          <NavLink className="main_intro--butt-rent" to="/Rent">
            <div>
              <h2>Rent Now</h2>
            </div>
          </NavLink>
          <div className="main_intro--butt-price">
            <p>from</p>
            <h2>3500$</h2>
            <p>per flight</p>
          </div>
        </div>
      </section>
      <section className="main_fleet">
        <div className="main_fleet--text">
          <h2>Our Fleet</h2>
          <p>Our company's fleet allows you to choose from the most
            standard models of jets and helicopters to the most premium ones.
            In our fleet, you can also order a custom version of your transport
            from the best and most famous brands and manufacturers.
            All the best for you!
          </p>
          <NavLink to="/Rent">
            <div className='main_fleet--text-link'>
              <a>Read More</a>
            </div>
          </NavLink>  
        </div>
        <div className="main_fleet--image">
          <SliderBox/>
        </div>
        <div className="main_fleet--images">
          <img src="http://localhost:3000/pictures/images/hl1.jpg" alt="img7"/>
          <img src="http://localhost:3000/pictures/images/jt2.jpg" alt="img8"/>
          <img src="http://localhost:3000/pictures/images/jt1.jpg" alt="img9"/>
        </div>
      </section>
      <section className="main_place">
        <div className="main_place--map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9633.652526186781!2d55.3660906142591!3d25.252326036476376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1719216190193!5m2!1sru!2sru" width="700" height="650"  loading="lazy"></iframe>
          <div className="main_place--map-text">
            <img src="http://localhost:3000/pictures/other/gps_point.svg" alt="img10"/>
            <h3>WE ARE HERE</h3>
          </div>
        </div>
        <div className="main_place--text">
          <h2>The Airfield</h2>
          <p>Our company's airfield is part of an extensive and expensive 
            international airport with all the necessary equipment to service 
            your aircraft. Around the airfield there is an immense desert, 
            mesmerizing in its beauty, as well as the sea, which from a bird's-eye 
            view seems simply beautiful.
          </p>
          <NavLink to="/FAQ">
            <div className='main_place--text-link'>
              <a>Read More</a>
            </div>
          </NavLink>  
        </div>
      </section>
      <section className="main_all">
        <div className="main_all--prod">
          <div className="main_all--prod-text">
            <h2>Facilities</h2>
            <div className="main_all--prod-facilities">
              <div className="b1">
                <img src="http://localhost:3000/pictures/facilities/beautiful_nature.svg" alt="img11"/>
                <p>Beautiful nature</p>
              </div>
              <div className="b2">
                <img src="http://localhost:3000/pictures/facilities/close_beach.svg" alt="img12"/>
                <p>Close to beach</p>
              </div>
              <div className="b3">
                <img src="http://localhost:3000/pictures/facilities/coffe_zone.svg" alt="img13"/>
                <p>Coffee area</p>
              </div>
              <div className="b4">
                <img src="http://localhost:3000/pictures/facilities/cool_point.svg" alt="img14"/>
                <p>Cool area</p>
              </div>
              <div className="b5">
                <img src="http://localhost:3000/pictures/facilities/free_parking.svg" alt="img15"/>
                <p>Free parking</p>
              </div>
              <div className="b6">
                <img src="http://localhost:3000/pictures/facilities/free_zone.svg" alt="img16"/>
                <p>Free area</p>
              </div>
              <div className="b7">
                <img src="http://localhost:3000/pictures/facilities/free_wifi.svg" alt="img17"/>
                <p>Free wi-fi</p>
              </div>
              <div className="b8">
                <img src="http://localhost:3000/pictures/facilities/medical_help.svg" alt="img18"/>
                <p>Medical help</p>
              </div>
              <div className="b9">
                <img src="http://localhost:3000/pictures/facilities/personal_bank.svg" alt="img19"/>
                <p>Personal bank</p>
              </div>
              <div className="b10">
                <img src="http://localhost:3000/pictures/facilities/personal_control.svg" alt="img20"/>
                <p>Personal control</p>
              </div>
              <div className="b11">
                <img src="http://localhost:3000/pictures/facilities/safe_landing.svg" alt="img21"/>
                <p>Safe landing</p>
              </div>
              <div className="b12">
                <img src="http://localhost:3000/pictures/facilities/solar_power.svg" alt="img22"/>
                <p>Solar power</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main_about">
        <div className="main_about--images">
          <img src="http://localhost:3000/pictures/images/rnt.jpg" alt="img23"/>
          <img src="http://localhost:3000/pictures/images/hl2.jpg" alt="img24"/>
        </div>        
        <div className="main_about--circle">
          <svg>
            <circle r="75" cx="115" cy="75" fill="lightgray" fill-opacity="1"></circle>
          </svg>
        </div>
        <NavLink className="main_about--images-text" to="/FAQ">
          <div>
            <p>More about us</p>
          </div>
        </NavLink>
      </section>
      <section className="main_contacts">
        <div className="main_contacts--leftside">
          <div className="main_contacts--leftside-text">
            <h2>Stay in touch with us</h2>
            <div className="main_contacts--leftside-text-cont">
              <p>
                Dubai, UAE
              </p>
              <p>
                +123 456 789 000
              </p>
              <p>
                info@runway.com
              </p>
            </div>
            <div className="main_contacts--leftside-text-social">
              <img src="http://localhost:3000/pictures/social/inst.svg" alt="img25"/>
              <img src="http://localhost:3000/pictures/social/twitx.svg" alt="img26"/>
              <img src="http://localhost:3000/pictures/social/whatsapp.svg" alt="img27"/>
            </div>
          </div>
        </div>
        <div className="main_contacts--rightside">
          <div className="main_contacts--rightside-image">
            <img src="http://localhost:3000/pictures/images/rnt.jpg" alt="img28"/>
          </div>
          <div className="main_contacts--rightside-butt">
          <NavLink className="main_contacts--rightside-butt-rent" to="/Rent">
            <div>
              <h2>Rent Now</h2>
            </div>
          </NavLink>
            <div className="main_contacts--rightside-butt-price">
              <p>from</p>
              <h2>3500$</h2>
              <p>per flight</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}