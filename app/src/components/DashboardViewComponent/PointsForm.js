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

function handleEnter(event) {
  if (event.keyCode === 13) {
    const form = event.target  ;
    const index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  }
}

function MyInput(props) {
  return <input onKeyDown={handleEnter} {...props} />;
}

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
        this._handleKeyPress = this._handleKeyPress.bind(this);
      }

        
  componentDidMount() {
    for (let x in this.refs) {
      this.refs[x].onkeypress = (e) => 
        this._handleKeyPress(e, this.refs[x]);
    }
    this.refs.name.focus();
  }
  
  _handleKeyPress(e, field) {
    // If enter key is pressed, focus next input field.
    if (e.keyCode === 13) {
      e.preventDefault();
      let next = this.refs[field.name].nextSibling;
      if (next && next.tagName === "INPUT") {
        this.refs[field.name].nextSibling.focus();
      }
    }
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
                  <CountryAuto />
   
                  {/* <select  value={this.state.countrySelect} onChange={this.onChange} name="countrySelect" className="ui search dropdown">
                  <option value="">Country</option>
                    {countryList}
                  </select>   */}
            </div>
            <div className="field">
              <CriteriaAuto />
              {/* <select value={this.state.criteriaSelect} onChange={this.onChange} name ="criteriaSelect" className="ui search dropdown">
                  <option value="">Criteria</option>
                    {criteriaList}
                  </select> */}
            </div>
            <div className="field">
              <input type="number" value={this.state.poitsAssign} onChange={this.onChange} name="points" id="points" placeholder="Points" value="0" />
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
