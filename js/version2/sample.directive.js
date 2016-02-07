let template = require('./sample.template.html'); 
let templateWithNewStyles = require('./sample.template_new.html'); 

class SampleDirective {
  constructor(newStyleConfig){
    this.template = this.getTemplate(newStyleConfig);
    this.scope = {};
    this.bindToController = {};
    this.controller = function() {this.message = 'hello emily'};
    this.controllerAs = 'vm';
  }

  getTemplate(newStyleConfig) {
    return newStyleConfig.useNewStylesFor('sampleDirective') ? templateWithNewStyles : template;
  }

  static factory(newStyleConfig) {
    return new SampleDirective(newStyleConfig);
  }

}

export default SampleDirective

