<div className="card" style={{ overflow: 'auto' }}>
<h3 className="ui center aligned icon header">
  <br />
  Pending Speakers
   </h3>

<div className="ui  segment">
  <div className="ui  relaxed divided list">
    {this.state.delegates.map((item, index) => (
      <div className="item ui  center aligned" key={index}>
        <div className="content">
          <div className="header" >{item.name}
            <div className="ui right floated">

            </div>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>