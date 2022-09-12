const SideNav = require("../../pageobjects/side.nav");
const PatientSearchModal = require("../../pageobjects/patient.search.modal");
const PatientRecordPage = require("../../pageobjects/patient.record.page");
require("dotenv").config();
let platform;
let name1;

describe("Patient Record Page", () => {

    beforeAll(async function () {
        platform = process.env.PLATFORM.toString()
        if( platform === "web") {
            browser.url('/');
        } else {
            let contexts = await driver.getContexts();
            await driver.switchContext(contexts[1]);
        }
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

    it("displays visit history tab", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        await PatientSearchModal.searchForPerson(name1);
        await PatientSearchModal.personPresantInList(name1);
        await PatientSearchModal.selectPersonInListByName(name1);
        await PatientSearchModal.personSearchModalClosed();
        await PatientRecordPage.onPatientRecordPage();
        await PatientRecordPage.selectVisitHistoryTab();
        await PatientRecordPage.visitHistoryTabSelected("Visit History");
    });

    it("displays calendar tab", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        await PatientSearchModal.searchForPerson(name1);
        await PatientSearchModal.personPresantInList(name1);
        await PatientSearchModal.selectPersonInListByName(name1);
        await PatientSearchModal.personSearchModalClosed();
        await PatientRecordPage.onPatientRecordPage();
        await PatientRecordPage.selectCalendarTab();
        await PatientRecordPage.visitHistoryTabSelected("Calendar");
    });

    it("displays documents tab", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        name1 = await PatientSearchModal.getPersonName(1);
        await PatientSearchModal.searchForPerson(name1);
        await PatientSearchModal.personPresantInList(name1);
        await PatientSearchModal.selectPersonInListByName(name1);
        await PatientSearchModal.personSearchModalClosed();
        await PatientRecordPage.onPatientRecordPage();
        await PatientRecordPage.selectDocumentsTab();
        await PatientRecordPage.visitHistoryTabSelected("Documents");
    });

});