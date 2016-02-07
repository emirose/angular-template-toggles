import angular from 'angular'

import SampleDirective from './sample.directive.js'

let templateToggleApp = angular.module('templateToggleApp', ['sampleDirective']);

angular.module('sampleDirective', [])
  .directive('sampleDirective', () => new SampleDirective());


