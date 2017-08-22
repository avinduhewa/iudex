import React, { Component } from 'react';



class SpeakerList extends Component {

  constructor(props) {
    super(props);
    this.state = {judgeNote: ''};

    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }


  render() {
    return (
     
      <div className="ui card" id="cardNotes" >
        
        <div className="content" style={{ overflow: 'auto' }}>

            <div className="ui relaxed divided list" >
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
        <form className="ui form" onSubmit={this.handleSubmit}>      
          <div className="ui form">
            <div className="field">
              <label>Speakers</label>
              <textarea rows="2" value={this.state.value}></textarea>

             

            </div>
            <button className="ui button" type="submit">Submit</button>
          </div>
          </form>
        </div>
      </div>






    );
  }
}

export default SpeakerList;
