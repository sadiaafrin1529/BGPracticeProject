import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    fetch('http://10.10.83.41:8088/WeatherForecast')
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w3-container">
      <h2>Basic Table</h2>
    

      <table className="w3-table w3-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>TemperatureC</th>
            <th>TemperatureF</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((alldata) => (
            <tr key={alldata.date}>
              <td>{alldata.date}</td>
              <td>{alldata.temperatureC}</td>
              <td>{alldata.temperatureF}</td>
              <td>{alldata.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
