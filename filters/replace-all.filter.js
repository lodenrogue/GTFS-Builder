'use strict';

angular.module('app').
	filter('replaceAll', function (){
		return function (str, targetStr, replaceStr) {
			if(!isNaN(str)) return str;

			return str.split(targetStr).join(replaceStr);
		}
	})