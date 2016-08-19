/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-growl',
  included: function(app) {
    this._super.included(app);

    var versionString = app.project.pkg.dependencies['ember-cli'];
    var version = versionString.replace(/[^\d\.]/, '');

    if (version.match(/^1/)) {
      app.import('components/growl-manager.css');
    } else {
      app.import('app/styles/components/growl-manager.css');
    }
  }
};
