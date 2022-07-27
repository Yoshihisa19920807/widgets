import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    // Whenever you return a function inside useEffect, it runs when the DOM is to be cleaned up (is equal to componentWillUnmount)
    return () => {
      console.log("remove_listner")
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
    // this empty array sets no value to be referred to as an indicator of when to run useEffect
  }, []);


  const renderedOptions = options.map((option) => {

    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key= {option.value}
        onClick={() =>{
          console.log("option")
          console.log(option)
          onSelectedChange(option)
        }}
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
        <label className='label'>{label}</label>
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
