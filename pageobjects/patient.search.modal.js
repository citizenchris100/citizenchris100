const Page = require("./page");

class PatientSearchModal extends Page {

  get searchField() {
    return $('//input[@placeholder="Search"]');
  }

  get clearSearch() {
    return $('//button[contains(@class, "mud-icon-button-edge-end")]')
  }

  get noPatientFound() {
    return $('//div[@class="hchb-list-view-no-results"][text()="No Patients."]')
  }

  get addPatientButton() {
    return $('//button[@aria-label="add"][@title="Add New Test Patient"]')
  }

  async personSearchModalOpen() {
    await this.searchField.waitForDisplayed({ timeout: 15000 });
  }

  async personSearchModalClosed() {
    await this.searchField.waitForDisplayed({reverse: true, timeout: 5000});
  }

  async noPatientFoundDisplayed() {
    await this.noPatientFound.waitForDisplayed({timeout: 5000});
  }

  async clickAddPatient() {
    await this.addPatientButton.click();
  }

  personInList(index) {
    return $('//descendant::h4[@class="patient-name"][' + index + "]");
  }

  personInListByName(name) {
    return $('//h4[@class="patient-name"][contains(text(),"' + name + '")]');
  }

  async personPresantInList(name) {
    let elm = this.personInListByName(name);
    await elm.waitForDisplayed({ timeout: 10000 });
  }

  async personNotPresantInList(name) {
    let elm = this.personInListByName(name);
    await elm.waitForDisplayed({reverse: true, timeout: 5000});
  }

  async getPersonName(index) {
    let elm = this.personInList(index);
    await elm.waitForDisplayed({ timeout: 10000 });
    let txt = (await elm.getText()).split(" ");
    let name = txt[0] + " " + txt[1];
    return name.toString();
  }

  async searchForPerson(person) {
    await this.searchField.click();
    await this.searchField.setValue(person);
    await driver.pressKeyCode(66);
  }

  async clearSearchField(num) {
    await this.searchField.click();
    /**
    for (let i = 0; i < num; i++) {
      await driver.pressKeyCode(67);
    }
     */
    await this.clearSearch.click();
  }

  async selectPersonInListByName(name) {
    await this.personInListByName(name).click();
  }
}

module.exports = new PatientSearchModal();
