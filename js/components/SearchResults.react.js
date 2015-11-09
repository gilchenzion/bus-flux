import React from 'react';
import SearchStore from '../stores/SearchStore';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
        this.state = this._getSearchState();
    };

    _getSearchState() {
        return {
            results : SearchStore.results
        };
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      SearchStore.addChangeListener(this.changeListener);
    }

    componentWillUnmount() {
      SearchStore.removeChangeListener(this.changeListener);
    }

    _onChange() {
      this.setState(this._getSearchState());
    }

    render() {
        var li = this.state.results.map(function (name, index) {
            return (
                <li key={index}>
                    {name}
                </li>
            );
        });
        return (
            <ul>
                {li}
            </ul>
        );
    };
};
