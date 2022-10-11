const SideNav = require("../../pageobjects/side.nav");
const PatientSearchModal = require("../../pageobjects/patient.search.modal");
const PatientRecordPage = require("../../pageobjects/patient.record.page");
require("dotenv").config();
let platform;
let name1;

describe("Patient Search Modal", () => {

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
        await PatientSearchModal.personSearchModalOpen();
    });

    /**
    it("closes upon re selecting the person search nav icon", async () => {
        await PatientSearchModal.personSearchModalOpen();
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("closes when choosing other section from side nav", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        await SideNav.clickCalendar();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("displays a list of people", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        await PatientSearchModal.getPersonName(1);
        await PatientSearchModal.getPersonName(2);
        await PatientSearchModal.getPersonName(3);
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched for with only first name", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        let firstName = name1.split(' ')[0]
        await PatientSearchModal.searchForPerson(firstName);
        await PatientSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched for with only last name", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        let lastName = name1.split(' ')[1]
        await PatientSearchModal.searchForPerson(lastName);
        await PatientSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched with partially correct name", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        let partialName = name1.split(' ')[0] + " Foo"
        await PatientSearchModal.searchForPerson(partialName);
        await PatientSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("displays person that was searched for with first & last name", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        await PatientSearchModal.searchForPerson(name1);
        await PatientSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("displays no patients when none are found", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        await PatientSearchModal.searchForPerson("foo bar");
        await PatientSearchModal.noPatientFoundDisplayed();
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalClosed();
    });

    it("closes once a person is selected from the list", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        await PatientSearchModal.searchForPerson(name1);
        await PatientSearchModal.personPresantInList(name1);
        await PatientSearchModal.selectPersonInListByName(name1);
        await PatientSearchModal.personSearchModalClosed();
    });

    it("opens the patient record once a patient is selected", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        await PatientSearchModal.searchForPerson(name1);
        await PatientSearchModal.personPresantInList(name1);
        await PatientSearchModal.selectPersonInListByName(name1);
        await PatientSearchModal.personSearchModalClosed();
        await PatientRecordPage.onPatientRecordPage();
    });

     */


});