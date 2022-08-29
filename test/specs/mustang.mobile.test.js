const MustangPage = require("../../pageobjects/mustang.page");

describe("Mustang POC", () => {

    beforeAll(async function () {
        let contexts = await driver.getContexts();
        await driver.switchContext(contexts[1]);
    });

    it("can click calendar icon", async () => {
        await MustangPage.clickCalendar(true);
    });
});