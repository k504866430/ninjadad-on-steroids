angular
  .module('login')
  .controller('RegisterUserController', function($scope, supersonic) {
      // Controller functionality here
      $scope.user = {};

      supersonic.ui.views.current.params.onValue(function(params){
          $scope.user.mobile = params.phoneNumber;
          $scope.user.username = params.phoneNumber;
      });

      $scope.registerUser = function(){
          console.log($scope.user);
          newUser = new Parse.User();
          newUser.set($scope.user);
          console.log(newUser);
          newUser.signUp(null, {
            success: function(user) {
              console.log("User signed up.")
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              console.log("Error: " + error.code + " " + error.message);
            }
          });
      }
});
