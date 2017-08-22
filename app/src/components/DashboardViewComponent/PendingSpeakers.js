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
            Speaker List
           </h3>


          <div className="content">
            <div className="header">Veronika Ossi</div>
            <div className="meta">Friend</div>
            <div className="description">
              Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
            </div>
          </div>
        </div>
      // </div>



    );
  }
}

export default PendingSpeakers;
