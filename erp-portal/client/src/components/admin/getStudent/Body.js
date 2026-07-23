import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../../redux/actions/adminActions";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import { SET_ERRORS } from "../../../redux/actionTypes";
const Body = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const departments = useSelector((state) => state.admin.allDepartment);
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);
  const [value, setValue] = useState({
    department: "",
    year: "",
  });
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
    }
  }, [store.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(true);
    setLoading(true);
    setError({});
    dispatch(getStudent(value));
  };
  const students = useSelector((state) => state.admin.students.result);

  useEffect(() => {
    if (students?.length !== 0) setLoading(false);
  }, [students]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <User />
          <h1>All Students</h1>
        </div>
        <div className=" mr-10 bg-white grid grid-cols-4 rounded-xl pt-6 pl-6 h-[29.5rem]">
          <form
            className="flex flex-col space-y-2 col-span-1"
            onSubmit={handleSubmit}>
            <label htmlFor="department">Department</label>
            <select
              required
              
              
              
              value={value.department}
              className={classes.adminInput} onChange={(e) =>
                setValue({ ...value, department: e.target.value })
              }>
              <option value="">None</option>
              {departments?.map((dp, idx) => (
                <option key={idx} value={dp.department}>
                  {dp.department}
                </option>
              ))}
            </select>
            <label htmlFor="year">Year</label>
            <select
              required
              
              
              
              value={value.year}
              className={classes.adminInput} onChange={(e) => setValue({ ...value, year: e.target.value })}>
              <option value="">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button
              className={`${classes.adminFormSubmitButton} w-56`}
              type="submit">
              Search
            </button>
          </form>
          <div className="col-span-3 mr-6">
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {(error.noStudentError || error.backendError) && (
                <p className="text-red-500 text-2xl font-bold">
                  {error.noStudentError || error.backendError}
                </p>
              )}
            </div>
            {search &&
              !loading &&
              Object.keys(error).length === 0 &&
              students?.length !== 0 && (
                <div className={classes.adminData}>
                  <div className="grid grid-cols-10">
                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Sr no.
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Name
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Username
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Email
                    </h1>
                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Section
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Batch
                    </h1>
                  </div>
                  {students?.map((stu, idx) => (
                    <div
                      key={idx}
                      className={`${classes.adminDataBody} grid-cols-10`}>
                      <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {idx + 1}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.name}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.username}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.email}
                      </h1>
                      <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {stu.section}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.batch}
                      </h1>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
