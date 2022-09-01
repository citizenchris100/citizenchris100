const Page = require("./page");

class PatientRecordPage extends Page {

    healthRecordTab() {
        return this.tab("Health Record")
    }

    visitHistoryTab() {
        return this.tab("Visit History")
    }

    calendarTab() {
        return this.tab("Calendar")
    }

    documentTab() {
        return this.tab("Documents")
    }

    onPatientRecordPage() {
        this.healthRecordTab().waitForDisplayed({timeout: 5000})
    }

}

module.exports = new PatientRecordPage();