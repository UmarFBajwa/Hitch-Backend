var express = require('express');
var router = express.Router();

var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
  username: '885ee543-dd33-400b-a874-06933875e29e',
  password: 'E00cUm0X7GX2',
  version: 'v1',
  version_date: '2016-07-11'
});

  // Replace with the context obtained from the initial request
var context = {};



router.post('/', function(req, res, next) {
	conversation.message({
	  workspace_id: 'cbcee0b7-a3bd-445d-b983-1ef11937ee85',
	  input: {'text': req.body.input},
	  context: context
	},  function(err, response) {
	  if (err)
	    console.log('error:', err);
	  else
	    // console.log(JSON.stringify(response, null, 2));
	  	res.json(response);
	});
	
});

module.exports = router;
