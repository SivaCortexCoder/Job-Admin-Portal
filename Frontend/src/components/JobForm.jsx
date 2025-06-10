import React, { useState } from "react";
import forward from "../assets/images/fast-forward.png";
import forward1 from "../assets/images/fast-forward1.png";

const JobForm = ({ closeForm, handleData, handleSubmit }) => {
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [deadline, setDeadline] = useState("");

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <h1 className="font-semibold text-2xl">Create Job Opening</h1>
        <p
          onClick={closeForm}
          className="font-bold text-xl cursor-pointer hover:text-gray-600"
        >
          ×
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col focus-within:text-black text-[#636363]">
            <label
              htmlFor="jobTitle"
              className="block font-bold mb-1 transition-colors duration-200"
            >
              Job Title
            </label>
            <input
              onChange={(e) => handleData(e.target.name, e.target.value)}
              className="border-1 border-[#BCBCBC] placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4 py-3 w-full font-semibold"
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Full Stack Developer"
              required
            />
          </div>

          <div className="flex flex-col focus-within:text-black text-[#636363]">
            <label
              htmlFor="CompanyName"
              className="block font-bold mb-1 transition-colors duration-200"
            >
              Company Name
            </label>
            <input
              className="border-1 border-[#BCBCBC] placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4 py-3 w-full font-semibold"
              type="text"
              name="jobLogo"
              onChange={(e) => handleData(e.target.name, e.target.value)}
              id="CompanyName"
              placeholder="Amazon, Microsoft, Swiggy"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col focus-within:text-black text-[#636363]">
            <label
              htmlFor="jobLocation"
              className="block font-bold mb-1 transition-colors duration-200"
            >
              Location
            </label>
            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                handleData(e.target.name, e.target.value);
              }}
              id="jobLocation"
              name="type"
              required
              className={`border-1 border-[#BCBCBC] rounded-lg px-4 py-3 w-full ${
                location === ""
                  ? "text-[#BCBCBC] font-medium text-sm"
                  : "text-black font-semibold"
              }`}
            >
              <option value="">Choose Preferred Location</option>
              <option value="Bangalore" className="font-medium text-black">Bangalore</option>
              <option value="Chennai" className="font-medium text-black">Chennai</option>
              <option value="Hyderabad" className="font-medium text-black">Hyderabad</option>
            </select>
          </div>

          <div className="flex flex-col focus-within:text-black text-[#636363]">
            <label
              htmlFor="jobType"
              className="block font-bold mb-1 transition-colors duration-200"
            >
              Job Type
            </label>
            <select
              value={jobType}
              onChange={(e) => {
                setJobType(e.target.value);
                handleData(e.target.name, e.target.value);
              }}
              id="jobType"
              name="experience"
              required
              className={`border-1 border-[#BCBCBC] rounded-lg px-4 py-3 w-full ${
                jobType === ""
                  ? "text-[#BCBCBC] font-medium text-sm"
                  : "text-black font-semibold"
              }`}
            >
              {/* <option value="">Select Type</option> */}
              <option value="Full-Time" className="font-medium text-black">FullTime</option>
              <option value="Part-Time" className="font-medium text-black">Part-time</option>
              <option value="Internship" className="font-medium text-black">Internship</option>
              <option value="Contract" className="font-medium text-black">Contract</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col focus-within:text-black text-[#636363]">
            <label
              htmlFor="minSalary"
              className="block font-bold mb-1 transition-colors duration-200"
            >
              Salary Range
            </label>
            <div className="flex gap-2">
              <input
                onChange={(e) => handleData(e.target.name, e.target.value)}
                type="text"
                required
                name="minSalary"
                placeholder="⇅ ₹0"
                className="border-1 border-[#BCBCBC] placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4 py-3 w-full font-semibold"
              />
              <input
                onChange={(e) => handleData(e.target.name, e.target.value)}
                type="text"
                name="maxSalary"
                placeholder="⇅ ₹12,00,000"
                className="border-1 border-[#BCBCBC] placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4 py-3 w-full font-semibold"
              />
            </div>
          </div>

          <div className="flex flex-col focus-within:text-black text-[#636363]">
            <label
              htmlFor="deadline"
              className="block font-bold mb-1 transition-colors duration-200"
            >
              Application Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => {
                setDeadline(e.target.value);
                handleData(e.target.name, e.target.value);
              }}
              name="date"
              id="deadline"
              required
              className={`border-1 border-[#BCBCBC] placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4 py-3 w-full font-semibold ${
                deadline === "" ? "text-[#BCBCBC]" : "text-black"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col focus-within:text-black text-[#636363]">
          <label
            htmlFor="jobDescription"
            className="block font-bold mb-1 transition-colors duration-200"
          >
            Job Description
          </label>
          <textarea
            onChange={(e) => handleData(e.target.name, e.target.value)}
            className="border-1 border-[#BCBCBC] placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4 py-3 w-full font-semibold"
            id="jobDescription"
            required
            rows="3"
            name="jobDescription"
            placeholder="Please Share a description to let the candidate know more about the job role"
          />
        </div>

        <div className="flex justify-between gap-3 pt-2">
          <button
            type="button"
            className="font-medium flex items-center gap-2 rounded-lg px-1.5 py-2 md:px-6 cursor-pointer border-2 border-black hover:bg-gray-50 transition-colors text-sm"
          >
            Save Draft <img src={forward} className="w-2.5" alt="" />
          </button>
          <button
            type="submit"
            className="font-medium flex items-center gap-2 bg-[#00aaff] cursor-pointer rounded-lg px-1.5 py-2 md:px-6 text-white hover:bg-[#0099ee] transition-colors text-sm"
          >
            Publish <img src={forward1} className="w-2.5 rotate-270" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
