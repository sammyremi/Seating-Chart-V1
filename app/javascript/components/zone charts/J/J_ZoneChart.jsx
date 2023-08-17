import React from "react";

const J_ZoneChart = () => {
  return (
    <div>
      <div class="ZoneJ p-2.5 grid grid-cols-7 grid-rows-8 gap-2.5 text-center">
        <div class="zoneR bg-orange-300 col-start-1 col-end-3 row-start-1 row-end-9">
          Zone R
        </div>
        <div class="occupied1 bg-cyan-300 col-start-3 col-end-8 row-start-1 row-end-2">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-3 col-end-8 row-start-3 row-end-5">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-6 col-end-8 row-start-6 row-end-8">
          occupied3
        </div>
        <div class="door bg-pink-300 col-start-4 col-end-5 row-start-8 row-end-9">
          door
        </div>
      </div>
    </div>
  );
};

export default J_ZoneChart;
