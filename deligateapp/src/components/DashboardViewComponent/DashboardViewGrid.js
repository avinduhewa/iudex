import React, { Component } from 'react';
import axios from 'axios';





class DashboardViewGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      committee:"",
      voter:"",
      nominee:""
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
   
    

}
onChange() {
  // const target = event.target;
  
  // const committee = target.name;
  // const country = target.name;

//   this.setState({
//     [committee]: value,
//     [country]: value
//   });
}

onSubmit(e) {
  e.preventDefault();
  console.log(this.Committee.value);
}

vote(){
  this.refs.btn.setAttribute("disabled", "disabled");
  const options = {
    method: 'POST',
    url: 'https://3wejisthn9.execute-api.ap-southeast-1.amazonaws.com/dev/vote',
    data: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    json: true
  }
  axios(options)
    .then((resp) => {

    })
    .catch(console.error)
}

  render() {
    return (
      <div className="DashboardViewGrid bodyCards">

<div className="ui middle aligned center aligned grid">
<div className="column">
  <h2 className="ui image header">
    <div className="content">
      Enter your c
    </div>
  </h2>
  
  <form  className="ui  form" onSubmit={this.onSubmit}>
    <div className="ui stacked secondary  segment">
      <div className="field">
        <div className="ui left icon input">       
          <input type="text" placeholder=" Committee" ref="Committee"  name="committee" onChange = {this.onChange}/>
        </div>
      </div>
      <div className="field">
        <div className="ui left icon input">  
          <input type="text" name="country" ref="country" value={this.state.value} placeholder="Country" onChange = {this.onChange}/>
        </div>
      </div>
      {/* <div className="field">
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
