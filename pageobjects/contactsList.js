const Page = require("./page");

class ContactsList extends Page {
  get contactMoreOptionsMenu() {
    return $("id=com.hchb.android.pc.ui.development:id/over_flow_menu");
  }

  async clickToAddBRA() {
    await this.contactMoreOptionsMenu.click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
        "android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/" +
        "android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[3]"
    ).click();
  }
}

module.exports = new ContactsList();
