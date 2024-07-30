/* eslint-disable react/prop-types */


export default function TableData({ item, isHeader = false }) {
    return (
        isHeader ? (
            <th className="capitalize border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                {item}
            </th>
        ) : (
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                    {item}
                </td>
            )
        )
    
}