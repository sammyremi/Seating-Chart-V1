import React from "react";

const K_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="Zonek p-2.5 grid grid-cols-7 grid-rows-9 gap-2.5 text-center">
        <div class="occupied1 bg-cyan-300 col-start-5 col-end-7 row-start-2 row-end-9">
          occupied1
        </div>
        <div class="restroom1 bg-lime-500 col-start-6 col-end-8 row-start-1 row-end-2">
          restroom1
        </div>
        <div class="zonel bg-orange-300 col-start-7 col-end-8 row-start-2 row-end-9">
          Zone L
        </div>
        <div class="server bg-gray-300 col-start-1 col-end-4 row-start-8 row-end-10">
          server
        </div>
        <div class="occupied2 bg-cyan-300 col-start-2 col-end-4 row-start-3 row-end-8">
          occupied2
        </div>
        <div class="door bg-pink-300 col-start-6 col-end-7 row-start-9 row-end-10">
          door
        </div>
      </div>
    </div>
  );
};

export default K_ZoneChart;
