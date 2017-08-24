import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const languages = [
  {
    name: '1 - Debating',
    value: 'debating',

  },
  {
    name: '2 - Lobbying',
    value: 'lobbying',
  },
  {
    name: '3 - Knowledge of protocol',
    value: 'protocol',
  },
  {
    name: '4 - Foreign policy statement',
    value: 'fps',
  },
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class Example extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
    
  }

  onChange = (event, { newValue }) => {
    this.onFieldChange('category', newValue.split(" ")[0]);
    this.setState({
      value: newValue
    });
  };

  onFieldChange(name, value) {
    this.props.onChange(name, value);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Committe',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Example;