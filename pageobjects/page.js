module.exports = class Page {

   wait() {
     driver.setImplicitTimeout(5000);
  }

  tab(name) {
       return $('//div[contains(@class,"mud-tab")][text()="'+name+'"]');
  }

};
