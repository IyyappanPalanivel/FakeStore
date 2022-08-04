export default class Helper {

    static isValidEmail(email) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return reg.test(email);
    }

    static isValidPhoneNumber(phone) {
      return phone.length == 10;
    }
}