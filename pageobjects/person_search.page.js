const Page = require("./page");

class Person_searchPage extends Page {
  get searchField() {
    return $('//input[@class="k-input-inner"]');
  }

  personInList(index) {
    return $('//descendant::h4[@class="patient-name"][' + index + "]");
  }

  async getPersonName(index) {
      let elm = this.personInList(index);
      await elm.waitForDisplayed({timeout: 10000});
      let txt = await elm.getText();
  }

  async onPersonSearchPage() {
    await this.searchField.waitForDisplayed({ timeout: 10000 });
  }
}

module.exports = new Person_searchPage();