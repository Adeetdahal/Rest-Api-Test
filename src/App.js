import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response =await fetch('https://jsonplaceholder.typicode.com/photos');     
    setUsers(await response.json());
  }

  useEffect(() => {
    getUsers();
  });

  const data = users.slice(0, 50);

  return (
    <div className=" bg-blue-200 ">
      <h2 className="flex justify-center text-2xl p-6">
        List of Github Users
      </h2>
      <div className="flex flex-nowrap justify-center">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4 ">

        {
          data.map((curElem)=> {
            return (
              <div key={curElem.id}>
                <div className="flex flex- flex-nowrap flex-row bg-white w-[580px] p-5 rounded-lg" >
        <img className="h-[180px]" src={curElem.url}  alt="GithubImage"/>
        <div className="px-5 w-full flex flex-col justify-evenly">
          <h2 className="flex flex-column text-xl font-medium">{curElem.title}</h2>
          <p className="text-md flex justify-center ">MERN developer</p>
          <div className="flex justify-center w-full">
          <div className="flex flex-row justify-evenly bg-gray-300 h-[80px] w-[250px] p-2 rounded-lg">
            <div className="flex flex-col">
              <h5 className="text-lg">
                Articles
                </h5>
              <span className="flex justify-center">8</span>
              </div>
            <div className="flex flex-col">
              <h3 className="text-lg">Followers</h3>
              <span className="flex justify-center">
                980
                </span>
              </div>
              <div className="flex flex-col">
              <h5 className="text-lg">
                Stars
                </h5>
              <span className="flex justify-center">9.8</span>
              </div>
          </div>
          </div>
        </div>
      </div>
              </div>
            )
          })

        }


      
      </div>
      </div>
      {/* <div className="p-20">
      <div className="flex flex-wrap flex-row justify-flex-start w-[550px] h-[180px] bg-red-300 p-3">
        <img className="w-[200px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRr_panR44tcaDFvZNWZO47Mbf5WAU_llx_WbzawDKChU-KWLFE39wkx_z34RsXvgjnIo&usqp=CAU" alt="GithubImage"/>
      <div className="flex flex-column justify-center px-5">
        <h2 className="flex">Adit Dahal</h2>
        <p className="flex">MERN stack developer</p>
      </div>
      </div>

      </div> */}
      </div>
  );
};


export default App;