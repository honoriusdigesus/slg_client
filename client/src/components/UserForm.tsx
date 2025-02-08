import { useState } from "react"


const UserForm = ({handlerAddUser}) => {

  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: ''
  })


const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //console.log(e.target.value)
  setUserForm({
    ...userForm,
    [e.target.id]: e.target.value
  })
  //console.log(userForm)
}

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  //Validaciones de campos
  if (!userForm.username || !userForm.email || !userForm.password) {
    console.log('Invalid input')
    alert('Debe completar los campos')
    return
  }
  //console.log(userForm)
handlerAddUser({user: userForm})

  // Reset form
  setUserForm({
    username: '',
    email: '',
    password: ''
  })
}

  return (
    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onChange={onInputChange}
          value={userForm.username}
        />
      </div>


      <div className="mb-6"><label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
          onChange={onInputChange}
          value={userForm.email}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          onChange={onInputChange}
          value={userForm.password}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default UserForm