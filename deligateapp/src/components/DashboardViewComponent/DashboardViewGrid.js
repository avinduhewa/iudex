import React, { Component } from 'react';






class DashboardViewGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
   
    

}
onChange() {
 
  console.log("changigns")
}

onSubmit(e) {
  e.preventDefault();
  console.log(this.refs.Committee.value);
  
 
}

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
  
  <form  className="ui  form" onSubmit={this.onSubmit}>
    <div className="ui stacked secondary  segment">
      <div className="field">
        <div className="ui left icon input">       
          <input type="text" placeholder=" Committee" ref="Committee"  name="committee" onChange = {this.onChange}/>
        </div>
      </div>
      {/* <div className="field">
        <div className="ui left icon input">  
          <input type="text" name="country" ref="country" value={this.state.value} placeholder="Country" onChange = {this.onChange}/>
        </div>
      </div>
      <div className="field">
        <div className="ui left icon input">  
          <input type="text" name="country" ref="Committee" placeholder="Country"/>
        </div>
      </div> */}
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
