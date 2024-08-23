import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('tableData');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(data));
  }, [data]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== '') {
      setInputValue(value);
    } else if (value === '') {
      setInputValue('');
    }
  };

  const handleAddData = () => {
    if (inputValue !== '') {
      setData([...data, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddData();
    }
  };

  const handleClearLastEntry = () => {
    if (data.length > 0) {
      const newData = data.slice(0, -1);
      setData(newData);
    }
  };

  const handleClearAllData = () => {
    setData([]);
  };

  const renderTables = () => {
    if (data.length === 0) {
      return (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" className="text-center">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      );
    }

    const tables = [];
    for (let i = 0; i < Math.ceil(data.length / 10); i++) {
      tables.push(
        <table className="table table-bordered mt-3" key={i}>
          <thead>
            <tr>
              <th>#</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(i * 10, i * 10 + 10).map((value, index) => (
              <tr key={index}>
                <td>{i * 10 + index + 1}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return tables;
  };

  return (
    <div className="dashboard d-flex">
      {/* Input Section */}
      <div className="input-section p-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a number"
          className="form-control mb-3"
        />

        <div className="d-grid gap-2">
          <button onClick={handleAddData} className="btn btn-primary">
            Add to Table
          </button>
          <button onClick={handleClearLastEntry} className="btn btn-warning">
            Clear Last Entry
          </button>
          <button onClick={handleClearAllData} className="btn btn-danger">
            Clear All Data
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section p-3 d-flex flex-wrap">
        {renderTables()}
      </div>
    </div>
  );
};

export default Dashboard;
