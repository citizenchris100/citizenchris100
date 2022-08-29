const Page = require("./page");

class AcceptTask extends Page {

    async acceptTask() {
        await this.wait();
        await $("id=com.hchb.android.pc.ui.development:id/btnAccept").click();
    }
}

module.exports = new AcceptTask();