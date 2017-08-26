import React, { Component } from 'react';
import axios from 'axios';

class PendingSpeakers extends Component {
  constructor() {
    super();

    this.state = {
      committee: window.localStorage.getItem('committee'),
      delegates: []
    }
  }
  componentDidMount() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getInactiveDelegates?committee=${this.state.committee}`)
      .then((resp) => {
        this.setState({
          delegates: resp.data.data
        })
      })
      .catch(console.error)
    setInterval(() => {
      axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getInactiveDelegates?committee=${this.state.committee}`)
        .then((resp) => {
          this.setState({
            delegates: resp.data.data
          })
        })
        .catch(console.error)
    }, 5000)
  }
  render() {
    return (




      <div className="card" id="pending">
        <h3 className="ui center aligned icon header">
        
          Pending Speakers
           </h3>
           <div className="content" style={{ overflow: 'auto' }}>
        <div className="ui  segment">
          <div className="ui  relaxed divided list">
            {this.state.delegates.map((item, index) => (
              <div className="item ui  center aligned" key={index}>
                <div className="content">
                  <div className="header" >{item.name}
                    <div className="ui right floated">

                    </div>

                  </div>
                </div>
              </div>
            ))}
            
          </div>
          
        </div>
      </div>
      </div>



    );
  }
}

export default PendingSpeakers;
