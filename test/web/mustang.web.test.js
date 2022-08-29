const MustangPage = require("../../pageobjects/mustang.page");

describe("Mustang POC", () => {

    beforeAll(async function () {
        browser.url('/')
    });

    it("can click calendar icon", async () => {
        await MustangPage.clickCalendar(true);

    });
});