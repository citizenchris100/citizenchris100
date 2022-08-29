const Page = require("./page");

class HomePage extends Page {
  get communicationsMain() {
    return $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
        "android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.TabHost/" +
        "android.widget.LinearLayout/android.widget.TabWidget/android.widget.LinearLayout[1]"
    );
  }

  async onHomeScreen() {
    await this.wait();
    await this.communicationsMain.isDisplayed();
  }

  async chooseStatus1() {
    await this.wait();
    await $("id=com.hchb.android.pc.ui.development:id/ctlStatus1").click();
  }
}

module.exports = new HomePage();
