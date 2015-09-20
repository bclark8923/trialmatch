'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Clinicaluser = new Module('clinicaluser');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Clinicaluser.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Clinicaluser.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Clinicaluser.menus.add({
    title: 'clinicaluser example page',
    link: 'clinicaluser example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Clinicaluser.aggregateAsset('css', 'clinicaluser.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Clinicaluser.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Clinicaluser.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Clinicaluser.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Clinicaluser;
});
