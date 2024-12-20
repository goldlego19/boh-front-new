import { IconButton } from "@atlaskit/button/new";
import ArrowRightIcon from "@atlaskit/icon/core/arrow-right";
import SearchIcon from "@atlaskit/icon/core/search";
import { token } from "@atlaskit/tokens";
import AccountsTable from "../../components/accountsTable";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
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
        Accounts
      </h1>
      <div className="flex justify-between mb-5">
        <div className="flex items-center space-x-3 border-2 border-[#8080808C] rounded-lg p-2">
          <input
            type="text"
            placeholder="Search accounts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-96  bg-transparent border-none outline-none"
          />

          <button onClick={handleSearchSubmit}>
            <SearchIcon label=""></SearchIcon>
          </button>
        </div>
        <div className="flex items-center">
          <p className="mr-5">History</p>
          <Link to="/history">
            <div className="border-2 border-[#8080808C] rounded-lg">
              <IconButton
                icon={(iconProps) => (
                  <ArrowRightIcon
                    {...iconProps}
                    color={token("color.text", "#0c66e4")}
                  />
                )}
                label="Add to favorites"
              />
            </div>
          </Link>
        </div>
      </div>
      <br />
      {/* <table>
        <th>Name</th>
        <th>Key</th>
        <th>Lead</th>
        <th>Category</th>
        <th>Status</th>
        <th>Data</th>
        
      </table> */}
      <AccountsTable />
    </div>
  );
};

export default AccountPage;
