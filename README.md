# Growl

A growl component for EmberJS that displays notifications and handles dismissal.

[Live Demo](http://growl.jerel.co/)

[![Build Status](https://travis-ci.org/jerel/ember-cli-growl.svg?branch=master)](https://travis-ci.org/jerel/ember-cli-growl)

## Installation

`npm install --save-dev ember-cli-growl`

## Usage

Add the component to your application template:

    {{growl-manager notifications=growl.notifications}}

Note: `growl.notifications` references the service injected on the application

controller.

### Ember 1.x

The `growl` service is injected into all routes and controllers. This means
you can display messages like so: `this.growl.error('An error message');`

Message types:

    this.growl.error('Message', [options]);

    this.growl.info('Message', [options]);

    this.growl.alert('Message', [options]);

### Ember 2.x

Inject the `growl` service into your route / controller / component normally:

```
export default Ember.Component.extend({
  growl: Ember.inject.service(),

  actions: {
    popAlert() {
      this.get('growl').error('Error message!');
    }
  }  
});

## Options

* `fadeIn`
 * Default: `true`
 * Fade new messages into view.
* `closeIn`
 * Default: `5000`
 * milliseconds until the message auto-closes
* `clickToDismiss`
 * Default: `false`
 * If set to `true` the message will not close until it is clicked.
* `twitch`
 * Default: `false`
 * If set to `true` the message will animate.

To override the default CSS add `app/styles/components/growl-manager.css` in your app. To override the HTML for a growl instance add `app/templates/components/growl-instance.hbs`

## Authors

* [Jerel Unruh](http://twitter.com/jerelunruh/)
* [Russel Quadros](https://dribbble.com/russelq) (Icons)

## Legal

Copyright (c) 2014 Jerel Unruh

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
