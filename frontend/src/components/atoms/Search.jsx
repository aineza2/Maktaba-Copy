import Input from "./Input";
export default function Search() {
  return (
    <div className="mx-20">
      <Input
        type="text"
        placeholder="Search for a book by name, Author, ISBN, language,..etc"
        inputClassName="bg-[#FCFAFA] border-none"
      />
    </div>
  );
}
