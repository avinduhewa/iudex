import React, { Component } from 'react';
import './DashboardViewComponent.css';



class DashboardViewGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      speakerName: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

 

  render() {
    return (
      <div className ="DashboardViewGrid bodyCards">

         
    <ul className="bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>


     <div className ="container">   
    <div className="ui grid">
      <div className="eight wide ">


        
      <div className = "textcard">
      <div className ="container">   
        <div className="ui middle aligned left aligned grid textcard">
        <div className="">
        <h1 className="ui center aligned header titleText" >NYMUN</h1>
          <form className="ui form" onSubmit={this.onSubmit}>            
              <div className="field">  
                <div className="four fields">
                  <div className="field"> 
                  <select  value={this.state.countrySelect} onChange={this.onChange} name="countrySelect" className="ui search dropdown">
                    <option value="">Country</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>  
                  </select>  
                  </div>
                  <div className="field"> 
                  <select value={this.state.criteriaSelect} onChange={this.onChange} name ="criteriaSelect" className="ui search dropdown">
                    <option value="">Criteria</option>
                    <option value="AL">Speech</option>
                    <option value="AK">Debate</option>
                    <option value="AZ">Shit</option>
                  </select>
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
            <div className="ui cards cardPosition">
               <div className="card">
                <div className="content">
                  <div className="header">Elliot Fu</div>
                  <div className="meta">Friend</div>
                  <div className="description">
          
          
                  <div className="ui middle aligned animated list">
                
                
                  <div className="item">
          
                    <div className="content">
                      <div className="header">Daniel</div>
                    </div>
                  </div>
                  </div>
          
          
                  </div>
                </div>
              </div>

      
        <div className="card">
          <div className="content">
            <div className="header">Veronika Ossi</div>
            <div className="meta">Friend</div>
            <div className="description">
              Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">Jenny Hess</div>
            <div className="meta">Friend</div>
            <div className="description">
              Jenny is a student studying Media Management at the New School
            </div>
          </div>
        </div>
      </div>
  


      
        </div>
        </div>
        </div>
        </div>
      </div>


      <div className="eight wide centered  ">
      <div className=" ">

        <div className="ui card" id="cardNotes">
        
        <div className="content">

            <div className="ui relaxed divided list">
                <div className="item">
                <i className="write icon"></i>
                  <div className="content">
                 
                    <div className="description">Updated 10 mins ago</div>
                  </div>
                </div>
                <div className="item">
                <i className="write icon"></i>
                  <div className="content">
                   
                    <div className="description">Updated 22 mins ago</div>
                  </div>
                </div>
                <div className="item">
                <i className="write icon"></i>
                  <div className="content">
                   
                    <div className="description">Updated 34 mins ago</div>
                  </div>
                </div>
          </div>
         
        </div>
        <div className="extra content">
          <div className="ui form">
            <div className="field">
              <label>Notes</label>
              <textarea rows="2"></textarea>
            </div>
          </div>
        </div>
      </div>
      
        </div>
      </div>
     
    </div >
          
            








    </div>
      </div>
    );
  }
}

export default DashboardViewGrid;
