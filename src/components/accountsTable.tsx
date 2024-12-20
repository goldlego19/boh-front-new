import ReportFormModal from "./reportFormModal";
import { Account, categoryType, statusType } from "../@Global/@types";

const accounts: Account[] = [
  {
    id: "1",
    name: "Pk Cuzzons",
    key: "29-07-24",
    lead: "Petr Kupka",
    category: categoryType.avail,
    status: statusType.sync,
  },
  {
    id: "2",
    name: "Onpoint",
    key: "29-07-24",
    lead: "Benjamin Okutu",
    category: categoryType.error,
    status: statusType.navail,
  },
  {
    id: "3",
    name: "F1",
    key: "29-07-24",
    lead: "Samuel Desu",
    category: categoryType.avail,
    status: statusType.sync,
  },
  {
    id: "4",
    name: "Ecobank",
    key: "29-07-24",
    lead: "Calvin Anim",
    category: categoryType.avail,
    status: statusType.sync,
  },
];

const AccountsTable = () => {
  return (
    <div className="overflow-x-auto font-sf-pro ">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-headerBlue">
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Name
            </th>
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Key
            </th>
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Lead
            </th>
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Category
            </th>
            <th className="px-8 py-4 text-left text-headerText font-semibold">
              Status
            </th>
            <th className="px-8 py-4  text-headerText font-semibold">Data</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr
              key={account.id}
              className={`border-b ${
                account.category !== categoryType.avail
                  ? "text-gray-400"
                  : "hover:bg-neutral"
              }`}
            >
              <td className="px-8 py-6 text-headerText">{account.name}</td>
              <td className="px-8 py-6">{account.key}</td>
              <td className="px-8 py-6">{account.lead}</td>
              <td className="px-8 py-6 flex items-center space-x-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    account.category === categoryType.avail
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></span>
                <span
                  className={`${
                    account.category === categoryType.avail
                      ? ""
                      : "text-red-500"
                  }`}
                >
                  {account.category}
                </span>
              </td>
              <td
                className={`px-8 py-6 ${
                  account.status === statusType.navail
                    ? "text-red-500 font-medium"
                    : "text-gray-400 font-medium"
                }`}
              >
                {account.status}
              </td>
              <td className="px-8 py-6 flex justify-center">
                <div
                  className={`w-1/2 border-2 ${
                    account.category === categoryType.error
                      ? ""
                      : "border-[#8080808C] text-[#808080]"
                  } rounded-lg`}
                >
                  <ReportFormModal account={account} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable;
