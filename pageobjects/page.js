module.exports = class Page {

   wait() {
     driver.setImplicitTimeout(5000);
  }

  tab(name) {
       return $('//span[text()="'+name+'"]');
  }

};
