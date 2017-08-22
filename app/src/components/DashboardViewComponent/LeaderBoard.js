import React, { Component } from 'react';
import axios from 'axios';




class LeaderBoard extends Component {
  constructor() {
    super();

    this.state = {
      delegates: []
    }
  }
  componentDidMount() {
    axios.get(`https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/getTop?committee=${'598ad84f734d1d2227f453fb'}`)
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
        <div className="content">
          <div className="hea der">Elliot Fu</div>
          <div className="meta">Friend</div>
          <div className="description">
            <div className="ui middle aligned animated list">
              <div className="item">
                <div className="content">
                  <div className="header">Daniel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default LeaderBoard;
