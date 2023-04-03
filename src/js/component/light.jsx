import React from "react";

//include images into your bundle

//create your first component
const Light = ({ Glow }) => {
    return (
        <div className="container-fluid" id="main">
          <div className="d-flex justify-content-center" id="board">
            <div className="row">
              <div className="col-12 rounded-5 card mt-0" id="holder">
                <div className="card-body align-items-center justify-content-center mb-1">
                  <div
                    className={"ratio ratio-1x1 light mb-3 " + Glow("red")}
                    id="red"
                  ></div>
                  <div
                    className={"ratio ratio-1x1 light mb-3 " + Glow("yellow")}
                    id="yellow"
                  ></div>
                  <div
                    className={"ratio ratio-1x1 light mb-3 " + Glow("green")}
                    id="green"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Light;
