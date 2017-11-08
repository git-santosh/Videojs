
var app = angular.module("app",['ui.router','ui.bootstrap','ngSanitize']);

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
    
})
// .run(function(){
// 	angular.element(document).ready(function() {
// 	    angular.bootstrap(document,['app']);
// 	});
// })