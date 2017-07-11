import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ContactPage extends Component {
  render() {
    return(
      <div className="container">
          <div className="inner-container container main-content">
            <div className="row">
                <div className="section-header col-md-12">
                     <h1>Contact Us!</h1>
                </div>
            </div>
          <div className="contact-form">
              <div className="box-content col-md-12">
                  <div className="row">
                      <div className="col-md-4">
                          <div className="contact-form-inner">
                              <h3 className="contact-title">Dark cerulean ООД</h3>
                              <h4>Адрес:</h4>
                              <p>
                                  София, България
                                  кв.Изгрев, ул. "Тинтява" 15-17, етаж 1
                                  Софтуерен Университет ООД
                                  ПК: 1113<br/>
                              </p>
                              <i className="fa fa-phone"></i>Телефони за връзка: <p>+359 899 555 592</p>

                              <i className="fa fa-envelope-o"></i> Имейл адрес: <p><a href="mailto:info@softuni.bg">info@softuni.bg</a></p>

                              <i className="fa fa-clock-o"></i> Работно време: <p>Понеделник - Петък: <br/> 10:00ч. - 20:00ч.</p>
                              <p>Събота и Неделя<br/> 09:00ч. - 18:00ч.</p>
                          </div>
                      </div>
                      <div className="col-md-8">
                          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.7442397451487!2d23.35008831534504!3d42.666774979167535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cca4a719b7%3A0xdf53fcbcd8e758d7!2sSoftware+University!5e0!3m2!1sen!2sbg!4v1481032496100" width="100%" height="500px" frameBorder="0" allowFullScreen className="mapgap"></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <div className="inner-container container">
        <div className="row">
            <div className="section-header col-md-12">
                <h2>Our Team</h2>
            </div>
        </div>
        <div className="our-team row">
            <div className="team-member col-md-4 col-sm-4">
                <img src="images/mitko.jpg" alt=""/>
                <div className="box-content">
                    <h4 className="member-name">Dimitar Valchev</h4>
                    <span>Co-Founder / Architect</span>
                    <p>Artcore is free HTML5 responsive template by <b className="blue">template</b><b className="green">mo</b>. Credit goes to <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for photos used in this template.</p>
                    <ul className="social-network">
                        <li><Link to="/" className="fa fa-facebook"></Link></li>
                        <li><Link to="/" className="fa fa-twitter"></Link></li>
                        <li><Link to="/" className="fa fa-dropbox"></Link></li>
                        <li><Link to="/" className="fa fa-linkedin"></Link></li>
                    </ul>
                </div>
            </div>
            <div className="team-member col-md-4 col-sm-4">
                <img src="images/damian.jpg" alt="" />
                <div className="box-content">
                    <h4 className="member-name">Damian Pelovski</h4>
                    <span>Modern Architect</span>
                    <p>Eveniet quia molestiae autem distinctio porro illo dicta nisi pariatur officiis facilis amet! Beatae magni dolore obcaecati.</p>
                    <ul className="social-network">
                        <li><Link to="/" className="fa fa-facebook"></Link></li>
                        <li><Link to="/" className="fa fa-twitter"></Link></li>
                        <li><Link to="/" className="fa fa-dropbox"></Link></li>
                        <li><Link to="/" className="fa fa-linkedin"></Link></li>
                    </ul>
                </div>
            </div>
            <div className="team-member col-md-4 col-sm-4">
                <img src="images/ognyan.jpg" alt="" />
                <div className="box-content">
                    <h4 className="member-name">Ognyan Stanoev</h4>
                    <span>Modern Architect</span>
                    <p>Eveniet quia molestiae autem distinctio porro illo dicta nisi pariatur officiis facilis amet! Beatae magni dolore obcaecati.</p>
                    <ul className="social-network">
                        <li><Link to="/" className="fa fa-facebook"></Link></li>
                        <li><Link to="/" className="fa fa-twitter"></Link></li>
                        <li><Link to="/" className="fa fa-dropbox"></Link></li>
                        <li><Link to="/" className="fa fa-linkedin"></Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  </div>
    )
  }
}

export default ContactPage