import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/atoms/LogoutButton";
import Search from "../components/atoms/Search";
import DashboardHeader from "../components/molecules/DashboardHeader";
import { getAllBooks } from "../services/books";
import { useEffect, useState } from "react";
import PopupMolecule from "../components/molecules/PopupMolecule";
import BookForm from "../components/organisms/BookForm";
import BooksTable from "../components/organisms/BooksTable";

export default function Books() {
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  useEffect(() =>{
    getAllBooks().then((books) => setData(books));
  },[]);
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
      {popup && <div className="fixed w-screen h-screen bg-black bg-opacity-10">
      {popup && <PopupMolecule onClick={handleClick} name="Add Book">
        <BookForm />
        </PopupMolecule>}  
      </div>}
      <LogoutButton onClick={handleLogout} />
      <DashboardHeader title="Books" onClick={handleClick} button="Add Book" />
      <Search />
      <BooksTable data={data}/>
    </div>
  );
}
