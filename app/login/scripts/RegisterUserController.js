angular
  .module('login')
  .controller('RegisterUserController', ['$scope', 'supersonic', 'parseAPI', function($scope, supersonic, parseAPI) {
      // Controller functionality here
      $scope.user = {};
      supersonic.ui.views.current.params.onValue(function(params){
          $scope.user.phoneNumber=params.phoneNumber;
      });

      $scope.registerUser = function(){
          console.log("I am saved");
      }
}]);
