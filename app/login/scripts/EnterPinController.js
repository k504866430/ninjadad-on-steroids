angular.module('login')
.controller('EnterPinController', function($scope, supersonic) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.submit = function(){
        if($scope.pinNumber == localStorage["pin"]){
            supersonic.ui.layers.push("dashboard#dashboard");
        }else{
            var options = {
                message: "The PIN number you entered is invalid",
                buttonLabel: "Close"
            };
            supersonic.ui.dialog.alert("Invalid PIN", options);
        }
    }
});
