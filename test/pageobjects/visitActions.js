const Page = require("./page");

class VisitActions extends Page {
  async elements() {
    return {
      sighOut: "id=com.hchb.android.pc.ui.development:id/VCC_SignOut",
      chooseDescriptionMenu:
        "id=com.hchb.android.pc.ui.development:id/signout_cmbVisitDisposition",
      visitActions: "id=com.hchb.android.pc.ui.development:id/VCC_VisitItems",
      contactType:
        "id=com.hchb.android.pc.ui.development:id/contacts_editor_contact_type_spinner",
      relationType:
        "id=com.hchb.android.pc.ui.development:id/contacts_editor_relation_type_spinner",
      spokenLanguage:
        "id=com.hchb.android.pc.ui.development:id/contacts_editor_primary_spoken_language_spinner",
      primaryReligion:
        "id=com.hchb.android.pc.ui.development:id/contacts_editor_primary_religion_spinner",
      bereavementContact:
        "id=com.hchb.android.pc.ui.development:id/contacts_editor_bereavement",
      contactFirstName:
        "id=com.hchb.android.pc.ui.development:id/contacts_editor_firstname",
      contactLastName:
        "id=com.hchb.android.pc.ui.development:id/contacts_editor_lastname",
    };
  }

  get contactFirstName() {
    return $(
      "id=com.hchb.android.pc.ui.development:id/contacts_editor_firstname"
    );
  }

  get contactLastName() {
    return $(
      "id=com.hchb.android.pc.ui.development:id/contacts_editor_lastname"
    );
  }

  get contactAddress() {
    return $(
      "id=com.hchb.android.pc.ui.development:id/contacts_editor_address"
    );
  }

  async addBereavementContact(contactOptions, contactValues) {
    await this.wait();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
        "android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.ListView/" +
        "android.widget.RelativeLayout[3]"
    ).click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
        "android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/" +
        "android.widget.ListView/android.widget.LinearLayout[3]"
    ).click();
    await $(
      '//android.view.View[@content-desc="Edit"]/android.widget.TextView[2]'
    ).click();
    await $("id=com.hchb.android.pc.ui.development:id/btnAdd").click();
    await $(
      "id=com.hchb.android.pc.ui.development:id/contacts_editor_contact_type_spinner"
    ).click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
        "android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/" +
        "android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[" +
        contactOptions.contactType +
        "]"
    ).click();
    await $(
      "id=com.hchb.android.pc.ui.development:id/contacts_editor_bereavement"
    ).click();
    await this.contactFirstName.addValue(contactValues.contactFirstName);
    await this.contactFirstName.click();
    await driver.pressKeyCode(29);
    await driver.hideKeyboard();
    await this.contactLastName.addValue(contactValues.contactLastName);
    await this.contactLastName.click();
    await driver.pressKeyCode(29);
    await driver.hideKeyboard();
    await $("id=com.hchb.android.pc.ui.development:id/ok").click();
  }
}

module.exports = new VisitActions();
