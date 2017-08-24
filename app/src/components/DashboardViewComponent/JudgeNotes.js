import React, { Component } from 'react';



class JudgeNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { judgeNote: '' ,
  value :'1'
};


    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSessionSelection = this.handleSessionSelection.bind(this);
    this.handleSessionChange = this.handleSessionChange.bind(this);
  }

  
  handleSessionChange(e) {
    this.setState({value: e.target.value});
  }

  handleSessionSelection(e) {
    alert( this.state.value);
    e.preventDefault();
  }


  // handleSubmit(e) {
  //   alert(this.state.value);
  //   e.preventDefault();
  // }


  render() {
    return (



      <div className="ui card" id="cardNotes" >
        <h3 className="ui invert center aligned icon header">

          Role call
           </h3>


        <div className="content" style={{ overflow: 'auto' }}>

          <form onSubmit={this.handleSessionSelection}>
            <select className="ui dropdown" value={this.state.value} onChange={this.handleSessionChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </form>
          <table className="ui celled padded table">
            <thead>
              <tr>
                <th>Country</th>
                <th> Session</th>

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


              </tr>




            </tbody>

          </table>


        </div>
        <div className="extra content">
          <form className="ui form" onSubmit={this.handleSessionSelection}>
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
