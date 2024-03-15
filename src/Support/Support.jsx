import React from "react";
import Sidenav from "../components/SideNav";
import { IoMail } from "react-icons/io5";
import Header from "../components/Header";
import { AiFillMessage } from "react-icons/ai";

const Support = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidenav />
      </div>
      <div className="col-span-10 ">
        <Header name={"Transactions"} />
        <div>
          {" "}
          <div className="bg-gray-100 h-full flex flex-row">
            <div className="text-4xl ml-12 mt-12 pt-12 text-purple-500">
              <IoMail />
              <div className="text-2xl mt-8 ml-10 text-black">Contact Us</div>
              <p className="text-lg ml-10 mt-6">
                Have a question or just want to know more? Feel free to <br />
                reach out to us.
              </p>
            </div>
            <div className="bg-white w-full pt-12 mt-12 rounded-xl mr-10">
              <div className="pl-8 font-bold">
                <p>
                  You will receive response within 24 hours of time of submit.
                </p>
                <div className="flex flex-row justify-between mr-10 mt-6 mb-10">
                  <div className="text-lg">
                    {" "}
                    Name <br />
                    <input
                      type="text"
                      placeholder="  John"
                      id="placeholder"
                      className="mt-2"
                    />
                  </div>
                  <div className="text-lg">
                    {" "}
                    Surname <br />
                    <input
                      type="text"
                      placeholder="Author"
                      id="placeholder"
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between mr-10 mt-6 mb-10">
                  <div className="text-lg">
                    {" "}
                    Email <br />
                    <input
                      type="text"
                      placeholder="name@gmail.com"
                      id="placeholder"
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between mr-10 mt-6 mb-10">
                  <div className="text-lg">
                    {" "}
                    Message <br />
                    <textarea
                      type="text"
                      placeholder="Your Message"
                      id="placeholder"
                      className="mt-2 w-[600px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row mr-10 mt-6 mb-10 ">
                  <input type="checkbox" />
                  <p className="ml-10"> I agree with Terms & Conditions.</p>
                </div>
                <div className="px-4 pb-10 mb-10">
                  <button className="bg-gray-200 w-full py-3 rounded-2xl hover:bg-gray-300 ">
                    Send Message
                  </button>
                  <button className="bg-white w-full py-3 rounded-2xl mt-4">
                    Book a Meeting
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="bg-gray-100 h-full flex flex-row justify-around">
            <div className="text-3xl rounded-2xl border-black ml-6 mb-10 mt-32 px-10 bg-white py-4">
              <div className="text-purple-600">
                <AiFillMessage />
              </div>
              <h2 className="text-4xl mt-4"> Live Chat</h2>
              <p className="text-lg text-gray-500">
                Don’t have time to wait for the answer? Chat with us now.
              </p>
            </div>
            <div className="text-3xl rounded-2xl border-black ml-6 mb-10 mt-32 px-10 bg-gradient-to-r from-purple-500 to-purple-900 py-4">
              <div className="text-purple-600">
                <button className="bg-white px-2 py-1 rounded-full text-base">
                  Chatbot
                </button>
              </div>
              <h2 className="text-4xl mt-4 text-white"> Live Chat</h2>
              <p className="text-lg  text-white">
                Don’t have time to wait for the answer? Chat with us now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
