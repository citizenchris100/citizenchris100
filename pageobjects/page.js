module.exports = class Page {

   wait() {
     driver.setImplicitTimeout(5000);
  }

  tab(name) {
       return $('//li[@role="tab"][//span[text()="'+name+'"]]');
  }

};
