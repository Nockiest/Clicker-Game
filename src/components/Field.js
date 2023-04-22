import React, { useState } from "react";

function Field({ name, cost, description }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="field" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {name && <div className="name">{name}</div>}
      <div className="buy-container">
        <div className={`buy ${isHovering ? "hover" : ""}`}>Buy</div>
      </div>
      {cost && <div className="cost">{cost} coins</div>}
      {isHovering && description && <div className="description">{description}</div>}
    </div>
  );
}

export default Field;
