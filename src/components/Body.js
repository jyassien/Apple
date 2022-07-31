import React, { Component } from "react";

import appleTvlogo from "../commonResources/images/icons/apple-tv-logo.png";
import banker from "../commonResources/images/home/banker.png";
import watch from "../commonResources/images/icons/watch-series5-logo.png";
import arcade from "../commonResources/images/icons/arcade.png";

import { FullSection, HalfSection } from "./SectionProps";

class Body extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        {/* <!-- Alert Section --> */}
        <section classNameName="alert-section top-50">
          <div className="container">
            <div className="alert-title">We’re open for you.</div>
            <div className="alert-text">
              Our retail stores are closed, but you can buy our products here
              online and get fast, free delivery. If you need help finding the
              right product or have a question on your order, chat online with a
              Specialist or call 1-800-MY-APPLE.
              <br />
              For service and support, visit{" "}
              <a href="https://support.apple.com/">support.apple.com</a>.
            </div>
          </div>
        </section>
        {/* <!-- First section starts here --> */}

        <FullSection
          sect="first-hightlight-wrapper"
          title="iPad Pro"
          status="New"
          next="Order"
          bk="black"
          newIpad="iPad Pro available starting 3.25 "
          newProduct=" Magic Keyboard coming in May"
        />
        {/* <!-- First section ends here --> */}
        {/* <!-- Second section starts here --> */}
        <FullSection
          sect="second-hightlight-wrapper"
          bk="black"
          status="New"
          title="MacBook Air"
          description=" Twice the speed. Twice the storage."
          price="From $999."
          next="Buy"
        />
        {/* <!-- Second section ends here --> */}
        {/* <!-- Third section starts here --> */}
        <FullSection
          sect="third-hightlight-wrapper"
          title="iPhone 11 Pro"
          description="Pro cameras. Pro display. Pro performance."
          price="From $24.95/mo. or $599 with trade‑in."
          next="Buy"
        />
        {/* <!-- Third section ends here --> */}

        {/* // sect="fourth-heghlight-wrapper" /> */}
        {/* <!-- Fourth section starts here --> */}
        <HalfSection
          section="fourth-heghlight-wrapper"
          title="iPhone 11"
          description="Just the right amount of everything."
          price="From $18.70/mo. or $499 with trade‑in."
          learn="Learn more"
          apply="Apply now"
          watchPsa="Watch the PSA"
          rightTitle="Get the latest CDC response to COVID-19."
          titleText="white"
          linkText="white"
        />
        {/* <!-- Fourth section ends here --> */}

        {/* <!-- Fifth section starts here --> */}
        <HalfSection
          section="fifth-heghlight-wrapper"
          logoImg={appleTvlogo}
          bankerImg={banker}
          watch="Watch now on the Apple TV App"
          rightLogoImg={watch}
          rightDescription=" With the Always-On Retina display."
          rightDescription2="You’ve never seen a watch like this"
        />
        {/* <!-- Fifth section ends here --> */}

        {/* <!-- Sixth section starts here --> */}
        <HalfSection
          section="sixth-heghlight-wrapper"
          logoImg={arcade}
          description="Agent 8 is a small hero on a big mission."
          descriptionText="white"
          play="Play now"
          learnArcade="Learn about Apple Arcade"
          rightTitleText=""
          rightTitle="Apple Card Monthly Installments"
          rightDescription="Pay for your next iPhone over time, interest-free with Apple Card."
        />
        {/* <!-- Sixth section ends here --> */}
      </div>
    );
  }
}

export default Body;
