const MustangPage = require("../../pageobjects/main.page");
const MainPage = require("../../pageobjects/main.page");
const PerssonSearchPage = require("../../pageobjects/person_search.page");

describe("Mustang Mobile Tests", () => {

    beforeAll(async function () {
        let contexts = await driver.getContexts();
        await driver.switchContext(contexts[1]);
    });

    it("can search for a person", async () => {
        await MainPage.clickPersonSearch();
        await PerssonSearchPage.onPersonSearchPage();
        let name = await PerssonSearchPage.getPersonName(1);
        await PerssonSearchPage.searchForPerson(name);
        await PerssonSearchPage.personPresantInList(name);
    });
});