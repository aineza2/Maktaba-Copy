/* eslint-disable react/prop-types */

import SideBar from "../components/organisms/SideBar";
export default function Dashboard({ children }) {
  const {schoolname} = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="w-full flex h-screen">
      <div className="sticky h-screen top-0 capitalize">
        <SideBar schoolName={schoolname} />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
