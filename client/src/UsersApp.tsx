import UserForm from './components/UserForm';
import UsersList from './components/UsersList';


const handlerAddUser = ({user}) => {
  console.log('Desde el UsersApp '+user.username);
}

const initialUser = [
  {
    id: 1,
    username: 'John Doe',
    password: '123456',
    email: 'correo@mail.com'
  }
];

const UsersApp = () => {



  return (
    <>
    <h1 className='text-4xl'>Users App</h1>

    <div className='grid grid-cols-2 gap-4'>
      <div>
        <UserForm handlerAddUser={handlerAddUser}/>
      </div>
      <div>
        <UsersList users={initialUser} />
      </div>
    </div>
    </>
  )
}

export default UsersApp