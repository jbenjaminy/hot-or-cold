var React = require('react');

var Overlay = function (props) {
  var classes = 'instructions' + (props.isVisible ? '' : ' hidden');
  var instructionsButton = (!props.isVisible ? '' : 'hidden');
  return (
    <div className="header-buttons">
      <button onClick={props.onButtonClick} className={instructionsButton}>Instructions</button>
      <div className={classes}>
        <h3>How do I play?</h3>
        <p>This is a 'Hot-or-Cold' number-guessing game. Here's how it works: </p>
        <ul>
          <li>1. The computer picks a number between 1 and 100.</li>
          <li>2. The user enters guesses until they find the hidden number.</li>
          <li>3. For each guess the user will be presented with feedback indicating how close their guess is from the hidden number.</li>
        </ul>
        <h3>So, Are you ready?</h3>
        <button onClick={props.onButtonClick}>Got It!</button>
      </div> 
    </div>
  );
};

module.exports = Overlay;