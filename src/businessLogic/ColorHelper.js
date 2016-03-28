export default class ColorHelper {
  static getColor () {
    const colors = {
      blue: '#2196F3',
      green: '#4CAF50',
      yellow: '#FFEB3B',
      orange: '#FF9800',
      red: '#F44235'
    };

    const max = Object.keys(colors).length;
    let key = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    let color = Object.keys(colors)[key];
    return colors[color];
  }
}
