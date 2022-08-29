const Page = require("./page");

class VisitMain extends Page {

    async selectVisitActions() {
        await this.wait();
        await $("id=com.hchb.android.pc.ui.development:id/VCC_VisitItems").click();
    }
}

module.exports = new VisitMain();