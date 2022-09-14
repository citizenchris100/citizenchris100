const Page = require("./page");
const {pl} = require("faker/lib/locales");

class CalendarPage extends Page {

    get calendarRoot() {
        return $('//div[@class="scheduleMapContainer"]');
    }

    async onCalendarPage() {
        await this.calendarRoot.waitForDisplayed({timeout: 15000})
    }

    calendarDay(day) {
        return $('//descendant::td[contains(@class,"day")]['+day+']');
    }

    async selectDay(day) {
        await this.calendarDay(day).click();
    }


}

module.exports = new CalendarPage();