import React from 'react';

function FilteredData(props) {

    const newChilds = props.children.map((elm) => {
        return React.cloneElement(elm, { className: 'removeBtn', onClick: () => {
            console.log('clicked');
        } })
    })

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
            {props.children}
            {newChilds}
        </div>
    )
}

export default FilteredData;
