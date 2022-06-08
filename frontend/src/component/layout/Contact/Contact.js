import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:vm6659@srmist.edu.in">
        <Button>Contact: vm6659@closetclearance.com</Button>
      </a>
    </div>
  );
};

export default Contact;
