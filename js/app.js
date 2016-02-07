import angular from 'angular'

import SampleDirectiveV1 from './version1/sample.directive.js'
import SampleDirectiveV2 from './version2/sample.directive.js'
import NewStylesConfig from './version2/new-style-config.factory.js'
import newStyleOnConfigMapping from './version2/new-style-config-on.js'
import newStyleOffConfigMapping from './version2/new-style-config-off.js'

let templateToggleApp = angular.module('templateToggleApp', ['sampleDirective']);

angular.module('sampleDirective', [])
  .constant('newStyleOnConfigMapping', newStyleOnConfigMapping)
  .constant('newStyleOffConfigMapping', newStyleOffConfigMapping)
  .factory('newStyleOnConfig', ['newStyleOnConfigMapping',  NewStylesConfig.factory])
  .factory('newStyleOffConfig', ['newStyleOffConfigMapping',  NewStylesConfig.factory])
  .directive('sampleDirectiveV1', () => new SampleDirectiveV1())
  .directive('sampleDirectiveV2',['newStyleOffConfig', SampleDirectiveV2.factory])
  .directive('sampleDirectiveV2New',['newStyleOnConfig', SampleDirectiveV2.factory]);


