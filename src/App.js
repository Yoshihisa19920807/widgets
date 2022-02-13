import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
// default import
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
// named import
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 300, pv: 2300, amt: 2300 }];

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'Because React is a favorite library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
]

export default () => {
  // const [stateName, setStateName] = useState(initialState); でgetter(stateName)とsetter(setStateName)を設定できる
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle Dropdown
      </button>
      {showDropdown ?
        <Dropdown
          label='Select a Color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      } */}
      <Translate />
      {/* <LineChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart> */}
    </div>
  );
};