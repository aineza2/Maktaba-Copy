import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { createMember } from "../../services/member";
export default function MemberForm(){
    const [member, setMember] = useState({
            user_id: 0,
            name: "",
            type: "",
            joined_date: "",
            class: "",
            department: "",
            class_teacher: "",
            phone: ""
    });
  
    console.log(member);
    function handleChange(event) {
      const { value, name } = event.target;
      setMember((prevMember) => ({
        ...prevMember,
        [name]: name ==='type' ? value.toLowerCase() : value,
      }));
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      createMember(member)
        .then(() => alert("Member added successfully"))
        .catch((err) => alert(err));
    };
    return (
      <form className="grid grid-cols-2 gap-3" onSubmit={handleSubmit}>
        <Input
          placeholder="name"
          id="name"
          name="name"
          value={member.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Type"
          id="type"
          
          name="type"
          value={member.type}
          onChange={handleChange}
        />
        <Input
          placeholder="Joined Date"
          id="joined_date"
          type="date"
          name="joined_date"
          value={member.joined_date}
          onChange={handleChange}
        />
        <Input
          placeholder="Class"
          id="class"
          type="text"
          name="class"
          value={member.class}
          onChange={handleChange}
        />
        <Input
          placeholder="Department"
          id="department"
          name="department"
          value={member.department}
          onChange={handleChange}
        />
        <Input
          placeholder="Class Teacher"
          id="class_teacher"
          type="text"
          name="class_teacher"
          value={member.class_teacher}
          onChange={handleChange}
        />
        <Input
          placeholder="Phone"
          id="phone"
          name="phone"
          type="phone"
          value={member.phone}
          onChange={handleChange}
        />

        <Button
          className="bg-zinc-100 col-span-2 w-fit text-black font-kumbh rounded-md"
          title="Add Member"
        />
      </form>
    );
}