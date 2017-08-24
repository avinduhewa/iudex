import React, { Component } from 'react';

class SpeakerLIstloop extends Component {

  constructor(props) {
    super(props);
  }


  toggleCheckbox(speaker) {
    const index = this.props.speakerList.indexOf(speaker);
    if (speaker.checked === true) {
      this.props.speakerList[index].checked = false;
    } else {
      this.props.speakerList[index].checked = true;
    }
  }

  onCheckChange(speakerList, e) {
    let index;
    for (let x in this.props.speakerList) {
      if (this.props.speakerList[x].id == speakerList.id) {
        index = x;
        break
      }
    }
    const array = this.props.speakerList.slice();
    if (array[index].checked === true) {
      array[index].checked = false;
    } else {
      array[index].checked = true;
    }
    this.props.checkedValueChange({ speakerList: array });
  }

  render() {
    return (
      <div>
        <div className="ui  segment">
          <div className="ui  relaxed divided list">
            {
              this.props.speakerList.map((speakerList, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="content">
                      <div className="header">{speakerList.speaker}</div>
                      <div className="ui checkbox right floated " >
                        <input type="checkbox" name={speakerList.speaker} ref="checked"
                         checked={speakerList.checked} onChange={this.onCheckChange.bind(this, speakerList)} />
                        <label></label>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </  div>
    );
  }
}

export default SpeakerLIstloop;
