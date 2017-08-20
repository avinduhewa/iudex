import React, { Component } from 'react';



class SpeakerList extends Component {
  render() {
    return (


      <div className="ui card" id="speakerList" style={{ overflow: 'auto' }}>

        <div className="content">

        <div className="ui relaxed divided list">
        <div className="item">
          <i className="large user middle aligned icon"></i>
          <div className="content">
            <a className="header">Speaker 1</a>
            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
        <div className="item">
          <i className="large user middle aligned icon"></i>
          <div className="content">
            <a className="header">Speaker 2</a>
            <div className="description">Updated 22 mins ago</div>
          </div>
        </div>
        <div className="item">
          <i className="large user middle aligned icon"></i>
          <div className="content">
            <a className="header">Speaker 3</a>
            <div className="description">Updated 34 mins ago</div>
          </div>
        </div>
        
      </div>

        </div>
     
      </div>





    );
  }
}

export default SpeakerList;
