import React from "react";
import "./cards.css";

const CardTwo = () => {
  return (
    <div>
      <div className="card-two">
        <div className="card-two-wrapper">
          <h2>Card One</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tincidunt nunc vitae turpis accumsan, ac lacinia ante ultricies. In
            hac habitasse platea dictumst.
          </p>
          <div className="split-cardtwo">
            <div className="split-card-two left">
              <h3>Title 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tincidunt nunc vitae turpis accumsan, ac lacinia ante ultricies.
                In hac habitasse platea dictumst.
              </p>
            </div>
            <div className="split-card-two right">
              <h3>Title 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tincidunt nunc vitae turpis accumsan, ac lacinia ante ultricies.
                In hac habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
