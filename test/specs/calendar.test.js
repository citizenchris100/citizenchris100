const SideNav = require("../../pageobjects/side.nav");
const CalendarPage = require("../../pageobjects/calendar.page");
const PatientSearchModal = require("../../pageobjects/patient.search.modal");
const PatientRecordPage = require("../../pageobjects/patient.record.page");
require("dotenv").config();
let platform;

describe( 'Calendar', () => {

    beforeAll(async function () {
        platform = process.env.PLATFORM.toString()
        if( platform === "web") {
            browser.url('/');
        } else {
            let contexts = await driver.getContexts();
            await driver.switchContext(contexts[1]);
        }
    });

    it('opens', async () => {
        await SideNav.clickCalendar();
        await CalendarPage.onCalendarPage();
    });

    it('can select day', async () => {
        await SideNav.clickCalendar();
        await CalendarPage.onCalendarPage();
        await CalendarPage.selectDay("3");
    });


})