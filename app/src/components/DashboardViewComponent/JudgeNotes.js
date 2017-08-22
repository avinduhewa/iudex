import React, { Component } from 'react';



class JudgeNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { judgeNote: '' };


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

          <div className="ui relaxed divided list">
            <div className="item">
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <a className="header">Semantic-Org/Semantic-UI</a>
                

              </div>
              <div className="right floated content">

              </div>
            </div>
            <div className="item">
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <a className="header">Semantic-Org/Semantic-UI-Docs</a>
                <div className="description">Updated 22 mins ago</div>
              </div>
            </div>
            <div className="item">
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <a className="header">Semantic-Org/Semantic-UI-Meteor</a>
                <div className="description">Updated 34 mins ago</div>
              </div>
            </div>
          </div>

        </div>

      </div>


    );
  }
}

export default JudgeNotes;
