import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="min-h-screen my-16">
    <h1 className="text-3xl font-bold text-center mb-10">User Profile</h1>
      {!loading ? (
        <div className="text-center">
          <div className="card border rounded-lg w-48 p-2 mx-auto">
            <img src={user?.photoURL} alt="" className="rounded-lg" />
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-bold">User: {user?.displayName}</h2>
            <p className="font-bold">Email: {user?.email}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-16">
          <span className="loading loading-spinner text-orange-600 loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Profile;
