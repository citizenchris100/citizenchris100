const MustangPage = require("../pageobjects/mustang.page");

describe("Mustang POC", () => {

    it("can click calendar icon", async () => {
        await MustangPage.clickCalendar(true);
    });
});