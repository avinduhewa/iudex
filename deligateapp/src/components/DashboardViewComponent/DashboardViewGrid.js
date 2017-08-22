import React, { Component } from 'react';






class DashboardViewGrid extends Component {



  render() {
    return (
      <div className="DashboardViewGrid bodyCards">

<div className="ui middle aligned center aligned grid">
<div className="column">
  <h2 className="ui image header">
    <div className="content">
      Enter your vote
    </div>
  </h2>
  
  <form  className="ui  form">
    <div className="ui stacked secondary  segment">
      <div className="field">
        <div className="ui left icon input">       
          <input type="text" placeholder=" Committee " name="committee"/>
        </div>
      </div>
      <div className="field">
        <div className="ui left icon input">  
          <input type="text" name="country" placeholder="Country"/>
        </div>
      </div>
      <div className="field">
        <div className="ui left icon input">  
          <input type="text" name="country" placeholder="Country"/>
        </div>
      </div>
      <button className="ui fluid   submit button">Submit</button>
    </div>


  </form>

 
</div>
</div>




      </div>
    );
  }
}

export default DashboardViewGrid;
