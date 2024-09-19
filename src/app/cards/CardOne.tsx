import React from "react";
import "./cards.css";

const CardOne = () => {
  return (
    <div>
      <div className="card-one">
        <div className="card-one-wrapper">
          <h2>Card One</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tincidunt nunc vitae turpis accumsan, ac lacinia ante ultricies. In
            hac habitasse platea dictumst.
          </p>
          <div className="split-card">
            <div className="split-card-left">
              <h3>Title 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tincidunt nunc vitae turpis accumsan, ac lacinia ante ultricies.
                In hac habitasse platea dictumst.
              </p>
            </div>
            <div className="split-card-right">
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

export default CardOne;
