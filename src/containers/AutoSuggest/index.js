import React, { Component } from 'react';
import FilteredData from './FilteredData';
import { debounce } from '../../utils/debounce';
import { memoize } from '../../utils/memoize';
import './main.css';

const dataSet = [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Greenland", "Code": "GL" },
    { "Name": "Hong Kong", "Code": "HK" },
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" },
    { "Name": "Sri Lanka", "Code": "SL" }
];


export default class AutoSuggest extends Component {

    constructor() {
        super();
        this.state = {
            suggestions: [],
            selectedSuggestion: [],
        }
        this.timer = null;
        this.onChange = debounce(this.onChange, 500);
        this.findSuggestions = memoize(this.findSuggestions)
    }

    onChange = (value) => {
        const text = value;
        let suggestions = [];

        if (text === '') {
            this.setState({ suggestions: [] });
            return;
        }

        const results = this.findSuggestions(suggestions, text);
        this.setState({ suggestions: results });
    }

    findSuggestions = (suggestions, text) => {

        const { selectedSuggestion } = this.state;

        dataSet.forEach((elm) => {
            const countryName = elm.Name.toLowerCase();
            if (countryName.includes(text.toLowerCase()) && !selectedSuggestion.includes(elm.Name)) {
                suggestions.push(elm.Name);
            }
        });

        return suggestions;
    }

    updateSelectedSuggestions = (suggestion) => {
        const { selectedSuggestion, suggestions } = this.state;

        if (!selectedSuggestion.includes(suggestion)) {
            selectedSuggestion.push(suggestion);
            const updatedSuggestions = suggestions.filter((elm) => {
                if (suggestion !== elm) return elm;
            })
            this.setState({ selectedSuggestion, suggestions: updatedSuggestions });
        }
    }

    removeSelectedSuggestion = (removeItem) => {
        const { selectedSuggestion } = this.state;
        const remainingArray = selectedSuggestion.filter((elm) => {
            if (removeItem !== elm) return elm;
        })

        this.setState({ selectedSuggestion: remainingArray });
    }

    render() {

        const { suggestions, selectedSuggestion } = this.state;

        return (
            <div>
                <div>
                    <div>
                        <input onChange={(event) => this.onChange(event.target.value)} />
                        <div>
                            {
                                selectedSuggestion.length > 0 &&
                                selectedSuggestion.map((elm, index) => {
                                    return (
                                        <div className="selectedSuggestion" key={`selectedSuggestion_${index}`}>
                                            <span >{elm}</span>
                                            <span className="removeBtn" onClick={() => this.removeSelectedSuggestion(elm)}>Remove</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <FilteredData
                        suggestions={suggestions}
                        updateSelectedSuggestions={this.updateSelectedSuggestions}
                    />
                </div>
            </div>
        )
    }
}
