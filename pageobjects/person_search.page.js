const Page = require("./page");

class Person_searchPage extends Page {
  get searchField() {
    return $('//input[@class="k-input-inner"]');
  }

  personInList(index) {
    return $('//descendant::h4[@class="patient-name"][' + index + "]");
  }

  async personPresantInList(name) {
      let elm = $('//h4[@class="patient-name"][contains(text(),"'+name+'")]')
      await elm.waitForDisplayed({timeout: 10000});
  }

  async getPersonName(index) {
      let elm = this.personInList(index);
      await elm.waitForDisplayed({timeout: 10000});
      let txt = (await elm.getText()).split(' ');
      let name = txt[0] + " " + txt[1];
      return name.toString();
  }

  async searchForPerson(person) {
      await this.searchField.click();
      await this.searchField.setValue(person);
  }

  async onPersonSearchPage() {
    await this.searchField.waitForDisplayed({ timeout: 10000 });
  }
}

module.exports = new Person_searchPage();