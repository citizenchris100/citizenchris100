const Page = require("./page");

class LoginPage extends Page {

  get password() {
    return $('id=com.hchb.android.pc.ui.development:id/login_Password');
  }

  get LogIn() {
    return $('id=com.hchb.android.pc.ui.development:id/login_Login');
  }

  async login(password) {
    await driver.setImplicitTimeout(5000);
    await this.password.addValue(password);
    await this.LogIn.click();
  }
}

module.exports = new LoginPage();
