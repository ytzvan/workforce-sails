/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

module.exports = {

	index : function (req, res) {
	request('https://randomuser.me/api/?results=10&nat=es', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	var jsonObject = JSON.parse(body);
		  	console.log(jsonObject.results);
		    	return res.view({
		    		data:jsonObject.results
		    	});
		  } else 
		  	console.log(error);
		})
		
	},

	colaborator : function (req, res) {
		return res.view();
	}
};

