import React, { Component } from 'react';
import CountryAuto from './SearchComponentCountry';
import CriteriaAuto from './SearchComponentCriteria';

class PointsSelector extends Component {


  constructor(props) {
    super(props);

    this.state = {
      points: 0,
      
    }
  }

  onChange = (e) => {
    this.setState({points: e.target.value});
    this.onFieldChange('points', e.target.value);
  };

  onFieldChange(name, value) {
    this.props.onChange(name, value);
  }

  render() {
    return (
      <input type="number" max = {this.props.maximum} value={this.state.points} onChange={this.onChange} name="points" id="points" placeholder="Points"/>
    );
  }
}

export default PointsSelector;
