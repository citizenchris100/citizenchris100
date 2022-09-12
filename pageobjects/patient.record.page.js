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

    async selectHealthRecord() {
        await this.healthRecordTab().click();
    }

    async selectVisitHistoryTab() {
        await this.visitHistoryTab().click();
    }

    async selectCalendarTab() {
        await this.calendarTab().click();
    }

    async selectDocumentsTab() {
        await this.documentTab().click();
    }

   async visitHistoryTabSelected(tab) {
        await $('//*[contains(text(),"'+tab+' Empty Area")]').waitForDisplayed({timeout: 5000});
    }

}

module.exports = new PatientRecordPage();