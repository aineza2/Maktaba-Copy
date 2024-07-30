/* eslint-disable react/prop-types */
export default function Table({ headers, loading, data, children }) {
    return (
        loading ? (
            <div className='flex items-center justify-center p-5'>
                <div className="w-8 h-8 bg-transparent rounded-full border-2 animate-spin border-current border-t-transparent" />
            </div>
        ) : (
            <>
                <table className=" font-kumbh items-center bg-transparent w-full border-collapse rounded-xl max-w-full overflow-x-auto border-b border-primary-50">
                    <thead className='text-left capitalize'>
                        <tr className='border-primary-50 border'>
                            {headers.map((header, index) => (
                                <th key={index} className="px-6 bg-primary-50 text-primary align-middle py-3 text-sm whitespace-nowrap font-semibold text-left first:rounded-tl-xl last:rounded-tr-xl">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {data.length === 0 ? (
                            <tr className='border-primary-50 border-b last:border-b-0 hover:bg-gray-100 border-x'>
                                <td colSpan={headers.length} className="py-6 text-center">No data</td>
                            </tr>
                        ) : (children)}
                    </tbody>
                </table>
            </>
        )
    )
}
