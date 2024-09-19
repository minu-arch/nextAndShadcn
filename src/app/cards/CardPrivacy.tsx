import React from "react";
import "./cardprivacy.css";

const CardPrivacy = () => {
  return (
    <div className="card-wrapper">
      <h1>Privacy Info</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        consectetur, repellat corporis eligendi neque exercitationem?
      </p>

      <div className="card-footer">
        <a href="#">Learn more about privacy</a>
        <div className="card-button">
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CardPrivacy;
