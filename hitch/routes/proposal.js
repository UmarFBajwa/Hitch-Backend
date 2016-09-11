var express = require('express');
var router = express.Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);

var watson = require('watson-developer-cloud');
var fs = require('fs');
var multer = require('multer');

// var uploading = multer({
//   dest: __dirname + '../public/uploads/',
// });


var document_conversion = watson.document_conversion({
  username:     'b13bed63-5027-49f9-9eb6-e8606db5a9c0',
  password:     'TQFCyGRwNGm6',
  version:      'v1',
  version_date: '2015-12-15'
});

var config = {
  word: {
    heading: {
      fonts: [
        { level: 1, min_size: 24 },
        { level: 2, min_size: 16, max_size: 24 }
      ]
    }
  }
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});


router.post('/', multer({dest: __dirname + '/public/uploads'}).single('upl'), function(req, res, next) {
	document_conversion.convert({
  file: fs.createReadStream(__dirname + '/public/uploads/27fc1bf7ed1fdaee67bb9c0f8aa2be10'),
  conversion_target: 'ANSWER_UNITS',
  // Use a custom configuration.
  config: config
	}, function (err, response) {
	  if (err) {
	    console.error(err);
	  } else {
	    // console.log(JSON.stringify(response, null, 2));
	    res.json(response);
	  }
	});
	// console.log(req.file)
})

module.exports = router;
