

class Shape {
    constructor() {
      this.color = '';
      this.text = '';
      this.textColor = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    }
  
    render() {
      throw new Error('Render method must be implemented by subclass');
    }
  }
  
  module.exports = Shape;
  