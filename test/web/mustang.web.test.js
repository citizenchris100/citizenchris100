const MustangPage = require("../../pageobjects/main.page");

describe("Mustang POC", () => {

    beforeAll(async function () {
        browser.url('/')
    });

    it("can click calendar icon", async () => {
        await MustangPage.clickCalendar(true);
    });

    it("can click person search icon", async () => {
        await MustangPage.clickPersonSearch();
    });
});