import React from "react";
import "./Contact.css";


const Contact = props => (
  <div className="Contact">
    <div>
      <img className="avatar" src={props.image} alt={props.nameavatar} />
    </div>
    <div>
      <p className="name">{props.nameavatar}</p>
    </div>
    <div className="status">
      {props.status ? (
        <div>
          <div className="status-online" />
          <p className="status-text">online</p>
        </div>
      ) : (
        <div>
          <div className="status-offline" />
          <p className="status-text">offline</p>
        </div>
      )}
    </div>
    <div />
  </div>
);

export default Contact;
