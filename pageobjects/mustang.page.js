const Page = require("./page");

class MustangPage extends Page {

    get calendar() {
        return $('//span[text()="calendar_today"]');
    }

    async clickCalendar(mobile) {
        if (mobile) {
            let contexts = await driver.getContexts();
            await driver.switchContext(contexts[1]);
        } else {

        }

        await this.calendar.click();
    }

}

module.exports = new MustangPage();