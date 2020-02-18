import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component{

  constructor(props){
    super(props);
    this.state = {
      online: true,
    }
  }

  render () {
    return (
          <div className="Contact">
            <img className="avatar" alt={this.props.nameavatar} src={this.props.image}></img>

            <div>
              <h4 className="name">{this.props.nameavatar}</h4>
              <div className="status">
                <div
                  className={this.state.online ? "status-online" : "status-offline"}
                ></div>
                <span className="status-text">
                  {this.state.online ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </div>
    );
  }
}
export default Contact;
