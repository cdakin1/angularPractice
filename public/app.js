var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
    $scope.editItem = function(x) {
        console.log(this);
        $scope.formShow = true;
    }
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }
});
