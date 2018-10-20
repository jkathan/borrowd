import React from 'react';
import {connect} from 'react-redux';
import RenewBorrowForm from './renew-borrow-form';
import {returnBorrowItem} from '../actions/index';
import {renewBorrowItem} from '../actions/index';
import './card.css';
//import * as indexAction from '../actions';
export class BorrowCard extends React.Component  {
		constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }
//dont understand how i could update Return Date from other component
//my thoughts: set state of return date, have an action handler that 
//listens to onsubmit and sets state to that new state 
  returnItem(e, index){
    e.preventDefault();
    console.log(index);
   this.props.dispatch(returnBorrowItem(index));
}

//would rather do handleclick in parent but cant specifiy button
render() {
		console.log(this.props.loaner);    
    return (
    	<div>
	    	<div>
	    		<img src={this.props.image} className='iconImage'/>
	    	</div>
	        <ul key={this.props.listId} className="card">
	        	 <li>Type: {this.props.itemType}</li>
				 <li>Item: {this.props.item}</li>
				 <li>Loaner: {this.props.loaner}</li>
				 <li>Email: {this.props.email}</li>
				 <li>Phone: {this.props.phone}</li>
				 <li>Return Date: {this.props.returnDate}</li>
				 <button className="formButtons" onClick={(e) => this.returnItem(e, this.props.listId)}>Return</button>
				 <div>
				 	<RenewBorrowForm 
				 	index ={this.props.listId} 
				 	/>
				 </div>
			</ul>
		</div>
    	);
	};
}

//const mapDispatchToProps = (dispatch) => {
//  return {
//    returnLoanItem: index =>dispatch(indexAction.returnLoanItem(index))
//  } onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}
//};

export default connect()(BorrowCard);
