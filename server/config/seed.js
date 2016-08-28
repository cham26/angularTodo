/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var Thing = sqldb.Thing;
var User = sqldb.User;
var Schedule = sqldb.Schedule

Thing.sync()
  .then(() => {
    return Thing.destroy({ where: {} });
  })
  .then(() => {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }]);
  });

User.sync()
  .then(() => User.destroy({ where: {} }))
  .then(() => {
    User.bulkCreate([{
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }])
    .then(() => {
      console.log('finished populating users');
    });
  });

Schedule.sync()
  .then(() => Schedule.destroy({
    where: {}
  }))
  .then(() => {
    let month = [];
    for (var i = 1; i < 32; i++) {
        let day;
        switch(i) {
          case 1: case 8: case 15: case 22: case 29:
          day = 'Sunday';
          break;
          case 2: case 9: case 16: case 23: case 30:
          day = 'Monday';
          break;
          case 3: case 10: case 17: case 24: case 31:
          day = 'Tuesday';
          break;
          case 4: case 11: case 18: case 25:
          day = 'Wednesday';
          break;
          case 5: case 12: case 19: case 26:
          day = 'Thursday';
          break;
          case 6: case 13: case 20: case 27:
          day = 'Friday';
          break;
          case 7: case 14: case 21: case 28:
          day = 'Saturday';
          break;
          default:
            day = 'Holiday';
        }
      let dayForDatabase = {
        day: day,
        date: i,
        isWorking: false,
        shift: null
      };
      month.push(dayForDatabase)
    }
    Schedule.bulkCreate(month )
      .then(() => {
        console.log('finished populating schedules', month);
      });
  });








