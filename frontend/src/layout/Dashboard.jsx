/* eslint-disable react/prop-types */

import SideBar from "../components/organisms/SideBar";

export default function Dashboard({ children }) {
  return (
    <div className="w-full flex h-screen">
      <div className="sticky h-screen top-0">
        <SideBar schoolName="ALU" />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
