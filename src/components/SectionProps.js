import React from "react";

function SectionProps() {
  return <div>SectionProps</div>;
}

function FullSection(props) {
  const {
    sect,
    status,
    title,
    description,
    price,
    bk,
    next,
    newIpad,
    newProduct,
  } = props;
  return (
    <>
      <section className={sect}>
        <div className="container">
          {status && <div className="new-alert">{status}</div>}

          <div className={`title-wraper bold ${bk}`}>{title}</div>
          {description && (
            <div className="description-wrapper ">
              <div className={bk}>{description}</div>
            </div>
          )}

          {price && <div className="price-wrapper grey">{price}.</div>}

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">{next}</a>
              </li>
            </ul>
          </div>

          {newProduct && (
            <div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">{newIpad}</div>
              <div className="col-sm-12 col-md-6 text-md-left">
                {newProduct}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function HalfSection(props) {
  const {
    section,
    title,
    rightTitle,
    description,
    rightDescription,
    rightDescription2,
    descriptionText,
    price,

    whiteText,
    linkText,
    titleText,

    logoImg,
    rightLogoImg,
    bankerImg,

    learn,
    learnArcade,
    apply,
    play,
    watch,

    watchPsa,
  } = props;
  return (
    <>
      <section className={section}>
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                {title && <div className="title-wraper">{title}</div>}
                {!title && (
                  <>
                    <div className="top-logo-wrapper">
                      <div className="logo-wrapper">
                        <img src={logoImg} alt="logo" />
                      </div>
                    </div>
                    {bankerImg && (
                      <>
                        <div className="tvshow-logo-wraper">
                          <img src={bankerImg} alt="banker" />
                        </div>
                        <div className="watch-more-wrapper">
                          <a href="#">{watch}</a>
                        </div>
                      </>
                    )}
                  </>
                )}
                {description && (
                  <div className={`description-wraper ${descriptionText}`}>
                    {description}
                  </div>
                )}
                {price && (
                  <div className="price-wrapper">
                    {price}
                    <sup>1</sup>
                  </div>
                )}

                {description && (
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">
                          {learn || (
                            <>
                              {play}
                              <sup>2</sup>
                            </>
                          )}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="">{apply || learnArcade}</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                {!rightLogoImg && (
                  <div className={`title-wraper ${titleText}`}>
                    {rightTitle}
                  </div>
                )}

                {rightLogoImg && (
                  <>
                    <div className="top-logo-wrapper">
                      <div className="logo-wrapper">
                        <img src={rightLogoImg} alt="logo" />
                      </div>
                    </div>
                  </>
                )}
                {rightDescription && (
                  <div className={`description-wraper ${whiteText}`}>
                    {rightDescription} <br /> {rightDescription2}
                  </div>
                )}

                <div className={`links-wrapper ${linkText}`}>
                  <ul>
                    {watchPsa && (
                      <li>
                        <a href="">{watchPsa}</a>
                      </li>
                    )}
                    {!watchPsa && (
                      <>
                        <li>
                          <a href="">Learn more</a>
                        </li>
                        <li>
                          <a href="">Buy</a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionProps;
export { FullSection, HalfSection };
