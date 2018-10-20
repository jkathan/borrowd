import React from 'react';
import {addCard} from '../actions/index';
import {removeItemFromList} from '../actions/index';
import ItemLoanForm from './item-loan-form';
import {connect} from 'react-redux';
import moment from 'moment';
import './card.css';

class ItemRepo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: true,
            itemType: props.itemType,
            item: props.item
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
//dont unders
/*	goToCheckoutBoard(event) {
        event.preventDefault();
        this.props.history.push(`/items/itemedit`);
    }*/
    addCard(borrower, email, phone, date) {
    	var itemType = this.props.itemType;
    	var item = this.props.item;
    	const dateAdded = moment().format('YYYY-MM-DD');
    	this.props.dispatch(
            //wahat is boardID and why is it necessary?
        addCard(itemType, item, borrower, email, phone, date, dateAdded, null)
        );
    }
    returnItem(e, index){
	    e.preventDefault();
	    console.log(index);
	    this.props.dispatch(removeItemFromList(index));
	}	

	onItemInputChange(value){
		
		console.log(value);
        this.setState({
             item: value
        });
    }
	onSubmit(props) {
        const itemType = this.itemInput.value.trim();        
        const item = this.itemInput.value.trim();
        const index = this.props.listId;
	    this.setState({editing : !this.state.editing})
	}

	onItemTypeInputChange(value){
        this.setState({
             itemType: value
        });
    }



//edit button should be a link
//new form form for borrow and forms
	render() {
		//console.log(this.props.itemType);
		//console.log(this.props);
		return (
			<li>
				<div>
					<ul className="card">
					 	<li>Type: {this.props.itemType}</li>
					 	<li>Item: {this.props.item}</li>
					</ul> 
					<ItemLoanForm
					index = {this.props.listId}
					onAdd= {(borrower, email, phone, date) => this.addCard(borrower, email, phone, date)}
					/>
					<button 
					className="formButtons"
					onClick={(e) => this.returnItem(e, this.props.listId)}>Delete</button>
				</div>
			</li>
		);
	}
}

export default connect()(ItemRepo);