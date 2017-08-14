import React, { Component } from 'react';



class DashboardViewGrid extends Component {

  constructor(props){
    super(props);
    this.state ={
      speakerName :''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});  
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  handleSubmit(event) {
   
  }


  render() {
    return (
      <div className ="DashboardViewGrid bodyCards">
        

          
            

      <div className="notes">


                

              <div className="ui middle aligned right aligned grid ">

      


                <div className="ui card">
                  <div className="content">
                    <div className="header">Cute Dog</div>
                    <div className="meta">2 days ago</div>
                    <div className="description">
                      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                      <p>Many people also have their own barometers for what makes a cute dog.</p>
                    </div>
                  </div>
                </div>
              </div>
              


        </div>

        <div className = "textcard">
        <div className="ui middle aligned left aligned grid textcard">
        <div className="">
        <h1 className="ui center aligned header">NYMUN</h1>
          <form className="ui form" onSubmit={this.onSubmit}>
              
              <div className="field">
  
                <div className="four fields">
                  <div className="field">
  
                  <select className="ui search dropdown">
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
  
                  </select>
  
                  </div>
                  <div className="field">
  
                  <select className="ui search dropdown">
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                  </select>
                  </div>
                  <div className="field">
                    <input type="text" name="speakerName" value={this.state.speakerName} onChange={this.onChange}/>
                  </div>
                  <div className="field">
                    <div className="ui animated button" tabIndex="0">
                    <div className="visible content">Submit</div>
                    <div className="hidden content">
                      <i className="right arrow icon"></i>
                    </div>
                    </div>
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
    );
  }
}

export default DashboardViewGrid;
