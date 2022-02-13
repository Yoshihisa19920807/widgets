import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      'click',
      (event) => {
        if (ref.current.contains(event.target)) {
          return
        }
        // console.log(event.target)
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option) => {

    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key= {option.value}
        onClick={() =>onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
      )
  });

  console.log(ref.current)

  return (
    <div
      ref={ref}
      className='ui form'
    >
      <div className='field'>
        <label className='label'>Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() =>setOpen(!open)}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
  // return <h1>Dropdown</h1>;
};

export default Dropdown;
