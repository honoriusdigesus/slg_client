import UserRow from "./UserRow"

type Props = {}

const UsersList = ({users}) => {
  return (


<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Update
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((user: { id: number, username: string, email: string }) => (
              <UserRow key={user.id} id={user.id} username={user.username} email={user.email} />
            ))}
        </tbody>
    </table>
</div>

  )
}

export default UsersList