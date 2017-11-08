
angular.module("app").filter('trustAsHtml', function($sce) {
  return function(html) {
    return $sce.trustAsHtml(html);
  };
});
angular.module("app").controller('indexCtrl',function($scope ,$location ,$timeout , $interval ,$rootScope){
	
}).controller('video',function($scope ,$http ,$sce){

	 $http.get('/vimeoUrl').then(function(data){
	 	console.log(data.data);
	 	$scope.vimeoUrl = data.data.iframe;
	 });
	 $http.get('/youtubeUrl').then(function(data){
	 	console.log(data.data);
	 	$scope.youtubeUrl = data.data.iframe;
	 });
	 $http.get('/dailymotionUrl').then(function(data){
	 	console.log(data.data);
	 	$scope.dailymotionUrl = data.data.iframe;
	 });
});