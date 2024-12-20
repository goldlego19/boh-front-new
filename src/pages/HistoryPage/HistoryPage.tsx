import { IconButton } from "@atlaskit/button/new";
import ArrowLeftIcon from "@atlaskit/icon/core/arrow-left";
import SearchIcon from "@atlaskit/icon/core/search";
import { token } from "@atlaskit/tokens";
import HistoryTable from "../../components/historyTable";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // You can handle search submission logic here
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="h-screen w-screen p-[5rem]">
      <h1 className="text-4xl text-lightBlue font-sf-pro font-bold mb-10">
        History
      </h1>
      <div className="flex justify-between mb-5">
        <div className="flex items-center space-x-3 border-2 border-[#8080808C] rounded-lg p-2">
          <input
            type="text"
            placeholder="Search history..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-96 bg-transparent border-none outline-none"
          />

          <button onClick={handleSearchSubmit}>
            <SearchIcon label=""></SearchIcon>
          </button>
        </div>
        <Link to="/accounts">
          <div className="flex items-center">
            <button className="border-2 border-[#8080808C] px-5 py-2 rounded-lg text-headerText flex items-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-300">
              <ArrowLeftIcon label={""} />
            </button>
          </div>
        </Link>
      </div>
      <br />
      <HistoryTable />
    </div>
  );
};

export default HistoryPage;
