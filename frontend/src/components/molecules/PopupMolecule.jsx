/* eslint-disable react/prop-types */

export default function PopupMolecule(props) {
  return (
  <div className="bg-white p-10 mx-10 w-3/5 my-10">
    <div className="flex w-full justify-between items-center mb-10">
    <h1 className="font-semibold text-3xl text-neutral-600 font-kumbh">{props.name}</h1>
    <button onClick={props.onClick}>X</button>
    </div>
    {props.children}
  </div>
);
}
