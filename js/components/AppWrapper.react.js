import React from 'react';
import SearchBar from '../components/SearchBar.react';
import SearchResults from '../components/SearchResults.react';

export default class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        );
    }
};
