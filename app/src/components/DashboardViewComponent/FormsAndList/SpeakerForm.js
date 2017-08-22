import React, { Component } from 'react';



class SpeakerForm extends Component {



    constructor(props) {
        super(props);

        this.state = {

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange() {
        console.log('changing');
    }
    onSubmit(e) {
        console.log('coming');
        e.preventDefault();
        var speaker = this.refs.text.value.trim();

        if (!speaker) {
            alert("enter the vaue");
            return;
        }
        this.props.onSubmitSpeaker(speaker);
        this.refs.text.value ="";
    }

    render() {
        return (


            <div>
                <form className="ui form" onSubmit={this.onSubmit} >
                    <div className="ui form">
                        <div className="field">
                            <label>Speakers</label>
                            <textarea rows="2" onChange={this.onChange} ref="text"></textarea>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </div>
                </form>
            </div>




        );
    }


}

export default SpeakerForm;
