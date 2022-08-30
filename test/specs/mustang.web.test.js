const MainPage = require("../../pageobjects/main.page");
const PerssonSearchPage = require("../../pageobjects/person_search.page");
require("dotenv").config();

describe("Mustang Web Tests", () => {

    beforeAll(async function () {
        let platform = process.env.PLATFORM.toString()
        if( platform === "web") {
            browser.url('/');
        } else {
            let contexts = await driver.getContexts();
            await driver.switchContext(contexts[1]);
        }
    });

    it("can search for a person", async () => {
        await MainPage.clickPersonSearch();
        await PerssonSearchPage.onPersonSearchPage();
        let name = await PerssonSearchPage.getPersonName(1);
        await PerssonSearchPage.searchForPerson(name);
        await PerssonSearchPage.personPresantInList(name);
    });
});