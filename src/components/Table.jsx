import React from "react";
import { FiSearch } from "react-icons/fi";

const Table = () => {
  return (
    <>
      <div>
        <ul className="flex flex-row ">
          <li className="mx-4 mt-3 border-t-4  border-y-purple-500">All</li>
          <li className="mx-4 mt-3">Deposite</li>
          <li className="mx-4 mt-3">Withdraw</li>
          <li className="mx-4 mt-3">Trade</li>
          <li className="mx-4 mt-3">All</li>
          <li className="mx-4 mt-3">
            <div className="px-2 py-2 rounded-full flex bg-gray-100 items-center mx-[600px]">
              <FiSearch className="mr-2" />
              <input
                type="text"
                placeholder="Search by ID or destination"
                className="px-2 py-2 rounded-full bg-gray-100 focus:outline-none"
              />
            </div>
          </li>
        </ul>
        <div className="mt-8">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Date & Time</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tr className="border-t-2 mb-3 py-2">
              <td className="text-center mt-2"> HD82NA2H</td>
              <td className="text-center mt-2">
                <div>2022-06-09</div>
                <span className="text-sm text-gray-600">07:06 PM</span>
              </td>
              <td className="text-center mt-2">
                <div>INR Deposit</div>
                <span className="text-sm text-gray-600">E-Transfer</span>
              </td>
              <td className="text-center mt-2">+ ₹81,123.10</td>
              <td className="text-center mt-2">
                <button className="bg-blue-300 px-2 py-1 rounded-full mt-2">
                  {" "}
                  pending
                </button>
              </td>
            </tr>
            <hr />
            <tr className="border-t-2 mb-3">
              <td className="text-center mt-2"> HD82NA2H</td>
              <td className="text-center mt-2">
                <div>2022-06-09</div>
                <span className="text-sm text-gray-600">07:06 PM</span>
              </td>
              <td className="text-center mt-2">
                <div>INR Deposit</div>
                <span className="text-sm text-gray-600">E-Transfer</span>
              </td>
              <td className="text-center mt-2">+ ₹81,123.10</td>
              <td className="text-center mt-2">
                <button className="bg-yellow-300 px-2 py-1 rounded-full mt-2">
                  {" "}
                  processing
                </button>
              </td>
            </tr>
            <hr />
            <tr className="border-t-2 mb-3">
              <td className="text-center mt-2"> HD82NA2H</td>
              <td className="text-center mt-2">
                <div>2022-06-09</div>
                <span className="text-sm text-gray-600">07:06 PM</span>
              </td>
              <td className="text-center mt-2">
                <div>INR Deposit</div>
                <span className="text-sm text-gray-600">E-Transfer</span>
              </td>
              <td className="text-center mt-2">+ ₹81,123.10</td>
              <td className="text-center mt-2">
                <button className="bg-red-300 px-2 py-1 rounded-full mt-2">
                  {" "}
                  Cancelled
                </button>
              </td>
            </tr>
            <hr />
            <tr className="border-t-2 mb-3">
              <td className="text-center mt-2"> HD82NA2H</td>
              <td className="text-center mt-2">
                <div>2022-06-09</div>
                <span className="text-sm text-gray-600">07:06 PM</span>
              </td>
              <td className="text-center mt-2">
                <div>INR Deposit</div>
                <span className="text-sm text-gray-600">E-Transfer</span>
              </td>
              <td className="text-center mt-2">+ ₹81,123.10</td>
              <td className="text-center mt-2">
                <button className="bg-green-300 px-2 py-1 rounded-full mt-2">
                  {" "}
                  Completed
                </button>
              </td>
            </tr>
            <hr />
            <tr className="border-t-2 mb-3">
              <td className="text-center mt-2"> HD82NA2H</td>
              <td className="text-center mt-2">
                <div>2022-06-09</div>
                <span className="text-sm text-gray-600">07:06 PM</span>
              </td>
              <td className="text-center mt-2">
                <div>INR Deposit</div>
                <span className="text-sm text-gray-600">E-Transfer</span>
              </td>
              <td className="text-center mt-2">+ ₹81,123.10</td>
              <td className="text-center mt-2">
                <button className="bg-green-300 px-2 py-1 rounded-full mt-2">
                  {" "}
                  Completed
                </button>
              </td>
            </tr>
            <hr />
            <tr className="border-t-2 mb-3">
              <td className="text-center mt-2"> HD82NA2H</td>
              <td className="text-center mt-2">
                <div>2022-06-09</div>
                <span className="text-sm text-gray-600">07:06 PM</span>
              </td>
              <td className="text-center mt-2">
                <div>INR Deposit</div>
                <span className="text-sm text-gray-600">E-Transfer</span>
              </td>
              <td className="text-center mt-2">+ ₹81,123.10</td>
              <td className="text-center mt-2">
                <button className="bg-green-300 px-2 py-1 rounded-full mt-2">
                  {" "}
                  Completed
                </button>
              </td>
            </tr>
            <hr />
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
