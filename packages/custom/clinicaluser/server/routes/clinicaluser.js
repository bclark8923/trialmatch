'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Clinicaluser, app, auth, database) {

  app.get('/clinicaluser/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/clinicaluser/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/clinicaluser/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/clinicaluser/example/render', function(req, res, next) {
    Clinicaluser.render('index', {
      package: 'clinicaluser'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
