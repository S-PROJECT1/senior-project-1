import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
            <div className="widget footer_widget">
              <h5 className="footer-title">Address</h5>
              <div className="gem-contacts">
                <div className="gem-contacts-item gem-contacts-address">Corporate Office :<br /> Doon House, B-275(A), First floor Sector-57, Shushant Lok 3 Near Hong Kong Bazzar, Gurugram Pin 122001, Haryana.</div>
                <div className="gem-contacts-item gem-contacts-phone"><i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="tel:+919122588799">+91-9122588799</a></div>

                <div className="gem-contacts-item gem-contacts-address mt-2">Reg. Office :<br /> Doon House, D2/3, 4th Floor, Chandra Tower, IDBI Bank Building Dimna Road, Mango, Jamshedpur-831012, Jharkhand.</div>
                <div className="gem-contacts-item gem-contacts-phone"><i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="tel:+919122588799">+91 9122588799</a></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                <div className="widget footer_widget">
                  <h5 className="footer-title">Recent News</h5>
                  <ul className="posts styled">
                    <li className="clearfix gem-pp-posts">
                      <div className="gem-pp-posts-text">
                        <div className="gem-pp-posts-item">
                          <a href="tel:+919122588799">Want to start Your Own Play School.</a>
                        </div>
                        <div className="gem-pp-posts-date">Call +91-9122588799</div>
                      </div>
                    </li>
                    <li className="clearfix gem-pp-posts">
                      <div className="gem-pp-posts-text">
                        <div className="gem-pp-posts-item">
                          <a href="tel:+919122588799">Now we are in Faridabad,Now we are in DaudNagar.</a>
                        </div>
                        <div className="gem-pp-posts-date">Call +91-9122588799, +91-9122588799</div>
                      </div>
                    </li>
                    <li className="clearfix gem-pp-posts">
                      <div className="gem-pp-posts-text">
                        <div className="gem-pp-posts-item">
                          <a href="tel:+919122588799">Now we are in Ranchi, Admission open</a>
                        </div>
                        <div className="gem-pp-posts-date">Call +91-9122588799, +91-9122588799</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                <div className="widget">
                  <h5 className="footer-title">Email Us</h5>
                  <div className="textwidget">
                    <div role="form" className="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">
                      <form method="post" className="wpcf7-form" noValidate="novalidate">
                        <div className="contact-form-footer">
                          <p><span className="wpcf7-form-control-wrap your-first-name"><input type="text" name="your-first-name" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Your name" /></span></p>
                          <p><span className="wpcf7-form-control-wrap your-email_1"><input type="email" name="your-email_1" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" placeholder="Your email" /></span></p>
                          <p><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your message"></textarea></span></p>
                          <div><input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit" /><span className="ajax-loader"></span></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
            <div className="widget widget_gallery gallery-grid-4">
              <h5 className="footer-title">Our Gallery</h5>
              <ul className="magnific-image">
                {/* Your gallery images go here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



