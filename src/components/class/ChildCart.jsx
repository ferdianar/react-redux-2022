import React, { Component } from 'react';

export default class ChildCart extends Component {
       constructor(props) {
              super(props)
       }
       render() {
              return (
                     <>
                            <div className="mt-6">
                                   <h1 className='text-2xl font-bold text-blue-400'>Child Product</h1>
                                   <h1 className='text-2xl font-bold  mt-4'>Name : <span className='text-yellow-400'>{this.props.productname}</span></h1>
                                   <h1 className='text-2xl font-bold '>Stock : <span className="text-yellow-400">{this.props.stock}</span></h1>
                                   <h1 className='text-2xl font-bold '>Status : <span className="text-yellow-400">{this.props.status}</span></h1>
                                   <button onClick={() => this.props.purchasing(3)} className="py-2 px-4 bg-yellow-400 hover:bg-yellow-600 rounded-md text-gray-900 font-bold mt-4">Purchase</button>
                                   <button onClick={() => this.props.returning(3)} className="py-2 px-4 bg-red-600 hover:bg-red-800 rounded-md text-white font-bold mt-4 ml-2">Return</button>
                            </div>
                     </>
              )
       }
}
