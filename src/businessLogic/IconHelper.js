export default class IconHelper {
  static getIconName (key) {
    const iconography = {
      "In progress" : "cached",
      "Released" : "done",
      "Rejected" : "block",
      "Cancelled" : "clear"
    };

    return iconography[key];
  }
}
