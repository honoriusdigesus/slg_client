
type Props = {
  id: number;
  username: string;
  email: string;
}

const UserRow: React.FC<Props> = ({ id, username, email }) => {
  return (
    <tr key={id} className="bg-gray-50 dark:bg-gray-700">
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{id}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{username}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900">{email}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
        </button>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
        </button>
    </td>
</tr>
  )
}

export default UserRow