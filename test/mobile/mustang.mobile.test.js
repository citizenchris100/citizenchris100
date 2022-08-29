const MustangPage = require("../../pageobjects/main.page");

describe("Mustang POC", () => {

    beforeAll(async function () {
        let contexts = await driver.getContexts();
        await driver.switchContext(contexts[1]);
    });

    it("can click calendar icon", async () => {
        await MustangPage.clickCalendar();
    });

    it("can click person search icon", async () => {
        await MustangPage.clickPersonSearch();
    });
});