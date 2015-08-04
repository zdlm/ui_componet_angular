angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tests = [
	{
		name:"test1"
	},{
		name:"test2"
	},{
		name:"test3"
	},{
		name:"test4"
	}];
	setTimeout(function() {
		var toolbar = ts.ui.get("#myToolbar");
		toolbar.search({
			onsearch: function(value) {
				ts.ui.Notification.success(value || 'Search cleared');
			}
		});
	}, 100);

});