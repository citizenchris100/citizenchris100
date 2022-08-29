const MustangPage = require("../../pageobjects/main.page");
const MainPage = require("../../pageobjects/main.page");
const PerssonSearchPage = require("../../pageobjects/person_search.page");

describe("Mustang POC", () => {

    beforeAll(async function () {
        let contexts = await driver.getContexts();
        await driver.switchContext(contexts[1]);
    });

    it("can click calendar icon", async () => {
        await MustangPage.clickCalendar();
    });

    it("can click person search icon", async () => {
        await MainPage.clickPersonSearch();
        await PerssonSearchPage.onPersonSearchPage();
        let name = await PerssonSearchPage.getPersonName(1);
        await PerssonSearchPage.searchForPerson(name);
    });
});