import React from 'react';

const Card = ({ user }) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  return (
    <div className="border-4 border-slate-900  flex flex-col justify-center items-center bg-pink-400">
      <div>
        <img src={user.picture.large} alt="profile" />
      </div>
      <div className="text-black text-center">
        <h1 className=" mt-5">{fullName}</h1>
        <p>Email: {user.email}</p>
        <p>
          Genero: <span className="text-white-500">{user.gender}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
