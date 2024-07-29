import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState,useContext } from "react";
import { signIn } from "../../services/users";
import { MainContext } from "../../context/AppContext";
export default function LoginMolecule() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setUser: setAppUser } = useContext(MainContext)
  function handleChange(event) {
    const { value, name } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token);
        setAppUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter the name of school"
        id="schoolName"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Enter Password"
        id="password"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <Button className="bg-green-500 w-full rounded-md" title="Login" />
    </form>
  );
}
