import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/AppContext';

const TimePicker = () => {

  const [newTimer, setNewTimer] = useState({
    focus: 25,
    rest: 5,
    type: 'focus',
  });

  const { updateTimerConfig } = useContext(AppContext);

  const handleChange = ({target: { value, name }}) => {
    switch (name) {
      case 'focus':
        setNewTimer({
          ...newTimer,
          focus: parseInt(value)
        })
        break;
      case 'rest':
        setNewTimer({
          ...newTimer,
          rest: parseInt(value)
        })
        break;
    default:
        break;
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    updateTimerConfig(newTimer)
  };

  const { focus, rest } = newTimer;
  return (
    <section className="form-section">
      <form noValidate onSubmit={ handleSubmit }>
        <div className="config-inputs-container">
          <label>
            <div>Focus</div>
            <input
              className="config-input"
              name="focus"
              type="number"
              value={ focus }
              onChange={ handleChange }
            />
          </label>
          <label>
            <div>Rest</div>
            <input
              className="config-input"
              name="rest"
              type="number"
              value={ rest }
              onChange={ handleChange }
            />
          </label>
        </div>
          <button type="submit">Set Timer</button>
      </form>
    </section>
  );
};

TimePicker.propTypes = {
  AppContext: PropTypes.shape({
    updateTimerConfig: PropTypes.func,
  }),
};

export default TimePicker;
