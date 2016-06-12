var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = [
  {
    "_id": "575d638417eedd510967b003",
    "index": 0,
    "guid": "e01d9a86-8b2f-480b-9515-404365040468",
    "isActive": false,
    "balance": "$1,239.15",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "575d63845cc16d549b4e8e3a",
    "index": 1,
    "guid": "df171f6b-ab65-4556-81c7-1937507c8949",
    "isActive": true,
    "balance": "$3,174.24",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "575d63844f5a3983e5dc0204",
    "index": 2,
    "guid": "572102b8-cf9d-4ddf-9f9e-f6a3d5648686",
    "isActive": false,
    "balance": "$2,472.56",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "575d6384d71b572b155f15c7",
    "index": 3,
    "guid": "6899de72-bba0-4701-8834-33d54181944e",
    "isActive": false,
    "balance": "$3,231.40",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "575d63841705da7c56e84932",
    "index": 4,
    "guid": "d1f61d51-fa19-4756-825c-62dded131443",
    "isActive": false,
    "balance": "$2,076.87",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "575d6384456a2fa023969897",
    "index": 5,
    "guid": "12483c9c-3b10-4b0c-a9f8-208d1c5925ac",
    "isActive": true,
    "balance": "$1,709.80",
    "picture": "http://placehold.it/32x32"
  },
  {
    "_id": "575d638414457a9c736e1c94",
    "index": 6,
    "guid": "c89dc705-ee4a-4aa7-ac06-ea7ada2821b5",
    "isActive": false,
    "balance": "$3,053.86",
    "picture": "http://placehold.it/32x32"
  }
]
  res.send(data);
});

module.exports = router;
