import React, { Component } from 'react'

export default class Forms extends Component {
       // initialize state
       state = {
              username: null,
              email: null,
              university: null
       }

       // forms submit event listener
       DataIsSubmit = (event) => {
              event.preventDefault()
              this.props.addUsers(this.state)
       }

       // function for event listener submit
       changeData = (event) => {
              // set state | setter
              this.setState({
                     // id=attribute : attribute values
                     [event.target.id]: event.target.value
              })
       }
       render() {
              return (
                     <React.Fragment>
                            {/* Wrapper */}
                            <div className="m-3 mt-6 border border-gray-200 rounded-md p-8 max-w-[400px] flex flex-col">
                                   {/* Form */}
                                   <form onSubmit={this.DataIsSubmit} method="" action="" className='flex flex-col'>
                                          {/* Field and Label  Username */}
                                          <label className='mt-4 mb-2 font-bold' htmlFor="username">Username</label>
                                          <input onChange={this.changeData} className='py-2 px-3 border border-blue-200 font-medium rounded-md' placeholder='Input your Username' type="text" name="username" id="username" />

                                          {/* Field  and Label Email Address */}
                                          <label className='mt-4 mb-2 font-bold' htmlFor="email">Email Address</label>
                                          <input onChange={this.changeData} className='py-2 px-3 border border-blue-200 font-medium rounded-md' placeholder='Input your Email' type="email" name="email" id="email" />

                                          {/* Field and Label  Password */}
                                          <label className='mt-4 mb-2 font-bold' htmlFor="university">University</label>
                                          <input onChange={this.changeData} className='py-2 px-3 border border-blue-200 font-medium rounded-md' placeholder='Input your University' type="text" name="university" id="university" />

                                          {/* Button Submit */}
                                          <button className='my-4 mt-6 py-2 px-3 font-medium bg-blue-500 border-none rounded-md text-white hover:bg-blue-700' type="submit">Register</button>
                                   </form>
                            </div>
                     </React.Fragment>
              )
       }
}
