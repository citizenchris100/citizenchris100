const Page = require("./page");

class MoreOptionsMenu extends Page {

    get moreOptionsMenu() {
        return $("~More options");
    }

    async syncData() {
        await driver.setImplicitTimeout(120000)
        await this.moreOptionsMenu.click();
        await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/' +
            'android.widget.LinearLayout[1]/android.widget.LinearLayout').click();
        await $("id=android:id/button1").click();
        await $("id=com.hchb.android.pc.ui.development:id/status_text");
        await $("id=com.hchb.android.pc.ui.development:id/sync_button").click();

    }
}

module.exports = new MoreOptionsMenu();