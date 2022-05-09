import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "loading-animations-react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/users'
      );
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const data = users.slice(0, 1000);

  if (loading) {
    return(
      <div className="flex justify-center items-center h-screen">
        <Spinner color1="blue" color2="black" textColor="rgba(0,0,0, 0.5)" />
      </div>

    );
  }

  return (
    <div className=" bg-blue-200 ">
      <h2 className="flex justify-center text-2xl p-6">List of Github Users</h2>
      <div className="flex flex-nowrap justify-center">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {data.map((curElem) => {
            return (
              <div key={curElem.id}>
                <div className="flex flex- flex-nowrap flex-row bg-white w-[500px] p-5 rounded-lg">
                  <img
                    className="h-[180px]"
                    src={curElem.avatar_url}
                    alt="GithubImage"
                  />
                  <div className="px-5 w-full flex flex-col justify-evenly">
                    <h2 className="flex flex-column text-xl font-medium">
                      {curElem.login}
                    </h2>
                    <p className="text-md flex justify-center ">
                      MERN developer
                    </p>
                    <div className="flex justify-center w-full">
                      <div className="flex flex-row justify-evenly bg-gray-300 h-[80px] w-[250px] p-2 rounded-lg">
                        <div className="flex flex-col">
                          <h5 className="text-lg">Articles</h5>
                          <span className="flex justify-center">8</span>
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg">Followers</h3>
                          <span className="flex justify-center">980</span>
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-lg">Stars</h5>
                          <span className="flex justify-center">9.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
