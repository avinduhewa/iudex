import React, { Component } from 'react';
import CountryAuto from './SearchComponentCountry';
import CriteriaAuto from './SearchComponentCriteria';


// // Country select
// const country = ['SriLanka', 'USA', 'India',];
// const countryList = country.map((Con, i) =>

// <option value={Con}  key={'Con' + i}>{Con}</option>
// );
// // criteria select
// const criteria = ['Debate', 'Speech', 'OtherStuff'];
// const criteriaList = criteria.map((criterias, i) =>

// <option value={criterias}   key={'criterias' + i}>{criterias}</option>
// );



class PointsForm extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          speakerName: '',
          countrySearch:'country'
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateCountrySearch = this.updateCountrySearch.bind(this);
      }
    
      updateCountrySearch(e){
        this.setState ({countrySearch : e.target.value})
       
      }
    
      componentWillMount() {
        if (window.localStorage.getItem("login") === null ||
          window.localStorage.getItem("login") === "false") {
          window.location.assign('/');
        }
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
      }
    
    
      onSubmitNote(e){
        console.log('zxcz')
      }
 
      
      
  render() {
    return (
   
     
        <form className="ui form" onSubmit={this.onSubmit}>       
             
              <div className="field">  
                <div className="four fields">
                  <div className="field"> 
                  <CountryAuto/>
   
                  {/* <select  value={this.state.countrySelect} onChange={this.onChange} name="countrySelect" className="ui search dropdown">
                  <option value="">Country</option>
                    {countryList}
                  </select>   */}
                  </div>
                  <div className="field"> 
                  <CriteriaAuto/>      
                  {/* <select value={this.state.criteriaSelect} onChange={this.onChange} name ="criteriaSelect" className="ui search dropdown">
                  <option value="">Criteria</option>
                    {criteriaList}
                  </select> */}
                  </div>
                  <div className="field"> 
                  <input type="number" value={this.state.poitsAssign} onChange={this.onChange} name="points" placeholder="Points"/>       
                  </div>
                  <div className="field"> 
                  <button className="ui button" type="submit">Submit</button>
                  </div>
                </div>
           
           
              </div>
            </form>
     

    
    );
  }
}

export default PointsForm;
