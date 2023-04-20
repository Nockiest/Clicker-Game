import React from 'react';

function StatsBar({ stats }) {
  return (
    <div className="column">
      {stats.map((stat, index) => (
        <div className="item" key={index}>{stat}</div>
      ))}
    </div>
  );
}

export default StatsBar;