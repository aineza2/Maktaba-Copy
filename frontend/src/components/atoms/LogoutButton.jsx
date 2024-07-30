/* eslint-disable react/prop-types */
export default function LogoutButton(props) {
  return (
    <button
      className="font-semibold font-kumbh text-sm text-neutral-600 self-end px-5 mt-10 mr-20"
      onClick={props.onClick}
    >
      Log out
    </button>
  );
}
