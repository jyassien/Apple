import React, { Component } from "react";

import icon16 from "../commonResources/images/icons/16.png";

import FooterList from "./FooterList";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Footer section stats here --> */}
        <footer className="footer-wrapper">
          <div className="container">
            <div className="upper-text-container">
              <p>
                1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
                promotional pricing is after trade‑in of iPhone 8 Plus and
                iPhone X in good condition. Additional trade‑in values require
                purchase of a new iPhone, subject to availability and limits.
                Must be at least 18. Apple or its trade-in partners reserve the
                right to refuse or limit any Trade In transaction for any
                reason. In‑store trade‑in requires presentation of a valid,
                government-issued photo ID (local law may require saving this
                information). Sales tax may be assessed on full value of new
                iPhone. Additional terms from Apple or Apple’s trade-in partners
                may apply. Monthly pricing: Available to qualified customers and
                requires 0% APR, 24-month installment loan with Citizens One or
                Apple Card Monthly Installments and iPhone activation with AT&T,
                Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
                Additional Apple Card Monthly Installments terms are in the{" "}
                <a
                  href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                  target="_blank"
                >
                  {" "}
                  Customer Agreement
                </a>
                . Additional iPhone Payments terms are{" "}
                <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                  {" "}
                  here
                </a>
                .
              </p>
              <p>
                2. Subscription required.
                <br />
                <br />
                Magic Keyboard sold separately.
                <br />
                <br />
                Apple TV+ is $4.99/month after free trial. One subscription per
                Family Sharing group. Offer good for 3 months after eligible
                device activation. Plan automatically renews until cancelled.
                Restrictions and other{" "}
                <a href="https://www.apple.com/promo/">terms </a> apply.
              </p>
            </div>
            <div className="footer-links-wrapper row">
              <div className="links-wrapper-1 col-sm-12 col-md">
                <h3>Shop and Learn</h3>
                <ul>
                  <FooterList name="iPad" link="/iPad/" />
                  <FooterList name="iPhone" link="/iPhone/" />
                  <FooterList name="Watch" link="/Watch/" />
                  <FooterList name="TV" link="/TV/" />
                  <FooterList name="Music" link="/Music/" />
                  <FooterList name="AirPods" link="/AirPods/" />
                  <FooterList name="HomePod" link="/HomePod/" />
                  <FooterList name="iPod touch" link="/iPod/" />
                  <FooterList name="Accessories" link="/Accessories/" />
                  <FooterList name="Gift Cards" link="/Gift/" />
                  <FooterList name="HomePod" link="/HomePod/" />
                </ul>
              </div>
              <div className="links-wrapper-2 col-sm-12 col-md">
                <h3>Services</h3>
                <ul>
                  <FooterList name="Apple Music" link="/Music/" />
                  <FooterList name="Apple News+" link="/News+/" />
                  <FooterList name="Apple TV+" link="/TV/" />
                  <FooterList name="Apple Arcade" link="/Arcade/" />
                  <FooterList name="Apple Card" link="Card/" />
                  <FooterList name="iCloud" link="/iCloud/" />
                </ul>
                <h3>Account</h3>
                <ul>
                  <FooterList name="Manage Your Apple ID" link="/id/" />
                  <FooterList name="Apple Store Account" link="/account/" />
                  <FooterList name="iCloud.com" link="/iCloud.com/" />
                </ul>
              </div>
              <div className="links-wrapper-3 col-sm-12 col-md">
                <h3>Apple Store</h3>
                <ul>
                  <FooterList name="Find a Store" link="/store/" />
                  <FooterList name="Genius Bar" link="/Bar/" />
                  <FooterList name="Today at Apple" link="/today/" />
                  <FooterList name="Apple Camp" link="/Camp/" />
                  <FooterList name="Field Trip" link="/Trip/" />
                  <FooterList name="Apple Store App" link="/app/" />
                  <FooterList
                    name="Refurbished and Clearance"
                    link="/Clearance/"
                  />
                  <FooterList name="Financing" link="/Financing/" />
                  <FooterList name="Apple Trade In" link="/trade/" />
                  <FooterList name="Order Status" link="/Order/" />
                  <FooterList name="Shopping Help" link="/help/" />
                </ul>
              </div>
              <div className="links-wrapper-4 col-sm-12 col-md">
                <h3>For Business</h3>
                <ul>
                  <FooterList name="Apple and Business" link="/Business/" />
                  <FooterList name="Shop for Business" link="/shop/" />
                </ul>
                <h3>For Education</h3>
                <ul>
                  <FooterList name="Apple and Education" link="/Education/" />
                  <FooterList name="Shop for College" link="/College/" />
                </ul>
                <h3>For Healthcare</h3>
                <ul>
                  <FooterList name="Manage Your Apple ID" link="/Manage/" />
                  <FooterList name="Apple Store Account" link="/store/" />
                  <FooterList name="iCloud.com" link="/iCloud.com/" />
                </ul>
                <h3>For Government</h3>
                <ul>
                  <FooterList name="Apple and Education" link="/education/" />
                  <FooterList name="Shop for College" link="/College/" />
                </ul>
              </div>
              <div className="links-wrapper-5 col-sm-12 col-md">
                <h3>Apple Values</h3>
                <ul>
                  <FooterList name="Find a Store" link="/Find/" />
                  <FooterList name="Genius Bar" link="/Genius/" />
                  <FooterList name="Today at Apple" link="/today/" />
                  <FooterList name="Apple Camp" link="/camp/" />
                  <FooterList name="Field Trip" link="/Trip/" />
                  <FooterList name="Apple Store App" link="/Store/" />
                </ul>
                <h3>About Apple</h3>
                <ul>
                  <FooterList name="Find a Store" link="/Find/" />
                  <FooterList name="Genius Bar" link="/Genius/" />
                  <FooterList name="Today at Apple" link="/todayatapple/" />
                  <FooterList name="Apple Camp" link="/Camp/" />
                  <FooterList name="Field Trip" link="/Trip/" />
                  <FooterList name="Apple Store App" link="/App/" />
                </ul>
              </div>
            </div>
            <div className="my-apple-wrapper">
              More ways to shop: <a href="/ ">Find an Apple Store</a> or{" "}
              <a href="/ ">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </div>
            <div className="copyright-wrapper row">
              <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                Copyright &copy; 2020 Apple Inc. All rights reserved.
              </div>
              <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                  <li>
                    <a href="/ ">Privacy Policy</a>
                  </li>

                  {/* <FooterList name="Apple Store App" link="/App/" /> */}

                  <li>
                    <a href="/ ">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/ ">Sales and Refunds</a>
                  </li>
                  <li>
                    <a href="/Legal/">Legal</a>
                  </li>
                  <li>
                    <a href="/ ">Site Map</a>
                  </li>
                </ul>
              </div>
              <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                <div className="flag-wrapper">
                  <img src={icon16} alt="icon16" />
                </div>
                <div className="footer-country-name">United States</div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer section ends here --> */}
      </div>
    );
  }
}

export default Footer;
