const Page = require("./page");

class Person_searchPage extends Page {

    get searchField() {
        return $('//input[@class="k-input-inner"]');
    }

    async onPersonSearchPage() {
        await this.searchField.waitForDisplayed({ timeout: 10000 });
    }

}

module.exports = new Person_searchPage();