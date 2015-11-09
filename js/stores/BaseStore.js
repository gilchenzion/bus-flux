// Taken from: https://github.com/auth0/react-flux-jwt-authentication-sample/blob/gh-pages/src/stores/BaseStore.js
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

export default class BaseStore extends EventEmitter {

  constructor() {
    super();
  }

  subscribe(actionSubscribe) {
    this._dispatchToken = AppDispatcher.register(actionSubscribe());
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  set dispatchToken(token) {
      this._dispatchToken = token;
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb)
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}
