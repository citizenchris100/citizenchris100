const Page = require("./page");

class MustangPage extends Page {

    get calendar() {
        return $('//span[text()="calendar_today"]');
    }

    async clickCalendar(mobile) {
        await this.calendar.click();
    }

}

module.exports = new MustangPage();