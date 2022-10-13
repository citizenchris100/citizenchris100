const SideNav = require("../../pageobjects/side.nav");
const PatientSearchModal = require("../../pageobjects/patient.search.modal");
const PatientRecordPage = require("../../pageobjects/patient.record.page");
require("dotenv").config();
let platform;
let name1;
let name2;
let name3;
let firstName;
let lastName;

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


    it("displays a list of people", async () => {
        await SideNav.clickPersonSearch();
        await PatientSearchModal.personSearchModalOpen();
        await PatientSearchModal.clickAddPatient();
        await PatientSearchModal.clickAddPatient();
        name1 = await PatientSearchModal.getPersonName(1);
        name2 = await PatientSearchModal.getPersonName(2);
        name3 = await PatientSearchModal.getPersonName(3);
    });


    it("displays person that was searched for with only first name", async () => {
        firstName = name1.split(' ')[0];
        lastName = name1.split(' ')[1];
        await PatientSearchModal.searchForPerson(firstName);
        await PatientSearchModal.personPresantInList(lastName);
        await PatientSearchModal.clearSearchField(firstName.length);
    });


    it("displays person that was searched for with only last name", async () => {
        await PatientSearchModal.searchForPerson(lastName);
        await PatientSearchModal.personPresantInList(firstName);
        await PatientSearchModal.clearSearchField();
    });

    it("displays person that was searched with partially correct name", async () => {
        let partialName = name1.split(' ')[0] + " Foo"
        await PatientSearchModal.searchForPerson(partialName);
        await PatientSearchModal.personPresantInList(lastName);
        await PatientSearchModal.clearSearchField();
    });

    it("displays person that was searched for with first & last name", async () => {
        await PatientSearchModal.clearSearchField();
        await PatientSearchModal.searchForPerson(name1);
        await PatientSearchModal.personPresantInList(name1);
    });

    it("does not display other patients when search for specific patient", async () => {
        await PatientSearchModal.personNotPresantInList(name2);
        await PatientSearchModal.personNotPresantInList(name3);
        await PatientSearchModal.clearSearchField();
    });

    it("displays no patients when none are found", async () => {
        await PatientSearchModal.clearSearchField();
        await PatientSearchModal.searchForPerson("foo bar");
        await PatientSearchModal.noPatientFoundDisplayed();
        await PatientSearchModal.clearSearchField();
    });

    it("opens the patient record once a patient is selected", async () => {
        await PatientSearchModal.clearSearchField();
        await PatientSearchModal.searchForPerson(firstName);
        await PatientSearchModal.personPresantInList(lastName);
        await PatientSearchModal.selectPersonInListByName(lastName);
        await PatientRecordPage.onPatientRecordPage();
    });

});