import React, { Component } from 'react';
import axios from 'axios';

class PendingSpeakers extends Component {
  constructor() {
    super();

    this.state = {
      delegates: []
    }
  }
  componentDidMount() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getInactiveDelegates?committee=${'598ad84f734d1d2227f453fb'}`)
      .then((resp) => {
        this.setState({
          delegates: resp.data.data
        })
      })
      .catch(console.error)
  }
  render() {
    return (


      // <div className="card">
      //   <div className="content">
      //     {this.state.delegates.map((item, index) => (
      //       <div className="header" key={index}>{item.name} - {item.totalPoints}</div>
      //     ))}
    
  
        <div className="card" style={{ overflow: 'auto' }}>
            <h3 className="ui center aligned icon header">
            <br/>
           Pending Speakers
           </h3>

           <div className="ui  segment">
           <div className="ui  relaxed divided list">
             {this.state.delegates.map((item, index) => (
               <div className="item ui  center aligned" key={index}>
                 <div className="content">
                   <div className="header" >{item.name}   
                     <div className ="ui right floated">
               
                       </div>                  
                     
                     </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
        </div>
      // </div>



    );
  }
}

export default PendingSpeakers;
