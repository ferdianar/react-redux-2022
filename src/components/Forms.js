import React, { Component } from 'react'

export default class Forms extends Component {
       render() {
              return (
                     <React.Fragment>
                            {/* Wrapper */}
                            <div className="m-3 mt-6 mx-auto border border-gray-200 rounded-md p-8 max-w-[400px] flex flex-col">
                                   {/* Form */}
                                   <form method="" action="" className='flex flex-col'>
                                          {/* Field and Label  Username */}
                                          <label className='mt-4 mb-2 font-bold' htmlFor="username">Username</label>
                                          <input className='py-2 px-3 border border-blue-200 font-medium rounded-md' placeholder='Input your Username' type="text" name="username" id="username" />

                                          {/* Field  and Label Email Address */}
                                          <label className='mt-4 mb-2 font-bold' htmlFor="email">Email Address</label>
                                          <input className='py-2 px-3 border border-blue-200 font-medium rounded-md' placeholder='Input your Email' type="email" name="email" id="email" />

                                          {/* Field and Label  Password */}
                                          <label className='mt-4 mb-2 font-bold' htmlFor="password">Password</label>
                                          <input className='py-2 px-3 border border-blue-200 font-medium rounded-md' placeholder='Input your Password' type="password" name="password" id="password" />

                                          {/* Button Submit */}
                                          <button className='my-4 mt-6 py-2 px-3 font-medium bg-blue-500 border-none rounded-md text-white hover:bg-blue-700' type="submit">Register</button>
                                   </form>
                            </div>
                     </React.Fragment>
              )
       }
}
