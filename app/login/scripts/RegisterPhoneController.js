angular
  .module('login')
  .controller('RegisterPhoneController', ['$scope', 'supersonic', 'parseAPI', function($scope, supersonic, parseAPI) {
      // Controller functionality here
      $scope.promptNumber="Verify phone number";
      $scope.phoneNumber="";
      $scope.expConfirmationCode="";
      supersonic.bind($scope, "phoneNumber");
      supersonic.bind($scope, "expConfirmationCode");
      $scope.verifyPhone = function(){
          parseAPI.func("verifyMobile", {"mobile": $scope.phoneNumber}).then(function(data){
              $scope.expConfirmationCode = data.result;
              console.log(data, $scope.expConfirmationCode);
              var view = new supersonic.ui.View("login#verifyCode");
              supersonic.ui.layers.push(view);
          });
      }
  }]);
