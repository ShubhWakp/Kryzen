import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const elementsPerPage = 2; // Number of elements per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/data");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // number of pages
  const totalPages = Math.ceil(data.length / elementsPerPage);

  // index range for current page
  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // elements for the current page
  const currentElements = data.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        <div class=" table-responsive">
          <div className="card-header py-2" style={{ display: "block" }}>
            <div className="float-left">
              <h3 className="card-title">Price Watcher</h3>
              <p className="card-subtitle p-0 m-0">
                Find price of different comodities:
              </p>
            </div>
          </div>

          <table class="table table-bordered table table-vcenter">
            <thead>
              <tr>
                <th>Product</th>
                <th>Product Name</th>
                <th>Wholesale Price</th>
                <th>Retail Price</th>
                <th>Weeks High</th>
                <th>Weeks Low</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {currentElements.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <Link to="/pricewatcher1" class="text-reset">
                    <td>{item.productname}</td>
                  </Link>
                  <td>{item.wholesaleprice}</td>
                  <td>{item.retailprice}</td>
                  <td>{item.weekshigh}</td>
                  <td>{item.weekslow}</td>
                  <td>{item.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <button
                class="btn btn-azure "
                disabled={currentPage === 1}
                onClick={goToPreviousPage}
              >
                Previous
              </button>

              <span style={{ margin: "0 10px" }}></span>

              <button
                class="btn btn-red  "
                disabled={currentPage === totalPages}
                onClick={goToNextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Previous Next Buttons, Disclosure, and Footer */}
    </>
  );
};

export default Table;
