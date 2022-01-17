import React from 'react'

const CardUsers = ({ users, deleteUsers }) => {
       return (
              <React.Fragment>
                     {
                            users.map((user) => (
                                   <div className="w-fit flex items-center gap-x-2 h-fit p-2 bg-red-500 rounded-lg border-none m-2">
                                          <h1 className="text-white font-bold" key={user.id}>{user.username}</h1>
                                          <p className="text-white font-medium">{user.email}</p>
                                          <p className="text-white font-medium">{user.university}</p>
                                          {/* Delete Button */}
                                          <button className="w-full py-1 px-3 bg-white text-red-500 rounded-md font-bold border-none">Delete</button>
                                   </div>
                            ))
                     }
              </React.Fragment>
       )
}

export default CardUsers
