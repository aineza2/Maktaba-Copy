/* eslint-disable react/prop-types */
import Button from "../atoms/Button";

export default function Navbar(props) {
  return (
    <div className="w-full flex justify-between py-10 px-32 items-center font-karla">
      <h1 className="text-white text-2xl font-bold w-fit font-kumbh">
        Maktaba
      </h1>
      <div className="flex justify-between gap-20 w-auto">
        <a href="" className="text-white">
          Home
        </a>
        <a href="" className="text-white">
          About
        </a>
        <a href="" className="text-white">
          Our services
        </a>
        <a href="" className="text-white">
          FAQs
        </a>
        <a href="" className="text-white">
          Contact Us
        </a>
      </div>
      <div className="flex w-fit gap-7">
        <Button className="rounded-full bg-sky-500" title="Login" onClick={props.loginFunc} />
        <Button className="rounded-full bg-green-500" title="Register" onClick={props.registerFunc}/>
      </div>
    </div>
  );
}
