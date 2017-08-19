import React, { Component } from 'react';
import LeaderBoard from './LeaderBoard';
import PendingSpeakers from './PendingSpeakers';
import SpeakerList from './SpeakerList';
import PointsForm from './PointsForm';
import JudgeNotes from './JudgeNotes';
import './DashboardViewComponent.css';



class DashboardViewGrid extends Component {



  render() {
    return (
      <div className ="DashboardViewGrid bodyCards">






      <div className="ui row">
     <div className ="container">   
    <div className="ui grid">
      <div className="eight wide ">


        
      <div className = "textcard">
      <div className ="container">   
        <div className="ui middle aligned left aligned grid textcard">
        <div className="">
       
          <PointsForm/>

            <div className="ui cards ">
                <LeaderBoard/>
                <PendingSpeakers/>
                <SpeakerList/>
             </div>
  


      
        </div>
        </div>
        </div>
        </div>
      </div>


      <div className="eight wide   ">
      <div className=" ">
      <JudgeNotes/>
      
        </div>
      </div>
     </div>
    </div >
          
            








    </div>
      </div>
    );
  }
}

export default DashboardViewGrid;
