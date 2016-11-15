
angular.module('macApp').controller('connectionProfile.connectionProfileDealsCtrl',[ '$scope','ngTableParams','$q',
	function($scope, Constants, customerGroupService, ngTableParams, $q) {
	
	$scope.init = function(){
	}

		var initializeActiveDealsTable = function(){
			var tableData=[{dealId:1},{dealId:2},{dealId:3},{dealId:4},{dealId:5},{dealId:6},{dealId:7},{dealId:8}];
			//table Data can be an asynch call
			$scope.activeDealTableParams = new ngTableParams({page:1, count: 5}, { paginationMaxBlocks: 3, paginationMinBlocks: 2,  data : tableData});
		}
		
		

}]);
