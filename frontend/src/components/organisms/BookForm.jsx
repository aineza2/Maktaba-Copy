import { useState } from "react";
import { createBook } from "../../services/books";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
/* eslint-disable react/prop-types */
export default function BookForm() {
    const currentYear = new Date().getFullYear()
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    published_year: currentYear,
    category: "",
    language: "",
    copies: 0,
    image: "",
  });

  console.log(book);
  function handleChange(event) {
    const { value, name } = event.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(book)
      .then(() => alert("Book added successfully"))
      .catch((err) => alert(err));
  };
  return (
    <form className="grid grid-cols-2 gap-3" onSubmit={handleSubmit}>
      <Input
        placeholder="Title"
        id="title"
        name="title"
        value={book.title}
        onChange={handleChange}
      />
      <Input
        placeholder="Author"
        id="author"
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
      />
      <Input
        placeholder="ISBN"
        id="isbn"
        name="isbn"
        value={book.isbn}
        onChange={handleChange}
      />
      <Input
        placeholder="Published Year"
        id="published_year"
        type="number"
        min="1900"
        max="2099"
        step="1"
        name="published_year"
        value={book.published_year}
        onChange={handleChange}
      />
      <Input
        placeholder="Language"
        id="language"
        name="language"
        value={book.language}
        onChange={handleChange}
      />
      <Input
        placeholder="Category"
        id="category"
        type="text"
        name="category"
        value={book.category}
        onChange={handleChange}
      />
      <Input
        placeholder="Copies"
        id="copies"
        name="copies"
        type="number"
        value={book.copies}
        onChange={handleChange}
      />
      <Input
        placeholder="Image"
        id="image"
        type="file"
        name="image"
        value={book.image}
        inputClassName=" file:mr-10 file:rounded-md file:border-0 file:font-medium file:bg-transparent file:text-neutral-500"
        onChange={handleChange}
      />
      <Button
        className="bg-zinc-100 w-fit text-neutral-700 font-kumbh rounded-md"
        title="Add Book"
      />
    </form>
  );
}
