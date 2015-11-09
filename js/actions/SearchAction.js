import AppDispatcher from '../dispatcher/AppDispatcher'
import SearchConstants from '../constants/SearchConstants'

export default {
    showResults(results) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.SEARCH_FIND,
            results: results
        });
    }
}
