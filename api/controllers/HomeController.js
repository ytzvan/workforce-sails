/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	landing: function (req, res) {
		return res.view({
			layout: 'layouts/landing'
		})
	},

	admin: function (req, res) {
		return res.view();
	}
};

