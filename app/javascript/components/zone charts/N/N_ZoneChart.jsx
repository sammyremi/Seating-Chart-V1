import React from "react";
import Desk from "../../Desk";
import { Link } from "react-router-dom";

const N_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="zoneN border-2 m-2 border-slate-400 rounded p-2 w-[500px] mx-auto my-2 grid grid-cols-7 grid-rows-11 gap-2.5 text-center">
        <div class="zonem rounded-sm grid place-items-center bg-[#e9f9fd] col-start-1 col-end-3 row-start-1 row-end-12">
          {/* Zone M */}
          <Link to={"/zones/zone_ms"}>
            <div>
              <p>Zone M</p>
              <svg
                fill="#000000"
                className="w-7 h-7 text-slate-500"
                viewBox="0 0 24 24"
                id="left-arrow"
                xmlns="http://www.w3.org/2000/svg"
                class="icon line"
              >
                <path
                  id="primary"
                  d="M21,12H3M6,9,3,12l3,3"
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                  }}
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        {/* Desk_id: #1-10 */}
        <div class="ocpd1  col-start-7 col-end-8 row-start-1 row-end-11 flex flex-col place-items-end">
          {/* occupied1 */}
          <div className="rotate-90">
            <Desk data={data[9]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[8]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[7]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[6]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[5]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[4]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[3]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[2]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[1]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[0]} />
          </div>
        </div>
        {/* Desk_id: #29-44 */}
        <div class="ocpd2  col-start-3 col-end-5 row-start-3 row-end-11 flex justify-center">
          {/* occupied2 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[43]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[42]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[41]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[40]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[39]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[38]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[37]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[36]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[28]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[29]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[30]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[31]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[32]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[33]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[34]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[35]} />
            </div>
          </div>
        </div>
        {/* Desk_id: #11-28 */}
        <div class="ocpd3  col-start-5 col-end-7 row-start-2 row-end-11 flex justify-center">
          {/* occupied3 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[27]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[26]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[25]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[24]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[23]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[22]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[21]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[20]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[19]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[10]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[11]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[12]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[13]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[14]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[15]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[16]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[17]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[18]} />
            </div>
          </div>
        </div>
        <div class="restroom rounded-sm grid place-content-center bg-lime-300 col-start-3 col-end-5 row-start-1 row-end-3">
          Restroom
        </div>
        <div class="Door flex self-end mb-[-10px] col-start-5 col-end-6 row-start-11 row-end-12">
          {/* door */}
          <svg
            className="w-7 h-7 text-slate-500"
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>door</title>
            <path d="M30 28.75h-2.779v-26.75c-0-0.69-0.56-1.25-1.25-1.25h-19.971c-0.69 0-1.25 0.56-1.25 1.25v0 26.75h-2.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM7.25 28.75v-25.5h17.471v25.5zM21.48 14.84c-0.138-0.057-0.299-0.089-0.467-0.089-0.349 0-0.665 0.141-0.894 0.37l0-0c-0.232 0.222-0.377 0.534-0.379 0.88v0c0.004 0.174 0.041 0.338 0.103 0.489l-0.003-0.009c0.066 0.157 0.161 0.291 0.279 0.4l0.001 0.001c0.219 0.234 0.529 0.38 0.874 0.38 0.002 0 0.005 0 0.007-0h-0c0.174-0.005 0.339-0.041 0.489-0.104l-0.009 0.003c0.3-0.143 0.537-0.379 0.676-0.671l0.004-0.009c0.058-0.142 0.094-0.306 0.1-0.477l0-0.002c-0.002-0.346-0.148-0.658-0.38-0.879l-0-0c-0.109-0.119-0.241-0.214-0.391-0.278l-0.007-0.003z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default N_ZoneChart;
