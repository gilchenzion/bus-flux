import React from 'react';
import fuzzy from 'fuzzy';
import names from '../constants/MockSearchData';
import SearchAction from '../actions/SearchAction'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here

        // getInitialState
        this.state = {
            'value': ''
        };

        //bind component `this` to handleChange
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({ 'value': e.target.value });

        // TODO: integrate with API and move to external Util or Service file
        var results = fuzzy.filter(e.target.value, names)
        var matches = results.map(function(el) { return el.string; });
        SearchAction.showResults(matches);
    };

    render() {
        return (
            <input className="searchBar"
                   type="text"
                   value={this.state.value}
                   onChange={this.handleChange} />
        );
    };
};
