import React from "react";
import SelectedListItem from "../components/SelectedListItem";

function Dashboard() {
  return (
    <div className="flex flex-row w-screen">
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between">
          <h1 className="py-5 pl-4 font-bold text-3xl">SpeyPay</h1>
        </div>
        <SelectedListItem></SelectedListItem>
      </div>
      <div className="flex flex-col w-3/5"></div>
    </div>
  );
}

export default Dashboard;
