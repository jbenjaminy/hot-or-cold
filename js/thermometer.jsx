var React = require('react');

var Thermometer = React.createClass({
  render: function() {
    var spanStyle = {
        height: this.props.thermAmount + '%'
    };

    return (
      <div className="thermometer">
        <span className="glass">
            <strong className="win">Winner! -</strong>
            <strong className="hot">Hot! -</strong>
            <strong className="warm">Warm -</strong>
            <strong className="cold">Cold -</strong>
            <strong className="icecold">Ice Cold -</strong>
            <span className="amount" style={spanStyle}></span>
            
        </span>
        <div className="bulb">
            <span className="red-circle"></span>
            <span className="filler">
                <span></span>
            </span>
        </div>
      </div>
    );
  }
});

module.exports = Thermometer;