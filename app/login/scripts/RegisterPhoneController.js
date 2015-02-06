angular
  .module('login')
  .controller('RegisterPhoneController', ['$scope', 'supersonic', 'parseAPI', function($scope, supersonic, parseAPI) {
      // Controller functionality here
      $scope.promptNumber="Verify phone number";
      $scope.phoneNumber="";
      $scope.verifyPhone = function(){
          parseAPI.func("verifyMobile", {"mobile": $scope.phoneNumber}).then(function(data){
              supersonic.ui.layers.push("login#verifyCode", {
                  params: {
                      expConfirmationCode: data.result,
                      phoneNumber: $scope.phoneNumber
                  }
              });
          });
      }
  }]);
