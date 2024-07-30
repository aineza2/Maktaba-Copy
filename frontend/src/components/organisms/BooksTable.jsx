/* eslint-disable react/prop-types */
import Table from "../molecules/Table";
import TableData from "../atoms/TableData";
export default function BooksTable(props) {
  return (
    <div className="px-20">
      <Table
        headers={[
          "Title",
          "Author",
          "Category",
          "Copies",
          "ISBN",
          "Language",
          "Published Year",
        ]}
        loading={false}
        data={props?.data ?? []}
      >
        {props?.data.map((item) => (
          <tr
            key={item.id}
            className="border-primary-50 border-b last:border-b-0 border-x hover:bg-gray-100 cursor-pointer"
          >
            <TableData item={item.title} />
            <TableData item={item.author} />
            <TableData item={item.category} />
            <TableData item={item.copies} />
            <TableData item={item.isbn} />
            <TableData item={item.language} />
            <TableData item={item.published_year} />
          </tr>
        ))}
      </Table>
    </div>
  );
}
