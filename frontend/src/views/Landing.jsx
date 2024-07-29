import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import Navbar from "../components/organisms/Navbar";
import background from "/images/Home-bg.svg";
import tableImg from "/images/Home-table-pic.svg";

export default function Landing() {
  const navigate = useNavigate();
  function handleLoginClick() {
    navigate("/login");
  }
  function handleRegisterClick() {
    navigate("/register");
  }
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="relative w-full h-screen flex flex-col items-center bg-cover bg-center space-y-10 text-white text-center"
    >
      <Navbar loginFunc={handleLoginClick} registerFunc={handleRegisterClick} />

      <Button
        className="text-yellow-600 rounded-full capitalize border "
        title="Get your library digitilized now"
        onClick={handleLoginClick}
      />
      <h1 className="text-5xl font-bold font-kumbh w-1/3 leading-relaxed">
        Manage your library operations effortlessly
      </h1>
      <p className="font-karla w-1/3">
        The ultimate solution for modern library management. Revolutionize
        resource management seamlessly and efficiently for Rwandan high schools.
      </p>
      <Button
        className="rounded-full bg-sky-500"
        title="Get Started"
        onClick={handleLoginClick}
      />
      <img src={tableImg} alt="table image" className="absolute -bottom-56" />
    </div>
  );
}
