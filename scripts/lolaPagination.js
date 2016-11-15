macApp.directive('lolaPagination', ['ngTableEventsChannel', function (ngTableEventsChannel) {
	 return {
		 restrict: 'E',
		 scope: true,
		    templateUrl: function (element, attr) {
		      return attr.template;
		    },
		 link:function (scope, element, attr) {
			 scope.maxPages = 10;
			 scope.params.settings().paginationMaxBlocks = 13;
			 var isMyPublisher = function (publisher){
		            return scope.params === publisher;
			 };
		     var updatePages = function(){
		    	 if(scope.pages && scope.pages.length > 12){
		    		 var hasMorePrevious = scope.pages[2].type === "more";
		    		 var hasMoreNext = scope.pages[scope.pages.length-3].type === "more";
			    	 var pageCount = scope.pages.length - 2;
			    	 if(hasMorePrevious){
			    		 scope.pages.splice(1, 1);
			    		 pageCount = pageCount-2;
			    	 }
			    	 if(hasMoreNext){
			    		 scope.pages.splice(scope.pages.length-2, 1);
			    		 pageCount = pageCount-2;
			    	 }
			    	 while(pageCount > scope.maxPages && (hasMoreNext || hasMorePrevious)){
			    		 if(hasMoreNext){
				    		 scope.pages.splice(scope.pages.length-3, 1);
				    	 }else if(hasMorePrevious){
				    		 scope.pages.splice(2, 1);
				    	 }
			    		 pageCount--;
			    	 }
				 }
		     };
			 ngTableEventsChannel.onAfterReloadData(updatePages, scope, isMyPublisher);
			 updatePages();
		 }
	 };
}]);