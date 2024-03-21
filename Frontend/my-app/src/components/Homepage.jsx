import React from "react";

export default function Homepage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">30 Days Revenue</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">Current Revenue / Current Output</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">30 Days Output</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Nurseries</h3>
          <p className="text-secondary">
            Name:
            <br />
            Active Batches:
            <br />
            Number of Plants:
            <br />
            Germinated PLants:
            <br />
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Farms</h3>
        </div>
        <div className="card-body">
          <p className="text-secondary">
            Name:
            <br />
            Area(sq.ft):
            <br />
            Structure:
            <br />
            Last Output:
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
