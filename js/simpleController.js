var varApp = angular.module('demoApp',[]);

var controllers = {};
controllers.simpleController =  simpleControllers;
varApp.controller(controllers);
function simpleControllers($scope){
$scope.persons=[{name:'phani',city:'hyderabad'},{name:'anand',city:'vijawada'},{name:'srinu',city:'kakinada'},{name:'murali',city:'rajahmundry'},{name:'manu',city:'karapa'}];
}