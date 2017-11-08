
window.app = angular.module("app",['ui.router','ui.bootstrap','ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider){
	 $urlRouterProvider.otherwise('/home');
	 $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
     })
     .state('dynamic',{
     	url : '/dynamic',
     	templateUrl : 'views/dynamic.html'
     })
    .state('buildings', {
        url: '/properties',
        templateUrl: 'building-detail/templates/buildings.html',
        controller: 'BuildingsCtrl'
        // resolve: {
        // allBuildings: function (BuildingFactory, $stateParams) {
        //     return BuildingFactory.fetchAll({propertyType: $stateParams.type, isAvailable: true});
        // }
        // }
    })
    .state('building', {
        url: '/properties/:id',
        templateUrl: 'building-detail/templates/building-detail.html',
        controller: 'BuildingCtrl',
        resolve: {
        loggedIn: function (AuthService){
            !AuthService.isAuthenticated()
        },
        theBuilding: function (BuildingFactory, $stateParams) {
            return BuildingFactory.fetchOne($stateParams.id);
        }
        }
    })
})
// .run(function(){
// 	angular.element(document).ready(function() {
// 	    angular.bootstrap(document,['app']);
// 	});
// })