import React, { Component } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

let languages;

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
console.log (languages)
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
      committee: window.localStorage.getItem('committee'),
      value: '',
      suggestions: []
    };

  }

  componentDidMount() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getCommittee?committee=${this.state.committee}`)
      .then((resp) => {
        languages = resp.data.data.countries
      })
      .catch(console.error)
  }

  onChange = (event, { newValue }) => {
    this.onFieldChange('country', newValue);
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
      placeholder: 'Country',
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