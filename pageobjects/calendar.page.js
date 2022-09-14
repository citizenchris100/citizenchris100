const Page = require("./page");
const {pl} = require("faker/lib/locales");

class CalendarPage extends Page {

    get calendarRoot() {
        return $('//div[@class="scheduleMapContainer"]');
    }

    async onCalendarPage() {
        await this.calendarRoot.waitForDisplayed({timeout: 15000})
    }


}

module.exports = new CalendarPage();