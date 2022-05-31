import React from 'react';
import './DoubleInput.css';

function DoubleInput(props) {
  return (
    <div className="inputBox">
      <input
        className="firstInput"
        type="text"
        name="firstInput"
        placeholder={props.texto1}
      />
      <textarea
        className="secondInput"
        name="secondInput"
        rows="2"
        cols="50"
        placeholder={props.texto2}
      />
      <button className="sendBtn" type="submit">
        <img src={props.image} alt="" />
      </button>
    </div>
  );
}

export { DoubleInput };
