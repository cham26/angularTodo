'use strict';

var app = require('../..');
import request from 'supertest';

var newSchedule;

describe('Schedule API:', function() {
  describe('GET /y', function() {
    var schedules;

    beforeEach(function(done) {
      request(app)
        .get('/y')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          schedules = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(schedules).to.be.instanceOf(Array);
    });
  });

  describe('POST /y', function() {
    beforeEach(function(done) {
      request(app)
        .post('/y')
        .send({
          name: 'New Schedule',
          info: 'This is the brand new schedule!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSchedule = res.body;
          done();
        });
    });

    it('should respond with the newly created schedule', function() {
      expect(newSchedule.name).to.equal('New Schedule');
      expect(newSchedule.info).to.equal('This is the brand new schedule!!!');
    });
  });

  describe('GET /y/:id', function() {
    var schedule;

    beforeEach(function(done) {
      request(app)
        .get(`/y/${newSchedule._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          schedule = res.body;
          done();
        });
    });

    afterEach(function() {
      schedule = {};
    });

    it('should respond with the requested schedule', function() {
      expect(schedule.name).to.equal('New Schedule');
      expect(schedule.info).to.equal('This is the brand new schedule!!!');
    });
  });

  describe('PUT /y/:id', function() {
    var updatedSchedule;

    beforeEach(function(done) {
      request(app)
        .put(`/y/${newSchedule._id}`)
        .send({
          name: 'Updated Schedule',
          info: 'This is the updated schedule!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSchedule = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSchedule = {};
    });

    it('should respond with the original schedule', function() {
      expect(updatedSchedule.name).to.equal('New Schedule');
      expect(updatedSchedule.info).to.equal('This is the brand new schedule!!!');
    });

    it('should respond with the updated schedule on a subsequent GET', function(done) {
      request(app)
        .get(`/y/${newSchedule._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let schedule = res.body;

          expect(schedule.name).to.equal('Updated Schedule');
          expect(schedule.info).to.equal('This is the updated schedule!!!');

          done();
        });
    });
  });

  describe('PATCH /y/:id', function() {
    var patchedSchedule;

    beforeEach(function(done) {
      request(app)
        .patch(`/y/${newSchedule._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Schedule' },
          { op: 'replace', path: '/info', value: 'This is the patched schedule!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSchedule = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSchedule = {};
    });

    it('should respond with the patched schedule', function() {
      expect(patchedSchedule.name).to.equal('Patched Schedule');
      expect(patchedSchedule.info).to.equal('This is the patched schedule!!!');
    });
  });

  describe('DELETE /y/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/y/${newSchedule._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when schedule does not exist', function(done) {
      request(app)
        .delete(`/y/${newSchedule._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
