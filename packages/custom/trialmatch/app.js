'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Trialmatch = new Module('trialmatch');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Trialmatch.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Trialmatch.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Trialmatch.menus.add({
    title: 'trialmatch example page',
    link: 'trialmatch example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Trialmatch.aggregateAsset('css', 'trialmatch.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Trialmatch.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Trialmatch.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Trialmatch.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Trialmatch;
});
