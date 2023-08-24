import React from "react";
import floor from "../../images/2nd_Floor.png";
import { Link } from "react-router-dom";

const Floor2 = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="basis-3/4 px-4">
          <img className="h-5/6 w-full bg-sky-100" src={floor} alt="pic" />
        </div>
        <div className="basis-1/4 px-4 text-center h-fit">
          <Link to={"/zones"}>
            <button
              type="button"
              className="mb-16 drop-shadow-xl text-black w-full bg-[#E9F9FD] rounded hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2"
            >
              Zones
            </button>
          </Link>
          <Link to={"/zones/zone_ds"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ffffcc] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone D
            </button>
          </Link>
          <Link to={"/zones/zone_es"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ffcce6] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone E
            </button>
          </Link>
          <Link to={"/zones/zone_hs"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#99ff99] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone H
            </button>
          </Link>
          <Link to={"/zones/zone_is"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#66b2ff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone I
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Floor2;
