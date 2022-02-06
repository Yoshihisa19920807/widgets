import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
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

export default () => {
  return (
    <div>
      <Accordion items={items} />
      <Search />
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