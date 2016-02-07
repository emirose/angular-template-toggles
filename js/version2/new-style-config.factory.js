class NewStylesConfig {
  constructor(directiveStyleMapping){
    this.directiveStyleMapping = directiveStyleMapping;
  }

  useNewStylesFor(directiveName) {
    return this.directiveStyleMapping[directiveName];
  }

  static factory(directiveStyleMapping) {
    return new NewStylesConfig(directiveStyleMapping);
  }
}

export default NewStylesConfig
