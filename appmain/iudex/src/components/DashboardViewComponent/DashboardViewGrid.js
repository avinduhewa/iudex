import React, { Component } from 'react';



class DashboardViewGrid extends Component {
  render() {
    return (
      <div className ="DashboardViewGrid bodyCards">


      <div className = "ui container">

        <div className="three column row">
          <div className="column">

          <form className="ui form">
            <h1 className="ui dividing header GridName ">NYMUN</h1>
            <div className="field">

              <div className="four fields">
                <div className="field">

                <select class="ui search dropdown">
                  <option value="">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>

                </select>

                </div>
                <div className="field">

                <select class="ui search dropdown">
                  <option value="">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                </select>
                </div>
                <div className="field">
                  <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
                </div>
                <div className="field">
                  <div className="ui animated button" tabindex="0">
                  <div className="visible content">Submit</div>
                  <div className="hidden content">
                    <i className="right arrow icon"></i>
                  </div>
                  </div>
                </div>
              </div>
            </div>


          </form>




          </div>


          <div className="ui cards cardPosition">
    <div className="card">
      <div className="content">
        <div className="header">Elliot Fu</div>
        <div className="meta">Friend</div>
        <div className="description">


        <div className="ui middle aligned animated list">
        <div className="item">

          <div className="content">
            <div className="header">Helen</div>
          </div>
        </div>
        <div className="item">

          <div className="content">
            <div className="header">Christian</div>
          </div>
        </div>
        <div className="item">

          <div className="content">
            <div className="header">Daniel</div>
          </div>
        </div>
        </div>


        </div>
      </div>
    </div>
    <div className="card">
      <div className="content">
        <div className="header">Veronika Ossi</div>
        <div className="meta">Friend</div>
        <div className="description">
          Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="content">
        <div className="header">Jenny Hess</div>
        <div className="meta">Friend</div>
        <div className="description">
          Jenny is a student studying Media Management at the New School
        </div>
      </div>
    </div>
  </div>
        </div>




      </div>


      </div>
    );
  }
}

export default DashboardViewGrid;
