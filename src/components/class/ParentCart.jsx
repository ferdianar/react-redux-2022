import React, { Component } from 'react'
import ChildCart from './ChildCart'

export default class ParentCart extends Component {
       constructor(props) {
              super(props)

              this.state = {
                     productName: "Guava",
                     stock: 12,
                     status: "Available"
              }
       }

       purchaseProduct = (valuePurchase) => {
              if (this.state.stock > 0) {
                     this.setState({
                            stock: this.state.stock - valuePurchase
                     })
              }
              if (this.state.stock <= 1) {
                     this.setState({
                            status: "Not Available"
                     })
              } else {
                     this.setState({
                            status: "Available"
                     })
              }
       }

       returnProduct = (valueReturn) => {
              if (this.state.stock >= 0) {
                     this.setState({
                            stock: this.state.stock + valueReturn
                     })
              }
              if (this.state.stock <= 0) {
                     this.setState({
                            status: "Not Available"
                     })
              } else {
                     this.setState({
                            status: "Available"
                     })
              }
       }

       render() {
              return (
                     <>
                            <div className="m-4">
                                   <h1 className='text-2xl font-bold'>Parent Cart</h1>
                                   <ChildCart
                                          purchasing={this.purchaseProduct.bind(this)}
                                          returning={this.returnProduct.bind(this)}
                                          status={this.state.status}
                                          productname={this.state.productName}
                                          stock={this.state.stock} />
                            </div>
                     </>
              )
       }
}
