import React from "react";
import "./App.scss";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import moment from 'moment';
import * as Data from "./data";

const dateFormatter = (tickItem) => {
  var a = moment(tickItem, "YYYYMMDD");
  return a.format("MMM Do YYYY");
};

function App() {
  const data = Data[0].response.data;
  return (
    <div className="App">
      <h1>CB Dev Test</h1>
      <LineChart width={1000} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="LGD" data={data} stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="date" tickFormatter={dateFormatter} />
    <YAxis dataKey="LGD" />
    <Tooltip />
  </LineChart>
    </div>
  );
}

export default App;
