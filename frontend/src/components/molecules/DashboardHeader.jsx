/* eslint-disable react/prop-types */
import Button from "../atoms/Button";
export default function DashboardHeader(props) {
  return (
    <div className="w-full px-20 py-10 flex items-center justify-between">
      <h3 className="font-kumbh text-base font-medium text-neutral-600">{props.title}</h3>
      <Button
        className="bg-green-500 rounded-md text-sm font-semibold"
        onClick={props.onClick}
        title={props.button}
      />
    </div>
  );
}
