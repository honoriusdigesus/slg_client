import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

type Props = {}

const initialUser = [
  {
    id: 1,
    username: 'John Doe',
    password: '123456',
    email: 'correo@mail.com'
  }
];

const UsersApp = (props: Props) => {
  return (
    <>
    <h1 className='text-4xl'>Users App</h1>

    <div className='grid grid-cols-2 gap-4'>
      <div>
        <UserForm />
      </div>
      <div>
        <UsersList users={initialUser}/>
      </div>
    </div>
    </>
  )
}

export default UsersApp