Parse.initialize("20vVReFO5IaO7Uauenmu7apVa6FeL0a92Xrz50ey", "e41qgWb85vB5jEgfo0vDl5YWWPKdmNMMgU5d8DgI");
angular.module('common', [
  // Declare here all AngularJS dependencies that are shared by all modules.
  'supersonic',
  'parse-angular',
  'parse-angular.enhance'
]).run(function(){

}).factory('parseAPI', function($q, $http){
    var parseEndpoint = "https://api.parse.com/1/";
    var parseRestKey = "OnaAFuUHENn5kwBlvc4IsAN6J5rz4reLWVoXpfZ8";
    var parseAppId = "20vVReFO5IaO7Uauenmu7apVa6FeL0a92Xrz50ey";
    var parseHeaders = {
        "X-Parse-Application-Id": parseAppId,
        "X-Parse-REST-API-Key": parseRestKey,
        "Content-Type": "application/json"
    }
    return {
        func:  function(funcName, data) {
            var req = {
                method: 'POST',
                url: parseEndpoint + 'functions/' + funcName,
                headers: parseHeaders,
                data: data
            }
            return $q(function(resolve, reject){
                $http(req)
                    .success(function(data, status, headers, config){
                        resolve(data, status, headers, config);
                    }).error(function(data, status, headers, config){
                        reject(data, status, headers, config);
                    });
            });

        }
    }
})
.directive('phonenumberDirective', ['$filter', function($filter) {
        /*
        Intended use:
            <phonenumber-directive placeholder='prompt' model='someModel.phonenumber'></phonenumber-directive>
        Where:
            someModel.phonenumber: {String} value which to bind only the E164 characters entered
                ie, if user enters 617-222-3333, value of +16172223333 will be bound to model
            prompt: {String} text to keep in placeholder when no numeric input entered
        */

        function link(scope, element, attributes) {

            // scope.inputValue is the value of input element used in template
            scope.inputValue = scope.phonenumberModel;

            scope.$watch('inputValue', function(value, oldValue) {

                value = String(value);
                var number = value.replace(/[^0-9]+/g, '');
                scope.phonenumberModel = formatE164("US", number);
                scope.inputValue = $filter('phonenumber')(number);
            });
        }

        return {
            link: link,
            restrict: 'E',
            scope: {
                phonenumberPlaceholder: '=placeholder',
                phonenumberModel: '=model',
            },
            //templateUrl: '/static/phonenumberModule/template.html',
            template: '<input ng-model="inputValue" type="tel" class="phonenumber" placeholder="{{phonenumberPlaceholder}}" title="Phonenumber (Format: (999) 9999-9999)">',
        };
    }])

    .filter('phonenumber', function() {
        /*
        Format phonenumber as: c (xxx) xxx-xxxx
            or as close as possible if phonenumber length is not 10
            if c is not '1' (country code not USA), does not use country code
        */

        return function (number) {

            if (!number) { return ''; }

            number = String(number);

            // Will return formattedNumber.
            // If phonenumber isn't longer than an area code, just show number
            var formattedNumber = formatLocal("US", number);

            return formattedNumber;
        };
    });
