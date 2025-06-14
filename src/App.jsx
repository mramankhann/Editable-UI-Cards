import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])

  const formhandler = (e) => {
    e.preventDefault()
    setUsers([...users, {isEditable:false ,id:users.length+1 , name, email}])
    setName('')
    setEmail('')
   
  }

  const deleteHandler = (id) => {
    setUsers(users.filter((elem) => elem.id !== id))
  }







  return (
    <>
<div className="flex h-screen w-screen ">
 

    <div className="w-1/3 h-ful">
    <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x py-4">
  Dynamic Management By Aman
</h1>
  <form onSubmit={formhandler} className="bg-white shadow-md h-full content-center rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <input value={name} onInput={(e)=>{setName(e.target.value)}} type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Name' required />
    </div>
    <div className="mb-6">
      <input value={email} onInput={(e)=>setEmail(e.target.value)} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder='Enter email' required />
    </div>
    <div className="flex items-center justify-between">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Enter User
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>

<div className="w-2/3 h-full cards flex bg-gray-200 flex-wrap">
  {users.map((elem) => (
    <div className="flex card-body bg-gray-700 h-fit text-white flex-col rounded m-5 p-5 gap-3 align-center" key={elem.email}>
      {elem.isEditable ? (
        <>
          <input
            type="text"
            value={elem.name}
            onChange={(e) => {
              const updatedUsers = users.map((user) =>
                user.id === elem.id ? { ...user, name: e.target.value } : user
              );
              setUsers(updatedUsers);
            }}
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="email"
            value={elem.email}
            onChange={(e) => {
              const updatedUsers = users.map((user) =>
                user.id === elem.id ? { ...user, email: e.target.value } : user
              );
              setUsers(updatedUsers);
            }}
            className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={() => {
              const updatedUsers = users.map((user) =>
                user.id === elem.id ? { ...user, isEditable: false } : user
              );
              setUsers(updatedUsers);
            }}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="text-center">Name: {elem.name}</h3>
          <p className="text-center">Email: {elem.email}</p>
          <button
            onClick={() => {
              const updatedUsers = users.map((user) =>
                user.id === elem.id ? { ...user, isEditable: true } : user
              );
              setUsers(updatedUsers);
            }}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button
            onClick={() => deleteHandler(elem.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </>
      )}
    </div>
  ))}
</div>



</div>
    </>
  )
}

export default App
