import { Contact, Shield } from "lucide-react";
import React from "react";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <Contact />
            <h1>Profile</h1>
          </div>
          <div
            onClick={() => navigate("/student/update")}
            className="flex space-x-2 cursor-pointer">
            <Shield />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl  ">
          <div className="absolute left-[50%] top-[-10%] ">
            <img src={user.result.avatar} className="w-10 h-10 rounded-full object-cover" />
          </div>
          <div className="overflow-y-scroll h-[27rem]">
            <div className="flex py-10 ml-10 space-x-40 ">
              <div className="flex flex-col space-y-10">
                <Data label="Name" value={user.result.name} />
                <Data label="Email" value={user.result.email} />
                <Data label="Username" value={user.result.username} />
                <Data label="Department" value={user.result.department} />
                <Data label="Father's Name" value={user.result.fatherName} />
                <Data label="Mother's Name" value={user.result.motherName} />
              </div>
              <div className="flex flex-col space-y-10 ">
                <Data label="DOB" value={user.result.dob} />
                <Data label="Year" value={user.result.year} />
                <Data
                  label="Contact Number"
                  value={user.result.contactNumber}
                />
                <Data label="Section" value={user.result.section} />
                <Data
                  label="Father's Contact Number"
                  value={user.result.fatherContactNumber}
                />
                <Data label="Batch" value={user.result.batch} />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
