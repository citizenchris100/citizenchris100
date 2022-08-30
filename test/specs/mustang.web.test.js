const MainPage = require("../../pageobjects/main.page");
const PerssonSearchPage = require("../../pageobjects/person_search.page");

describe("Mustang Web Tests", () => {

    beforeAll(async function () {
        if(process.env.PLATFORM.toString() === "web") {
            browser.url('/');
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