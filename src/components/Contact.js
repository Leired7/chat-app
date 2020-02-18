import React from "react";
import "./Contact.css";


const Contact = props => (
  <div className="Contact">
        <img className="avatar" alt={props.nameavatar} src={props.image}></img>

        <div>
          <h4 className="name">{props.nameavatar}</h4>
          <div className="status">
            <div
              className={props.online ? "status-online" : "status-offline"}
            ></div>
            <span className="status-text">
              {props.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
);

export default Contact;
