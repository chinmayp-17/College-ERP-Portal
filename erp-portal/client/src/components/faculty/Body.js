import { Home, Wrench, User, Users, BookOpen, CornerUpLeft } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import Notice from "../notices/Notice";
import ShowNotice from "../notices/ShowNotice";
const Body = () => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openNotice, setOpenNotice] = useState({});
  const notices = useSelector((state) => state.admin.notices.result);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <Home />
          <h1>Dashboard</h1>
        </div>
        <div className="flex flex-col mr-5 space-y-4 overflow-y-auto">
          <div className="bg-white h-[8rem] rounded-xl shadow-lg grid grid-cols-4 justify-between px-8 items-center space-x-4">
            <div className="flex items-center space-x-4 border-r-2">
              <Wrench
                className="rounded-full py-2 bg-orange-300"
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1>Class</h1>
                <h2 className="text-2xl font-bold">12</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r-2">
              <User
                className="rounded-full py-2 bg-orange-300"
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1>Student</h1>
                <h2 className="text-2xl font-bold">10</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r-2">
              <Users
                className="rounded-full py-2 bg-orange-300"
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1>Subject</h1>
                <h2 className="text-2xl font-bold">5</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 ">
              <BookOpen
                className="rounded-full py-2 bg-orange-300"
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1>Test</h1>
                <h2 className="text-2xl font-bold">3</h2>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-4 w-2/6">
              <div className="bg-white h-[17rem] rounded-xl shadow-lg">
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>
            <div className="bg-white h-[17rem] w-full rounded-xl shadow-lg flex flex-col  pt-3">
              <div className="flex px-3">
                {open && (
                  <CornerUpLeft
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  />
                )}
                <h1 className="font-bold text-xl w-full text-center">
                  Notices
                </h1>
              </div>
              <div className="mx-5 mt-5 space-y-3 overflow-y-auto h-[12rem]">
                {!open ? (
                  notices?.map((notice, idx) => (
                    <div
                      onClick={() => {
                        setOpen(true);
                        setOpenNotice(notice);
                      }}
                      className="">
                      <Notice idx={idx} notice={notice} notFor="student" />
                    </div>
                  ))
                ) : (
                  <ShowNotice notice={openNotice} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
