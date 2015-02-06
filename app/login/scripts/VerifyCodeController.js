angular
  .module('login')
  .controller('VerifyCodeController', ['$scope', 'supersonic', 'parseAPI', function($scope, supersonic, parseAPI) {
      // Controller functionality here
      $scope.actualConfirmationCode="";
      supersonic.ui.views.current.params.onValue(function(params){
          $scope.phoneNumber=params.phoneNumber;
          $scope.expConfirmationCode=params.expConfirmationCode;
      });

      $scope.submit = function(){
          if($scope.expConfirmationCode == $scope.actualConfirmationCode){
              supersonic.ui.layers.push("login#registerUser", {
                  params: {
                      phoneNumber: $scope.phoneNumber
                  }
              });
          }
      }
}]);
