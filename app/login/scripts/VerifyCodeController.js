angular
  .module('login')
  .controller('VerifyCodeController', ['$scope', 'supersonic', 'parseAPI', function($scope, supersonic, parseAPI) {
      // Controller functionality here
      //$scope.phoneNumber=null;
      //$scope.expConfirmationCode=null;
      $scope.actualConfirmationCode="";
      supersonic.bind($scope, "phoneNumber");
      supersonic.bind($scope, "expConfirmationCode");
      console.log($scope.expConfirmationCode);
      $scope.submit = function(){
          console.log('I am submitted');
          console.log($scope.expConfirmationCode == $scope.actualConfirmationCode);
      }
  }]);
