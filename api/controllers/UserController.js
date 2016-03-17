/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  /* e.g.
    action: function(req, res){
  
    }
  */
  index: function(req, res) {
  	 console.log("Esta authenticado ?", req.session.authenticated);
  	 console.log("User", req.session.user);
  	 res.send("hola");
  }
});