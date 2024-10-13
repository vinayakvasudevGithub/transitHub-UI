import React from "react";

const LeftSideBarForBus = () => {
  return (
    <div className="hidden lg:block col-span-3  ">
      <div className="bg-green-300 ml-12 w-[15rem]">
        <div>
          <p>Filter Search</p>
          <div>
            <p>Airlines</p>
            <div>airindia</div>
          </div>
          <p>Filter Search</p>
          <div>
            <p>Airlines</p>
            <div>airindia</div>
          </div>
          <p>Filter Search</p>
          <div>
            <p>Airlines</p>
            <div>airindia</div>
          </div>
          <p>Filter Search</p>
          <div>
            <p>Airlines</p>
            <div>airindia</div>
          </div>
        </div>

        <div className="bg-blue-300 mt-10">
          <div>Cabin</div>
        </div>

        <div>
          <p>Stops</p>
          <div className="grid sm:grid-cols-2">
            <div>Any</div>
            <div>Non-Stop</div>
            <div>1 Stop</div>
            <div>2 Stop</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarForBus;
