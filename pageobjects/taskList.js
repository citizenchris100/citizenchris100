const Page = require("./page");

class TaskList extends Page {

    async selectTask() {
        await this.wait();
        await $("id=com.hchb.android.pc.ui.development:layout/patientlist_childrow").click();
    }
}

module.exports = new TaskList();