// lib/Square.js

const Shape = require('./Shape');

class Square extends Shape {
  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="40" width="160" height="160" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

module.exports = Square;

