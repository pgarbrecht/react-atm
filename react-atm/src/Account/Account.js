import React, { Component } from 'react';

//this is the bottom level component of our application (inside the App component)
class Account extends Component { //class allows us to make an account sub-component within the parent component App.js 
  constructor (props) { //constructor creates the class as we define below, with access to props (properties from parent component App.js) 
    super() //super used to call the constructor, so we can access variables of the parent class
    this.state = { //state is used to contain properties that will change while using the app
      balance: 0, // where we will manage the account balance, starts at 0
      moneyInput: 0 //where the value of money to be deposited/withdrawed will be stored, starts at 0
    }
  }
  setMoneyInput = (money) => { //function to update moneyInput with the text value of money passed in
    this.setState({ //setState allows us to change a property in the account component
    moneyInput: money.currentTarget.value //update the moneyInput property to be the amount put in the text field
    })
  }
  depositMoney = () => { //function to deposit money (i.e add moneyInput to balance)
    this.setState({ //setState allows us to change a property in the account component
      balance: this.state.balance + Number(this.state.moneyInput) //update the balance property to be current balance + deposited money
    })
  }
  withdrawMoney = () => { //function to withdraw money (i.e subtract moneyInput from balance)
    if( this.state.balance - Number(this.state.moneyInput) >= 0) { //if user isn't trying to withdraw more than they have, let them withdraw it
    this.setState({ //setState allows us to change a property in the account component
      balance: this.state.balance - Number(this.state.moneyInput) //update the balance property to be current balance + deposited money
    })
    }
    else if(this.state.balance - Number(this.state.moneyInput) < 0) { //if user is trying to withdraw more than they have, don't let them and give alert
      alert("Error! You can't withdraw more money than you have in your account.");
    }
  }
    
  render() { 
    return ( //adds the account component onto the page with appropriate text, dynamic balance color, inputs, and calls the functions we need to run on change / click
      <div className="account"> 
        <h2> {this.props.name} </h2>
        <div className={this.state.balance > 0 ? "balance" : "balance zero"}> {this.state.balance} </div>
        <input type="number" placeholder="enter an amount" onChange={this.setMoneyInput} /> 
        <input type="button" value="Deposit" onClick={this.depositMoney} />
        <input type="button" value="Withdraw" onClick={this.withdrawMoney} />
      </div>
    )
  }
}

export default Account;