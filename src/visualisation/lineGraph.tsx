import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const GetLinePlot = (
  data: {
    address: string;
    number: string;
    code: string;
    city: string;
    expenditure: {
      year: number;
      "With Improvement": number;
      "Without Improvement": number;
    }[];
  }[]
) => {
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const reqData = data.find((obj) => {
    return (
      obj.address === address.toLowerCase() &&
      obj.number === number &&
      obj.code === code &&
      obj.city === city.toLowerCase()
    );
  });
  return (
    <div className="inputContainer">
      <div className="input">
        <input
          type="text"
          placeholder="Address"
          id="address"
          name="address"
          onChange={handleChangeAddress}
          value={address}
        />
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="House no."
          id="number"
          name="number"
          onChange={handleChangeNumber}
          value={number}
        />
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Postal code"
          id="code"
          name="code"
          onChange={handleChangeCode}
          value={code}
        />
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="City"
          id="city"
          name="city"
          onChange={handleChangeCity}
          value={city}
        />
      </div>
      <div>
        <div className="title">Your energy improvement</div>
        <div className="text">
          For your appartment Gothersgade 3, 1123 København K. We recommend:
          Isolating the outer walls with 300 mm of insulation. This improvement
          will cost 485.000 kr. and you will be eligible for a 40.000 kr subsidy
          from the government. Below you can see your estimated savings for your
          appartment over the coming years. Your energy improvement investment
          will break even within seven years.
        </div>
        <div className="plot">
          <LineChart
            width={1052}
            height={269}
            data={reqData?.expenditure}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" stroke="#A2A3A5" />
            <YAxis
              label={{
                value: "Heating expenditure [kr. in k.]",
                angle: -90,
                position: "center",
                dx: -40,
                fill: "#A2A3A5",
              }}
              stroke="#A2A3A5"
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Without Improvement"
              stroke="#A2A3A5"
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="With Improvement"
              stroke="#7A9C6C"
              strokeWidth={4}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
};
