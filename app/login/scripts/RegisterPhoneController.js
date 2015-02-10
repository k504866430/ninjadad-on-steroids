angular.module('login')
.controller('RegisterPhoneController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.navigationBar.hide({animated: false});
    $scope.promptNumber="Verify phone number";
    $scope.phoneNumber="";
    $scope.verifyPhone = function(){
        Parse.Cloud.run("verifyMobile", {"mobile": $scope.phoneNumber}, {
            success: function(data) {
                console.log(data);
                supersonic.ui.layers.push("login#verifyCode", {
                    params: {
                        expConfirmationCode: data,
                        phoneNumber: $scope.phoneNumber
                    }
                });
            },
            error: function(err) {
                console.log(err);
            }
        })
    }
});
