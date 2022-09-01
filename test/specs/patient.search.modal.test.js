const SideNav = require("../../pageobjects/side.nav");
const PersonSearchModal = require("../../pageobjects/patient.search.modal");
require("dotenv").config();
let platform;
let name1;

describe("Person Search Modal", () => {

    beforeAll(async function () {
        platform = process.env.PLATFORM.toString()
        if( platform === "web") {
            browser.url('/');
        } else {
            let contexts = await driver.getContexts();
            await driver.switchContext(contexts[1]);
        }
    });

    it("opens", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
    });

    it("closes upon re selecting the person search nav icon", async () => {
        await PersonSearchModal.personSearchModalOpen();
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("closes when choosing other section from side nav", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        await SideNav.clickCalendar();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("displays a list of people", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        await PersonSearchModal.getPersonName(1);
        await PersonSearchModal.getPersonName(2);
        await PersonSearchModal.getPersonName(3);
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched for with only first name", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        name1 = await PersonSearchModal.getPersonName(1);
        let firstName = name1.split(' ')[0]
        await PersonSearchModal.searchForPerson(firstName);
        await PersonSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched for with only last name", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        name1 = await PersonSearchModal.getPersonName(1);
        let lastName = name1.split(' ')[1]
        await PersonSearchModal.searchForPerson(lastName);
        await PersonSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched with partially correct name", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        name1 = await PersonSearchModal.getPersonName(1);
        let partialName = name1.split(' ')[0] + " Foo"
        await PersonSearchModal.searchForPerson(partialName);
        await PersonSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched for with first & last name", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        name1 = await PersonSearchModal.getPersonName(1);
        await PersonSearchModal.searchForPerson(name1);
        await PersonSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("displays no patients when none are found", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        await PersonSearchModal.searchForPerson("foo bar");
        await PersonSearchModal.noPatientFoundDisplayed();
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalClosed();
    });

    it("closes once a person is selected from the list", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        name1 = await PersonSearchModal.getPersonName(1);
        await PersonSearchModal.searchForPerson(name1);
        await PersonSearchModal.personPresantInList(name1);
        await PersonSearchModal.selectPersonInListByName(name1);
        await PersonSearchModal.personSearchModalClosed();
    });

});