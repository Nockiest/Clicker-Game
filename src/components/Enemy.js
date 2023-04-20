import React, { Component } from "react";

class Enemy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitPoints: props.hitPoints,
      color: props.color,
      speed: props.speed,
      x: props.x,
      y: props.y,
      size: props.size,
      money: props.money
    };
    this.move = this.move.bind(this)
    this.takeDamage = this.takeDamage.bind(this)
  }

  // method to handle the enemy movement
  move = () => {
    const newX = this.move(this.x)
    const newY = this.move(this.y)
    this.setState({
      x: newX,
      y: newY
    });
  };

  // method to handle the enemy taking damage
  takeDamage = (damage) => {
    const newHitPoints = this.state.hitPoints - damage;
    if (newHitPoints <= 0) {
      // enemy dies
      this.props.onEnemyKilled(this.state.money);
    } else {
      this.setState({
        hitPoints: newHitPoints
      });
    }
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: this.state.x,
          top: this.state.y,
          width: this.state.size,
          height: this.state.size,
          backgroundColor: this.state.color
        }}
      >
        <span onClick={this.takeDamage(1)}>{this.state.hitPoints}</span>
      </div>
    );
  }
}

export default Enemy;