import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";
import { register } from "../../services/users";
import { useNavigate } from "react-router-dom";
export default function RegisterModule() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    schoolname: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user).then(() => navigate('/login')).catch(err => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Full Name"
        id="name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Enter the name of school"
        id="schoolName"
        name="schoolname"
        value={user.schoolname}
        onChange={handleChange}
      />
      <Input
        placeholder="Enter email"
        id="email"
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
      <Button className="bg-green-500 w-full rounded-md" title="Register" />
    </form>
  );
}
