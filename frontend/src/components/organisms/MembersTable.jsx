/* eslint-disable react/prop-types */
import Table from "../molecules/Table";
import TableData from "../atoms/TableData";
export default function MembersTable(props) {
  return (
    <div className="px-20">
      <Table
        headers={[
          "Name",
          "Type",
          "Class",
          "Class Teacher",
          "department",
          "Joined Date",
          "Phone",
        ]}
        loading={false}
        data={props?.data ?? []}
      >
        {props?.data.map((item) => (
          <tr
            key={item.id}
            className="border-primary-50 border-b last:border-b-0 border-x hover:bg-gray-100 cursor-pointer"
          >
            <TableData item={item.name} />
            <TableData item={item.type} />
            <TableData item={item.class} />
            <TableData item={item.class_teacher} />
            <TableData item={item.department} />
            <TableData item={item.joined_date} />
            <TableData item={item.phone} />
          </tr>
        ))}
      </Table>
    </div>
  );
}
