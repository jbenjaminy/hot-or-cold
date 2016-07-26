var React = require('react');

var Overlay = function (props) {
  var classes = 'instructions' + (props.isVisible ? '' : ' hidden');
  return (
    <div>
      <button onClick={props.onButtonClick}>Instructions</button>
      <div className={classes}>
        <h3>What do I do?</h3>
        <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
        <ul>
          <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
          <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
          <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
        </ul>
        <p>So, Are you ready?</p>
        <button onClick={props.onButtonClick}>Got It!</button>
      </div> 
    </div>
  );
};

module.exports = Overlay;