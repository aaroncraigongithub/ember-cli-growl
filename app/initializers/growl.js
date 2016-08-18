import Growl from '../services/growl';

export default {
  name: 'growl',
  initialize: function() {
    const app        = arguments[1] || arguments[0];
    const controller = (arguments.length === 2) ? arguments[0] : null;

    if (controller) {
      Growl.reopenClass({
        container: container
      });
    }

    app.register('growl:main', Growl);
    app.inject('route', 'growl', 'growl:main');
    app.inject('controller', 'growl', 'growl:main');
  }
};
