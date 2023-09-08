import { useEffect, useState } from "react";
import UserService from "../services/userService";

const Dashboard = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {
    UserService.getUser(UserService.getLocalID()).then((res) => setUser(res));
  }, []);

  return (
    <div className="w-full h-screen bg-gray-50 flex items-center">
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <img
          className={`w-32 h-32 rounded-full mx-auto border ${
            user?.gender === "male" ? "border-blue-500" : "border-pink-500"
          }`}
          src={user?.image}
          alt="Profile picture"
        />
        <h2 className="text-center text-2xl font-semibold mt-3">
          {user?.firstName + " " + user?.maidenName + " " + user?.lastName}
        </h2>
        <p className="text-center text-gray-600 mt-1">{user?.company?.title}</p>
        <div className="flex justify-center mt-5">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
