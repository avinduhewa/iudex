import React, { Component } from 'react';



class SpeakerLIstloop extends Component {


  constructor(props) {
    super(props);

    this.state = {

    }

  }


  handleCheckbox(){
    alert("checked");
  }

  render() {
    return (



      <div>





        <div className="ui  segment">
          <div className="ui  relaxed divided list">
            


            {
              this.props.speakerList.map(speakerList => {
                return (
                  
                  <div className="item" key={speakerList.id}>
                  <div className="content">
                    <div className="header">{speakerList.speaker}</div>
                  
                    <div className="ui checkbox right floated "  onChange={this.handleCheckbox}>
                      <input type="checkbox" name="example" />
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
