const Page = require("./page");

class PatientRecordPage extends Page {

    healthRecordTab() {
        return this.tab("Health Record")
    }

    onPatientRecordPage() {
        this.healthRecordTab().waitForDisplayed({timeout: 5000})
    }

}

module.exports = new PatientRecordPage();