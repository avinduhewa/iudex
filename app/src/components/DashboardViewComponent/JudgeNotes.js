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

          <table className="ui celled padded table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Morning Session</th>
                <th>Noon Session</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4 className="ui image header">

                    <div className="content">
                      Srilanka
                    </div>
                  </h4></td>
                <td>
                  <div className="ui checkbox">
                    <input type="checkbox" name="morningSession" />
                    <label></label>
                  </div>
                </td>
                <td>
                  <div className="ui checkbox">
                    <input type="checkbox" name="noonSession" />
                    <label></label>
                  </div>
                </td>

              </tr>
              <tr>
                <td>
                  <h4 className="ui image header">

                    <div className="content">
                      Srilanka
                    </div>
                  </h4></td>
                <td>
                  <div className="ui checkbox">
                    <input type="checkbox" name="morningSession" />
                    <label></label>
                  </div>
                </td>
                <td>
                  <div className="ui checkbox">
                    <input type="checkbox" name="noonSession" />
                    <label></label>
                  </div>
                </td>

              </tr>



            </tbody>
      
          </table>


        </div>
        <div className="extra content">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="ui form">

              <button className="ui button" type="submit">Save</button>
            </div>
          </form>
        </div>

      </div>


    );
  }
}

export default JudgeNotes;
