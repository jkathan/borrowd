import React from 'react';
import {connect} from 'react-redux';
import RenewLoanForm from './loan-renew-form';
import {returnLoanItem} from '../actions';
export class LoanCard extends React.Component  {
//dont understand how i could update Return Date from other component
//my thoughts: set state of return date, have an action handler that 
//listens to onsubmit and sets state to that new state 
    handleClick(index, event) {
    	        event.preventDefault();

    	const itemId = index;
    	//console.log(itemId);
        /* this.props.dispatch(
            returnLoanItem(itemId)
        );
   handleClick(index, event) {
    	const index = index;*/
        if (itemId && this.props.onReturn) {
            this.props.onReturn(itemId);
        }
    }

//would rather do handleclick in parent but cant specifiy button
render() {    
    return (
        <ul>
        	<li> {this.props.listId}</li>	
        	 <li>Type: {this.props.itemType}</li>
			 <li>Item: {this.props.item}</li>
			 <li>Loanee: {this.props.borrower}</li>
			 <li>Email: {this.props.email}</li>
			 <li>Phone: {this.props.phone}</li>
			 <li>Return Date: {this.props.returnDate}</li>
			 <button onClick={this.handleClick.bind(this, this.props.listId)}>Return</button>
			 <div>
			 	<RenewLoanForm />
			 </div>
		</ul>
    	);
	};
}

export default connect()(LoanCard);

