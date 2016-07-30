'use strict';

angular.module('filters').
	filter('replaceAll', function (){
		return function (str, targetStr, replaceStr) {
			if(str == undefined || !isNaN(str)) return str;

			return str.split(targetStr).join(replaceStr);
		}
	})