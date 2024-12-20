import React from "react";
import Button from "@atlaskit/button/new";
import { token } from "@atlaskit/tokens";
import ArrowRightIcon from "@atlaskit/icon/core/arrow-right";

interface Account {
  id: string;
  name: string;
  date: string;
  link: string;
}

const accounts: Account[] = [
  {
    id: "1",
    name: "Pk Cuzzons",
    date: "29-07-24",
    link: "https://www.confluennce.com/search?q=links+&sca_esv=fec1343659b7b2ee&rlz=1C5CHFA_",
  },
  {
    id: "2",
    name: "Onpoint",
    date: "29-07-24",
    link: "https://www.confluennce.com/search?q=links+&sca_esv=fec1343659b7b2ee&rlz=1C5CHFA_",
  },
  {
    id: "3",
    name: "F1",
    date: "29-07-24",
    link: "https://www.confluennce.com/search?q=links+&sca_esv=fec1343659b7b2ee&rlz=1C5CHFA_",
  },
  {
    id: "4",
    name: "Ecobank",
    date: "29-07-24",
    link: "https://www.confluennce.com/search?q=links+&sca_esv=fec1343659b7b2ee&rlz=1C5CHFA_",
  },
];

const HistoryTable = () => {
  return (
    <div className="overflow-x-auto font-sf-pro">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-headerBlue">
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Name
            </th>
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Date
            </th>
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Link
            </th>
            <th className="px-8 py-4 text-headerText font-semibold">Data</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr
              key={account.id}
              className="border-b text-gray-400 hover:bg-neutral"
            >
              <td className="px-8 py-6 text-headerText">{account.name}</td>
              <td className="px-8 py-6">{account.date}</td>
              <td className="px-8 py-6 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap text-headerText">
                <a
                  href={account.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {account.link}
                </a>
              </td>
              <td className="px-8 py-6 flex justify-center">
                <div className="w-1/2 border-2 rounded-lg">
                  <Button
                    shouldFitContainer
                    iconAfter={(iconProps) => (
                      <ArrowRightIcon
                        {...iconProps}
                        color={token("color.text", "#0c66e4")}
                      />
                    )}
                    appearance="default"
                  >
                    <span className="font-sf-pro font-bold">
                      Generate Report
                    </span>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
