import React, { Component } from 'react';



class JudgeNotes extends Component {
  render() {
    return (
    
  
        
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
        <form className="ui form" onSubmit={this.onSubmitNote}>      
          <div className="ui form">
            <div className="field">
              <label>Notes</label>
              <textarea rows="2"></textarea>

             

            </div>
            <button className="ui button" type="submit">Submit</button>
          </div>
          </form>
        </div>
      </div>

    
    );
  }
}

export default JudgeNotes;
