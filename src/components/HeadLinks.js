import React from "react";

function HeadLinks(props) {
  return (
    <li className="nav-item">
      <a className="nav-link js-scroll-trigger" href={props.link}>
        {props.name && props.name}
        {props.img && <img src={props.img} alt={props.alt} />}
      </a>
    </li>
  );
}
function HeadLogo(props) {
  return (
    <a className="navbar-brand mx-auto" href="/">
      <img src={props.img} alt={props.alt} />
    </a>
  );
}

export default HeadLinks;
export { HeadLogo };
