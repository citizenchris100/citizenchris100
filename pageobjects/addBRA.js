const Page = require("./page");

class AddBRA extends Page {
  braChoices(choice) {
    return $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
        "android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/" +
        "android.widget.ViewFlipper/android.widget.ScrollView/android.widget.LinearLayout/" +
        "android.widget.LinearLayout/android.widget.LinearLayout[" +
        choice +
        "]/android.widget.LinearLayout/" +
        "android.widget.CheckedTextView"
    );
  }

  get riskScore() {
    return $("id=android:id/message");
  }

  async addBRA(bra) {
    await this.braChoices(bra.finance).click();
      await this.braChoices(bra.spiritual).click();
      await this.braChoices(bra.changeinhealth).click();
      await this.braChoices(bra.abuse).click();
      await this.braChoices(bra.multiple).click();
      await this.braChoices(bra.violence).click();
      await this.braChoices(bra.conflicted).click();
      await this.braChoices(bra.extreme).click();
      await this.braChoices(bra.afterDeath).click();
      await this.braChoices(bra.primary).click();
      await this.braChoices(bra.important).click();
      await this.braChoices(bra.estranged).click();
      await this.braChoices(bra.unaceptable).click();
      await this.braChoices(bra.unprepared).click();
      await this.braChoices(bra.coping).click();
      await this.braChoices(bra.anger).click();
      await this.braChoices(bra.mental).click();
      await this.braChoices(bra.children).click();
      await this.braChoices(bra.children2).click();
      await this.braChoices(bra.teen).click();
      await this.braChoices(bra.traumatic).click();
      await this.braChoices(bra.suicidal).click();
      await $("id=android:id/button1").click();
  }

  async bereavementScorePresent() {
    let score = await this.riskScore.getText();
    expect(score).toContain("BEREAVEMENT RISK SCORE IS")
  }
}

module.exports = new AddBRA();
