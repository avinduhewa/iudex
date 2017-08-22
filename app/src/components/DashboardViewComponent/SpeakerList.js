import React, { Component } from 'react';

import SpeakerLIstloop from './FormsAndList/SpeakerLIstloop';
import SpeakerForm from './FormsAndList/SpeakerForm';

class SpeakerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      judgeNote: '',

      speakerList: [

        {
          id:1,
          speaker:'name'
        },
        
        {
          id:2,
          speaker:'name1'
        },
        
        {
          id:3,
          speaker:'name2'
        },

      ]
    };
    this.handleSubmitSpeaker =this.handleSubmitSpeaker.bind(this);
  }

  handleSubmitSpeaker(speaker){
    console.log(this.state);
    var newSpeaker={
      id : this.state.speakerList.length +1,
      speaker : speaker
    }
    this.setState({speakerList: this.state.speakerList.concat(newSpeaker)});
  }

  render() {
    return (

      <div className="ui card" id="cardNotes" >

        <div className="content" style={{ overflow: 'auto' }}>

          <SpeakerLIstloop  speakerList={this.state.speakerList}/>

        </div>
        <div className="extra content">
          <SpeakerForm onSubmitSpeaker={this.handleSubmitSpeaker}/>
        </div>


      </div>






    );
  }
}

export default SpeakerList;
