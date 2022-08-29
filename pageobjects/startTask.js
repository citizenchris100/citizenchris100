const Page = require("./page");

class StartTask extends Page {
  async clientSnapshot() {
    await this.wait();
    await $(
      "id=com.hchb.android.pc.ui.development:id/visitalerts_clientsnapshot"
    ).click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
        "android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.TabHost/" +
        "android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/" +
        "android.widget.RelativeLayout/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/" +
        "android.view.View[1]"
    );
    await driver.pressKeyCode(4);
  }

  async startTask() {
    await this.wait();
    await $("id=com.hchb.android.pc.ui.development:id/btnStart").click();
    await $("id=android:id/button1").click();
  }
}

module.exports = new StartTask();
