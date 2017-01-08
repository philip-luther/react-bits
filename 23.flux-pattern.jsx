/**
 * Flux pattern for data handling
 *
 * @Reference:
 * https://github.com/krasimir/react-in-patterns/tree/master/patterns/flux
 */

// Simple dispatcher
var Dispatcher = function () {
  return {
    _stores: [],
    register: function (store) {
      this._stores.push({store: store});
    },
    dispatch: function (action) {
      if (this._stores.length > 0) {
        this._stores.forEach(function (entry) {
          entry.store.update(action);
        });
      }
    }
  }
};

// We see the we expect the store to have an update method(), so let's modify register to expect it.
function register(store) {
  if (!store || !store.update && typeof store.update === 'function') {
    throw new Error('You should provide a store that has an updte method');
  } else {
    this._stores.push({store: store});
  }
}

// Full blown Dispatcher
var Dispatcher = function () {
  return {
    _stores: [],
    register: function (store) {
      if (!store || !store.update) {
        throw new Error('You should provide a store that has an `update` method.');
      } else {
        var consumers = [];
        var change = function () {
          consumers.forEach(function (l) {
            l(store);
          });
        };
        var subscribe = function (consumer, noInit) {
          consumers.push(consumer);
          !noInit ? consumer(store) : null;
        };

        this._stores.push({store: store, change: change});
        return subscribe;
      }
      return false;
    },
    dispatch: function (action) {
      if (this._stores.length > 0) {
        this._stores.forEach(function (entry) {
          entry.store.update(action, entry.change);
        });
      }
    }
  }
};

module.exports = {
  create: function () {
    var dispatcher = Dispatcher();

    return {
      createAction: function (type) {
        if (!type) {
          throw new Error('Please, provide action\'s type.');
        } else {
          return function (payload) {
            return dispatcher.dispatch({type: type, payload: payload});
          }
        }
      },
      createSubscriber: function (store) {
        return dispatcher.register(store);
      }
    }
  }
};