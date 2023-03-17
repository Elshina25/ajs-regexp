export default class Validator {
  static validateUsername(username) {
    return /[A-Za-z\d-_]/.test(username) && !/^[\d_-]|[\d_-]$/.test(username) && !/\d{4}/.test(username);
  }
}
