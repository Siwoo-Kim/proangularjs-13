/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-07-13 오전 9:38
 * @github : https://github.com/Siwoo-Kim
 **/

    var app = angular.module("exampleApp", []);
    app.controller("firstController", function ($scope) {
        $scope.dataValue = "Hello, Adam";
        $scope.reverseText = function () {
            $scope.dataValue = $scope.dataValue.split("").reverse().join("");
        }
    });

    app.controller("secondController", function ($scope) {
        $scope.dataValue = "Hello, Jacqui";

        $scope.changeCase = function () {
            $scope.dataValue = $scope.dataValue.toUpperCase();
        }
    });

    app.controller("simpleCtrl", function () {
        this.dataValue = "Hello, Adam";
        this.reverseText = function () {
            this.dataValue = this.dataValue.split("").reverse().join("");
        }
    });