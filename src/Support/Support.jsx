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
      <div className="col-span-10">
        <Header name={"Transactions"} />
        <div className="bg-gray-100 h-full flex flex-col lg:flex-row lg:items-start">
          <div className="text-4xl ml-6 mt-8 pt-8 text-purple-500 lg:ml-12 lg:mt-12 lg:pt-12 lg:text-5xl">
            <IoMail />
            <div className="text-2xl mt-4 ml-4 text-black lg:ml-10 lg:text-3xl">
              Contact Us
            </div>
            <p className="text-lg ml-4 mt-4 lg:mt-6">
              Have a question or just want to know more? Feel free to <br />
              reach out to us.
            </p>
          </div>
          <div className="bg-white w-full lg:w-[70%] pt-8 mt-8 lg:mt-12 rounded-xl mr-6 lg:mr-10">
            <div className="pl-8 lg:pl-12 font-bold">
              <p className="text-lg lg:text-xl">
                You will receive a response within 24 hours of submitting.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2 lg:gap-6">
                <div className="text-lg">
                  Name <br />
                  <input
                    type="text"
                    placeholder="John"
                    id="placeholder"
                    className="mt-2 py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="text-lg">
                  Surname <br />
                  <input
                    type="text"
                    placeholder="Author"
                    id="placeholder"
                    className="mt-2 py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="text-lg">
                Email <br />
                <input
                  type="text"
                  placeholder="name@gmail.com"
                  id="placeholder"
                  className="mt-2 py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="text-lg">
                Message <br />
                <textarea
                  type="text"
                  placeholder="Your Message"
                  id="placeholder"
                  className="mt-2 py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 h-32 resize-none"
                />
              </div>
              <div className="flex items-center mt-6">
                <input type="checkbox" />
                <p className="ml-3">I agree with Terms & Conditions.</p>
              </div>
              <div className="px-4 mt-6">
                <button className="bg-gray-200 w-full py-3 rounded-2xl hover:bg-gray-300">
                  Send Message
                </button>
                <button className="bg-white w-full py-3 rounded-2xl mt-4">
                  Book a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start lg:mt-10">
          <div className="text-3xl rounded-2xl border-black ml-6 mb-10 mt-12 px-8 bg-white py-4 lg:ml-10 lg:mb-0 lg:mt-32 lg:px-10">
            <div className="text-purple-600">
              <AiFillMessage />
            </div>
            <h2 className="text-4xl mt-4">Live Chat</h2>
            <p className="text-lg text-gray-500">
              Don’t have time to wait for the answer? Chat with us now.
            </p>
          </div>
          <div className="text-3xl rounded-2xl border-black ml-6 mb-10 mt-12 px-8 bg-gradient-to-r from-purple-500 to-purple-900 py-4 lg:ml-10 lg:mb-0 lg:mt-32 lg:px-10">
            <div className="text-purple-600">
              <button className="bg-white px-3 py-1 rounded-full text-base">
                Chatbot
              </button>
            </div>
            <h2 className="text-4xl mt-4 text-white">Live Chat</h2>
            <p className="text-lg text-white">
              Don’t have time to wait for the answer? Chat with us now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
