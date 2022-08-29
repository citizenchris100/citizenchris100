const Page = require("./page");

class MainPage extends Page {

    get calendar() {
        return $('//span[text()="calendar_today"]');
    }

    get person_search() {
        return $('//span[text()="person_search"]');
    }

    async clickCalendar() {
        await this.calendar.click();
    }

    async clickPersonSearch() {
        await this.person_search.click();
    }

}

module.exports = new MainPage();