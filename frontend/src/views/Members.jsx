import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PopupMolecule from "../components/molecules/PopupMolecule";
import LogoutButton from "../components/atoms/LogoutButton";
import DashboardHeader from "../components/molecules/DashboardHeader";
import Search from "../components/atoms/Search";
import MemberForm from "../components/organisms/MemberForm";
import { getAllMembers } from "../services/member";
import MembersTable from "../components/organisms/MembersTable";
export default function Members() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMembers().then((members) => setData(members));
  }, []);
  const [popup, setPopup] = useState(false);
  function handleClick() {
    setPopup((prevPop) => !prevPop);
  }
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className={`w-full flex flex-col relative`}>
      {popup && (
        <div className="fixed w-screen h-screen bg-black bg-opacity-10">
          {popup && (
            <PopupMolecule onClick={handleClick} name="Add Member">
              <MemberForm />
            </PopupMolecule>
          )}
        </div>
      )}
      <LogoutButton onClick={handleLogout} />
      <DashboardHeader
        title="Members"
        onClick={handleClick}
        button="Add Member"
      />
      <Search />
      <MembersTable data={data} />
    </div>
  );
}
