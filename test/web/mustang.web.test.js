const MainPage = require("../../pageobjects/main.page");
const PerssonSearchPage = require("../../pageobjects/person_search.page")

describe("Mustang Web Tests", () => {

    beforeAll(async function () {
        browser.url('/')
    });

    it("can click calendar icon", async () => {
        await MainPage.clickCalendar(true);
    });

    it("can click person search icon", async () => {
        await MainPage.clickPersonSearch();
        await PerssonSearchPage.onPersonSearchPage()
    });
});