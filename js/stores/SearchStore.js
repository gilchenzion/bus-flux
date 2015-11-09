import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import SearchConstants from '../constants/SearchConstants';
import BaseStore from '../stores/BaseStore';

class SearchStore extends BaseStore {
    constructor() {
        super();
        // First we register to the Dispatcher to listen for actions.
        this.dispatchToken = AppDispatcher.register(this._registerToActions.bind(this));
        this._results = [];
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case SearchConstants.SEARCH_FIND:
                this._results = action.results;
                this.emitChange();
                break;
            default:
                break;
        };
    }

    get results() {
        return this._results;
    }

    hasResults() {
        return this._results.length >= 0;
    }
}

export default new SearchStore();
