

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('tableData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [page2Data, setPage2Data] = useState(() => {
    const savedPage2Data = localStorage.getItem('page2TableData');
    return savedPage2Data ? JSON.parse(savedPage2Data) : [];
  });

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem('page2TableData', JSON.stringify(page2Data));
  }, [page2Data]);

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
      if (data.length < 10) {
        setData([...data, inputValue]);
      } else {
        const [firstValue, ...restData] = data;
        setPage2Data([...page2Data, firstValue]);
        setData([...restData, inputValue]);
      }
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
      <div className="table-section p-3">
        <div className="table-container">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data[index] || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


