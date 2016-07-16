'use strict';

angular.
  module('agency').
  component('addAgency', {
    templateUrl: 'agency/add-agency.html',
    controller: function AddAgencyController ($http) {
		var self = this;

		$http.get('agency/agency-fields.json').success(function (response) {
			self.fields = response;
		});
	}
  });