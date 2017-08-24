import React, { Component } from 'react';
import axios from 'axios';

class LeaderBoard extends Component {
  constructor() {
    super();

    this.state = {
      delegates: [],
      committee: window.localStorage.getItem('committee')
    }
  }
  componentDidMount() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getTop?committee=${this.state.committee}`)
      .then((resp) => {
        this.setState({
          delegates: resp.data.data
        })
      })
      .catch(console.error);
    setInterval(() => {
      axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getTop?committee=${this.state.committee}`)
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

      <div className="ui card" id="cardNotes">
      <h3 className="ui center aligned icon header">
       Leader Board
      </h3>
      <div className="content" style={{ overflow: 'auto' }}>
      <div className="ui  segment">
          <div className="ui  relaxed divided list">
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {this.state.delegates.map((item, index) => (
            <div className="item" key={index}>
              <div className="content" >
                <div className="header" >{item.name}
                  <div className="ui right floated">
                    {item.totalPoints}
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

export default LeaderBoard;
