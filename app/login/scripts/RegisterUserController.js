angular.module('login')
.controller('RegisterUserController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.navigationBar.hide({animated: false});
    $scope.user = {};

    supersonic.ui.views.current.params.onValue(function(params){
        $scope.user.mobile = params.phoneNumber;
        $scope.user.username = params.phoneNumber;
    });

    $scope.registerUser = function(){
        localStorage["pin"] = $scope.user.password;
        newUser = new Parse.User();
        newUser.set($scope.user);
        newUser.signUp(null, {
            success: function(user) {
                user.login();
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                console.log("Error: " + error.code + " " + error.message);
            }
        });
    }
});
