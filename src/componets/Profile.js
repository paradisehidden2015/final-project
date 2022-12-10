import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/main.css";

function Profile({ User }) {
  const [Data, setData] = useState(null);
  //////////////////get localStorage
  let storageUser = JSON.parse(localStorage.getItem("User"));
  //////////////////
  const req = async () => {
    try {
      const { data } = await axios.get(
        "http://kzico.runflare.run/user/profile",
        {
          headers: {
            authorization: `Bearer ${User[0].token}`,
          },
        }
      );
      // console.log(data);

      setData(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  req();
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-4/6 lg:w-3/6 2xl:w-2/6">
        <div className="card w-full bg-primary text-primary-content mt-32 sm:mt-32 shadow-lg">
          <div className="card-body">
            <div className="avatar mb-10 flex justify-center transition duration-700">
              <div className="w-24 rounded-full ring ring-black hover:scale-125 hover:ring-red-900 ring-offset-base-100 ring-offset-2 transition duration-700">
                <img
                  src={Data !== null ? Data.user.image : storageUser[0].image}
                />
              </div>
            </div>
            <div className="block">
              <div className="flex justify-start mb-5">
                <label>User Name : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.username : storageUser[0].username}
                </label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Email : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.email : storageUser[0].email}
                </label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Mobile : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.mobile : ""}
                </label>
              </div>
              <div className="flex justify-start mb-5">
                <label>First Name : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.firstname : ""}
                </label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Last Name : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.lastname : ""}
                </label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Gender : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.gender : ""}
                </label>
              </div>
              <div className="flex justify-start mb-5">
                <label>Age : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.age : ""}
                </label>
              </div>
              <div className="flex justify-start mb-5">
                <label>City : </label>
                <label className="ml-2">
                  {Data !== null ? Data.user.city : ""}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
