import React, { Component } from 'react';



class SpeakerLIstloop extends Component {


  constructor(props) {
    super(props);

    this.state = {
  
    }
   
  }

  render() {
    return (



      <div>
   <div className="ui relaxed divided list" >

     <ul>
{
  this.props.speakerList.map(speakerList=>{
    return<li speakerList = {speakerList}  key={speakerList.id}>{speakerList.speaker}</li>
  })
}
       </ul>
                <div className="item">
                
                  <div className="content">
                 
                    <div className="description">Updated 10 mins ago</div>
                  </div>
                </div>
               
          </div>
      </div>




    );
  }
}

export default SpeakerLIstloop;
