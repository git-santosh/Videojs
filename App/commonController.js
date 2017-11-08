var theBuilding = [
    {
        streetAddress: "123 Main Street",
        city: "New York City",
        state: "New York",
        zipCode: "10001",
        price: "123456",
        propertyType: 'Commercial',
        lotSize: '7000 sq ft',
        stories: '25',
        numberOfUnits: '50',
        architecturalStyle: 'Modern',
        buildingAge: '7',
        photoURL: 'http://i2.cdn.turner.com/cnnnext/dam/assets/140218103215-sheraton-huzhou-hot-spring-resort-horizontal-large-gallery.jpg',
        description: "One of the first buildings ever added to the database"

    },
     {
        streetAddress: "345 Main Street",
        city: "Manhattan",
        state: "New York",
        zipCode: "10002",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '2',
        numberOfUnits: '5',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://www.heltzelaia.com/portfolio/extra-portfolio/12_HeltzelAIA.jpg',
        description: 'Second building to ever be added to the databse'

    },
     {
        streetAddress: "789 Main Street",
        city: "Manhattan",
        state: "New York",
        zipCode: "10002",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '100',
        numberOfUnits: '90',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://www.heltzelaia.com/portfolio/extra-portfolio/12_HeltzelAIA.jpg',
        description: 'Second building to ever be added to the databse'

    },  {
        streetAddress: "7 Newhouse Ave",
        city: "New York City",
        state: "New York",
        zipCode: "10007",
        price: "567856",
        propertyType: 'Commercial',
        lotSize: '7000 sq ft',
        stories: '25',
        numberOfUnits: '50',
        architecturalStyle: 'Modern',
        buildingAge: '7',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/31/1/1031/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409303738',
        description: "4th building ever added to the database"

    },
     {
        streetAddress: "99 Inifinty Loop",
        city: "Manhattan",
        state: "New York",
        zipCode: "10003",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '2',
        numberOfUnits: '5',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/33/1/1033/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409303739',
        description: 'Second building to ever be added to the databse'

    },
     {
        streetAddress: "1 1st ave",
        city: "Manhattan",
        state: "New York",
        zipCode: "10004",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '100',
        numberOfUnits: '90',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/34/1/1034/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409303739',
        description: 'Second building to ever be added to the databse'

    },  {
        streetAddress: "44 twisty Lane",
        city: "New York City",
        state: "New York",
        zipCode: "10001",
        price: "123456",
        propertyType: 'Commercial',
        lotSize: '7000 sq ft',
        stories: '25',
        numberOfUnits: '50',
        architecturalStyle: 'Modern',
        buildingAge: '7',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/39/1/1039/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409304312',
        description: "One of the first buildings ever added to the database"

    },
     {
        streetAddress: "33 slanted road",
        city: "Manhattan",
        state: "New York",
        zipCode: "10002",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '2',
        numberOfUnits: '5',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/40/1/1040/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409304313',
        description: 'Second building to ever be added to the databse'

    },
     {
        streetAddress: "66 Guitar Street",
        city: "Manhattan",
        state: "New York",
        zipCode: "10006",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '100',
        numberOfUnits: '90',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/41/1/1041/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409304313',
        description: 'Second building to ever be added to the databse'

    }
    ];
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
})
.controller('BuildingsCtrl', function($scope) { 
    $scope.buildings = theBuilding;

})
.controller('BuildingCtrl', function($scope, $state, $location, $stateParams, $anchorScroll){
  $scope.building = theBuilding[$stateParams.id];
	console.log( theBuilding[$stateParams.id]);
 $scope.$watchCollection('$stateParams', function() {
       $location.hash('top');
       $anchorScroll();
    });

  $scope.error = null;
  $scope.addToCart = function () {
    CartFactory.add(theBuilding.id)
    .then( () => { $state.go('cart'); })
    .catch( () => { $scope.error = 'Already in your Cart!' })
  }
})
