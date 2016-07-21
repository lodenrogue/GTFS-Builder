'use strict';

angular.module('feedCard').
	component('feedCard', {
		templateUrl: "feed-card/feed-card.html",
		bindings: {
			feed: "="
		},
		controller: function FeedCardController() {}
	});