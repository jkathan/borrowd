import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './loan-search-bar';
//import LoanCard from './loan-card';
import LoanForm from './loan-form';
//import LoanSearchList from './loan-searchable-cards-list';
import LoanCard from './loan-card';
//import {addLoanCard} from '../actions/index';
import {returnItem} from '../actions/index';
import {searchList} from '../actions/index';
import {filterText} from '../actions/filter';
import getVisibleItem from '../selectors/lists';
import {filterDate} from '../actions/filter';


export class LoanList extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    searchTerm: ''
        //}
                this.onChange = this.onChange.bind(this);

    }

    onChange(event) {
        const sortFilter = this.menu.value;
        console.log(sortFilter);
        this.props.dispatch(
            filterDate(sortFilter));
    }

    render() {
        const sortedList = this.props.loanList.sort((a, b) => (a.returnDate > b.returnDate) ? 1 : ((b.returnDate > a.returnDate) ? -1 : 0));
        const loanlist = sortedList.map((loan, index) => (
            <ul className="list-wrapper"> 
                <LoanCard 
                listId={index}
                {...loan} />
            </ul>
        )
    )
        /*let loansList = this.props.loansList.filter(loan =>
            loan.item.toString().toLowerCase().includes(
                this.state.searchTerm.toString().toLowerCase()
            )                    />

        )*/
//loan form will be link after routers
        console.log(loanlist);
        return (
            <div>
                <div className="list">
                  <SearchBar onChange={searchTerm => this.props.dispatch(filterText({searchTerm}))} />
                   <div className="lists">
                        <ul className="floats marginish">
                            <li className="floats"><LoanForm /></li>
                            <ul>{loanlist}</ul> 
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
} 

const mapStateToProps = state => ({
/*    const loansList = Object.assign(
        {},
        {
            loanList: []
        },
        state.loanList
    );*/
    //return {
        loansList: getVisibleItem(state.board.loanList, state.filters)
    //};

})

export default connect(mapStateToProps)(LoanList);
/*onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}
                            <SearchBar onChange={searchTerm => this.setState({searchTerm})} />
                <LoanSearchList loansList = {loansList} />

                <li>
                        <h2><link to = {`/items/loanform`} >Loan out an item</link></h2>
                    </li>

                          filteredList: state.loanList.filter((search) => search.item.toLowerCase().includes(state.searchTerm)))

                    */