import React from 'react';

export default function Input(props) {
  const {
    type,
    title,
    id,
    name,
    classe,
    placeholder,
    value,
    onchange,
    min,
    max,
    step,
  } = props;

  const handleValue = (event) => {
    let newValue = event.target.value;
    onchange(newValue);
  };

  return (
    <>
      <div className={classe}>
        <input
          placeholder={placeholder}
          key={id}
          id={id}
          name={name}
          type={type}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleValue}
        />
        <label className="active" htmlFor={id}>
          {title}
        </label>
      </div>
    </>
  );
}
