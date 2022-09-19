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

    patientName(index) {
        return $('//descendant::div[@class="visitCardPatient"]['+index+']')
    }

    async selectDay(day) {
        await this.calendarDay(day).click();
    }

    async getPersonName(index) {
        let elm = this.patientName(index);
        await elm.waitForDisplayed({ timeout: 10000 });
        return await elm.getText();
    }


}

module.exports = new CalendarPage();