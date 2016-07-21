'use strict';

angular.module('filters').
	filter('replaceAll', function (){
		return function (str, targetStr, replaceStr) {
			if(!isNaN(str)) return str;

			return str.split(targetStr).join(replaceStr);
		}
	})