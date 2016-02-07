class SampleDirective {
  constructor(){
    this.template = require('./sample.template.html');
    this.scope = {};
    this.bindToController = {
      newStyles: '=',
    };
    this.controller = function() {this.message = 'hello emily'};
    this.controllerAs = 'vm';
  }

}

export default SampleDirective

