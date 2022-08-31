const SideNav = require("../../pageobjects/side.nav");
const PersonSearchModal = require("../../pageobjects/person.search.modal");
require("dotenv").config();
let platform;
let name1;

describe("Mustang Web Tests", () => {

    beforeAll(async function () {
        platform = process.env.PLATFORM.toString()
        if( platform === "web") {
            browser.url('/');
        } else {
            let contexts = await driver.getContexts();
            await driver.switchContext(contexts[1]);
        }
    });


    it("can search for a person", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        name1 = await PersonSearchModal.getPersonName(1);
        await PersonSearchModal.searchForPerson(name1);
        await PersonSearchModal.personPresantInList(name1);
        await SideNav.clickPersonSearch();
    });


    it("can open patient record from search results", async () => {
        await SideNav.clickPersonSearch();
        await PersonSearchModal.personSearchModalOpen();
        name1 = await PersonSearchModal.getPersonName(1);
        await PersonSearchModal.searchForPerson(name1);
        await PersonSearchModal.personPresantInList(name1);
        await PersonSearchModal.selectPersonInListByName(name1);
        await PersonSearchModal.personSearchModalClosed();
    });

});