'use strict';

angular.module('feed').
	component('addFeed', {
		templateUrl: "feed/add-feed.html",
		controller: function AddFeedController($location, $http) {
			var self = this;

			$http.get("resources/feeds-metadata/feeds.json").success(function(response){
				getFeed(response, getFeedName());
			});
			
			function getFeed(feedArray, feedName) {
				for(var i = 0; i < feedArray.length; i++){
					var feed = feedArray[i];
					if(feed.name == feedName) {
						console.log(feed.fileName);
						$http.get("resources/feeds-metadata/" + feed.fileName).success(function(response){
							self.feed = response;
						})
						break;
					}
				}
			}

			function getFeedName() {
				var path = $location.path();
				var feed = path.substring(getPosition(path, '/', 2) + 1);
				feed = getFeedIdentifier(feed);
				return feed;
			}

			function getPosition(str, target, occurence) {
   				return str.split(target, occurence).join(target).length;
			}

			function getFeedIdentifier(feed){
				if(feed == 'agency' || feed == 'calendar' || feed == 'feed_info'){
					return feed;
				} 
				else if(feed == 'frequency'){
					return 'frequencies';
				}
				else {
					return feed + 's';
				}
			}
		}
	});