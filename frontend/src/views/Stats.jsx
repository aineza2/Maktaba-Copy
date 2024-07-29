import StatsCards from "../components/organisms/StatsCards";
import { useContext } from "react";
import { MainContext } from "../context/AppContext";
/* eslint-disable react/prop-types */
export default function Stats(props) {
  console.log(props);
  const { user } = useContext(MainContext);
  console.log("user:", user);
  const stats = [
    {
      data: 20,
      name: "Issues",
    },
    {
      data: 212,
      name: "Total Students",
    },
    {
      data: 3000,
      name: "Total books",
    },
  ];
  function handleClick(event) {
    event.preventDefault();
    console.log("Clicked!");
  }
  return (
    <div className="relative flex flex-col h-full p-14 font-kumbh w-full">
      <h1 className="font-semibold text-2xl text-neutral-600">
        Welcome to your dashboard,{" "}
        <span className="text-blue-950 capitalize">{user.name}</span>
        <StatsCards data={stats} />
        <button
          className="absolute right-20 bottom-20 bg-blue-950 px-7 pt-5 pb-7 leading-7 rounded-full text-white text-4xl"
          onClick={handleClick}
        >
          +
        </button>
      </h1>
    </div>
  );
}
