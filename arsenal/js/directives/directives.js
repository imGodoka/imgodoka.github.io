// public/js/directives/directives.js

angular.module('directives', [])
    .directive('panelBase', function() {

        var ddo = {};

        ddo.restrict = "AE";
        ddo.transclude = true;

        ddo.scope = {
            titulo: '@',
            sub: '@'
        };

        ddo.templateUrl = 'js/directives/panel-base.html';

        return ddo;
    });
