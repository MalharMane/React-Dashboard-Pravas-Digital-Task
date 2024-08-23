import React, { useState, useEffect } from 'react';

const Page2 = () => {
  const [page2Data, setPage2Data] = useState(() => {
    const savedPage2Data = localStorage.getItem('page2TableData');
    return savedPage2Data ? JSON.parse(savedPage2Data) : [];
  });

  useEffect(() => {
    localStorage.setItem('page2TableData', JSON.stringify(page2Data));
  }, [page2Data]);

  const handleClearLastEntry = () => {
    if (page2Data.length > 0) {
      const newPage2Data = page2Data.slice(0, -1);
      setPage2Data(newPage2Data);
    }
  };

  const handleClearAllData = () => {
    setPage2Data([]);
  };

  return (
    <div className="page2 d-flex flex-column align-items-center p-3">
      {/* Sticky Button Section */}
      <div className="sticky-buttons w-100 mb-3">
        <div className="justify-content-center gap-2 sticky-top">
          <button onClick={handleClearLastEntry} className="btn btn-warning">
            Clear Last Entry
          </button>
          <button onClick={handleClearAllData} className="btn btn-danger">
            Clear All Data
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section p-3 w-100">
        <div className="table-container">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {page2Data.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center">No Data Available</td>
                </tr>
              ) : (
                page2Data.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page2;
