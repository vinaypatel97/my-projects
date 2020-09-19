import React from 'react';

function FilteredData(props) {

    const { suggestions, updateSelectedSuggestions } = props;

    return (
        <div>
            {
                suggestions.length > 0 && suggestions.map((elm, index) => {
                    return (
                        <div key={`suggestion_${index}`} onClick={() => updateSelectedSuggestions(elm)}>{elm}</div>
                    )
                })
            }
        </div>
    )
}

export default FilteredData;
