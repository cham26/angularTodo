var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var data = [{
        "_id": "575d5ebd462add1a701f468a",
        "index": 0,
        "guid": "c701c6da-ff88-4e3c-a5c5-6a97b84dc3b5",
        "isActive": true,
        "balance": "$3,291.78",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "blue",
        "name": "Fields Padilla",
        "gender": "male",
        "company": "DOGSPA",
        "email": "fieldspadilla@dogspa.com",
        "phone": "+1 (872) 464-3500",
        "address": "784 Grimes Road, Vernon, Alaska, 1155",
        "about": "Culpa elit culpa non nisi incididunt nisi veniam occaecat. Voluptate non occaecat culpa nulla dolore quis mollit do anim. Eiusmod eu commodo aliquip enim eiusmod est sit aliqua excepteur sit culpa culpa elit. Nulla consequat deserunt excepteur ea minim ex commodo sunt minim voluptate reprehenderit.\r\n",
        "registered": "2014-09-23T03:51:17 -03:00",
        "latitude": -11.113615,
        "longitude": -160.221567,
        "tags": [
            "aliquip",
            "dolore",
            "anim",
            "excepteur",
            "excepteur",
            "duis",
            "excepteur"
        ],
        "friends": [{
            "id": 0,
            "name": "Doyle Whitney"
        }, {
            "id": 1,
            "name": "Tamara Richards"
        }, {
            "id": 2,
            "name": "Imogene Ford"
        }],
        "greeting": "Hello, Fields Padilla! You have 7 unread messages.",
        "favoriteFruit": "apple"
    }, {
        "_id": "575d5ebd4a168d7802141516",
        "index": 1,
        "guid": "f75909c4-7208-4d00-9ab7-220dfd5aa99b",
        "isActive": false,
        "balance": "$1,971.22",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "name": "Wilkerson Spence",
        "gender": "male",
        "company": "CALCU",
        "email": "wilkersonspence@calcu.com",
        "phone": "+1 (984) 502-2458",
        "address": "933 Cozine Avenue, Wauhillau, Michigan, 3850",
        "about": "Et nostrud dolore fugiat sint amet aute qui anim. Non labore et eiusmod fugiat laborum consequat culpa eu est officia mollit voluptate voluptate dolor. Mollit ipsum velit nulla veniam pariatur adipisicing culpa sint non. Nisi esse est mollit est veniam reprehenderit. Excepteur amet proident voluptate nisi Lorem ea dolor fugiat amet. Eu eiusmod reprehenderit adipisicing mollit labore proident magna cupidatat ipsum aliquip labore quis do tempor.\r\n",
        "registered": "2015-07-11T08:52:05 -03:00",
        "latitude": 47.038501,
        "longitude": 67.439681,
        "tags": [
            "nulla",
            "cillum",
            "veniam",
            "sint",
            "duis",
            "dolore",
            "occaecat"
        ],
        "friends": [{
            "id": 0,
            "name": "Kaitlin Saunders"
        }, {
            "id": 1,
            "name": "Marcia Holland"
        }, {
            "id": 2,
            "name": "Clarissa Pollard"
        }],
        "greeting": "Hello, Wilkerson Spence! You have 5 unread messages.",
        "favoriteFruit": "apple"
    }, {
        "_id": "575d5ebda6521bd9881e59b0",
        "index": 2,
        "guid": "87c40369-0246-4a3b-a414-4bfa404363eb",
        "isActive": true,
        "balance": "$1,022.09",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "blue",
        "name": "Gill Blackburn",
        "gender": "male",
        "company": "KOOGLE",
        "email": "gillblackburn@koogle.com",
        "phone": "+1 (802) 590-3105",
        "address": "269 Lafayette Walk, Longbranch, Minnesota, 8120",
        "about": "Sunt culpa exercitation Lorem ipsum magna cupidatat ex nostrud sunt aute. Id veniam sit commodo consectetur aliqua cillum ullamco. Veniam culpa irure amet laboris est do aliqua voluptate veniam incididunt ipsum labore. Ea irure id ad esse id commodo nostrud minim aliqua mollit Lorem eiusmod dolor eiusmod. Irure aliqua labore duis cillum amet minim sit. Esse deserunt ea proident est sint enim consequat anim occaecat qui adipisicing consectetur. Id dolore ad et eiusmod excepteur sit est est quis velit aliquip ex.\r\n",
        "registered": "2015-04-17T06:49:53 -03:00",
        "latitude": 87.867003,
        "longitude": -148.731478,
        "tags": [
            "aute",
            "velit",
            "aliqua",
            "in",
            "cillum",
            "est",
            "id"
        ],
        "friends": [{
            "id": 0,
            "name": "Flossie Alvarez"
        }, {
            "id": 1,
            "name": "Wilder Rose"
        }, {
            "id": 2,
            "name": "Deana Mclean"
        }],
        "greeting": "Hello, Gill Blackburn! You have 3 unread messages.",
        "favoriteFruit": "strawberry"
    }, {
        "_id": "575d5ebd8ce0b3e2b48f8cbb",
        "index": 3,
        "guid": "3434c74c-307c-4fac-864b-b3a132684021",
        "isActive": false,
        "balance": "$1,025.12",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "brown",
        "name": "Hampton Matthews",
        "gender": "male",
        "company": "KENGEN",
        "email": "hamptonmatthews@kengen.com",
        "phone": "+1 (853) 564-3913",
        "address": "872 Clinton Street, Brady, Nevada, 4279",
        "about": "Eu esse est aliqua elit eiusmod aliquip amet mollit ex. Veniam est non id veniam sunt duis duis officia consectetur mollit. Eiusmod qui non deserunt irure magna excepteur aliqua amet adipisicing Lorem. Enim et ut consequat in ea sunt amet mollit irure eu pariatur consequat mollit excepteur. Sit do ea exercitation fugiat minim labore ullamco magna velit incididunt duis. Magna nulla ut occaecat culpa eiusmod consectetur voluptate reprehenderit laboris labore ea nisi sint.\r\n",
        "registered": "2015-09-08T08:56:59 -03:00",
        "latitude": -64.059664,
        "longitude": 176.803161,
        "tags": [
            "adipisicing",
            "consectetur",
            "do",
            "incididunt",
            "cillum",
            "labore",
            "qui"
        ],
        "friends": [{
            "id": 0,
            "name": "Bray Gates"
        }, {
            "id": 1,
            "name": "Miles Ferrell"
        }, {
            "id": 2,
            "name": "Willa Holder"
        }],
        "greeting": "Hello, Hampton Matthews! You have 2 unread messages.",
        "favoriteFruit": "strawberry"
    }, {
        "_id": "575d5ebdb3febe6f84045dab",
        "index": 4,
        "guid": "f0980168-2203-4765-bd6b-489aab18cfbd",
        "isActive": false,
        "balance": "$1,976.69",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "green",
        "name": "Riggs Rutledge",
        "gender": "male",
        "company": "RONELON",
        "email": "riggsrutledge@ronelon.com",
        "phone": "+1 (944) 462-2038",
        "address": "818 Poplar Street, Dennard, Wyoming, 7599",
        "about": "Incididunt consequat labore laborum do est consectetur. Exercitation anim occaecat ipsum quis nisi dolore. Cillum quis in culpa enim tempor. Est velit commodo fugiat aliqua aute eiusmod ad sunt officia. Aliqua magna exercitation dolor non deserunt incididunt adipisicing.\r\n",
        "registered": "2015-05-10T09:57:04 -03:00",
        "latitude": 20.836105,
        "longitude": 160.555868,
        "tags": [
            "ut",
            "proident",
            "est",
            "officia",
            "adipisicing",
            "cillum",
            "et"
        ],
        "friends": [{
            "id": 0,
            "name": "Villarreal Guerrero"
        }, {
            "id": 1,
            "name": "Deanna Butler"
        }, {
            "id": 2,
            "name": "Blevins Powell"
        }],
        "greeting": "Hello, Riggs Rutledge! You have 5 unread messages.",
        "favoriteFruit": "strawberry"
    }, {
        "_id": "575d5ebd3b4e79aa677b3210",
        "index": 5,
        "guid": "61725353-0d61-4886-8597-d2c2eb699371",
        "isActive": false,
        "balance": "$2,838.07",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "brown",
        "name": "Stacy Donaldson",
        "gender": "female",
        "company": "TALKALOT",
        "email": "stacydonaldson@talkalot.com",
        "phone": "+1 (988) 465-2799",
        "address": "355 Granite Street, Iberia, Mississippi, 2297",
        "about": "Nulla nisi id laborum aliquip anim sit. Consectetur laborum sunt non ullamco aliquip. Culpa id qui sit velit ullamco elit aute laborum cupidatat tempor laboris.\r\n",
        "registered": "2015-10-25T05:37:57 -02:00",
        "latitude": 19.294192,
        "longitude": -74.345586,
        "tags": [
            "excepteur",
            "ea",
            "duis",
            "officia",
            "deserunt",
            "commodo",
            "id"
        ],
        "friends": [{
            "id": 0,
            "name": "Candace Massey"
        }, {
            "id": 1,
            "name": "Gray Stephens"
        }, {
            "id": 2,
            "name": "Houston Reeves"
        }],
        "greeting": "Hello, Stacy Donaldson! You have 6 unread messages.",
        "favoriteFruit": "apple"
    }, {
        "_id": "575d5ebd41936c3910c1abcf",
        "index": 6,
        "guid": "29f9fc54-dd28-4811-89d6-3e0e50c57815",
        "isActive": false,
        "balance": "$2,820.92",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "blue",
        "name": "Sasha Savage",
        "gender": "female",
        "company": "COMVEYER",
        "email": "sashasavage@comveyer.com",
        "phone": "+1 (827) 472-2879",
        "address": "125 Manor Court, Ahwahnee, South Dakota, 2353",
        "about": "Minim reprehenderit commodo aliquip dolor reprehenderit elit voluptate magna magna excepteur pariatur in eu. Irure eu et quis nulla irure deserunt consectetur. Lorem non ea in reprehenderit ad exercitation deserunt consectetur. Consequat pariatur amet minim cillum ullamco sit amet tempor anim et duis proident velit. Nostrud officia cupidatat in exercitation consectetur non excepteur dolore exercitation exercitation ea pariatur aliqua. Ex consectetur amet eiusmod sunt elit minim. Commodo do nisi in ullamco anim dolor et aute.\r\n",
        "registered": "2014-07-23T12:49:35 -03:00",
        "latitude": 42.964136,
        "longitude": 106.145449,
        "tags": [
            "est",
            "id",
            "officia",
            "labore",
            "quis",
            "ex",
            "labore"
        ],
        "friends": [{
            "id": 0,
            "name": "Kelly Harvey"
        }, {
            "id": 1,
            "name": "Ina Ross"
        }, {
            "id": 2,
            "name": "Audrey Mcgowan"
        }],
        "greeting": "Hello, Sasha Savage! You have 2 unread messages.",
        "favoriteFruit": "banana"
    }]
    res.send(data);
});

module.exports = router;