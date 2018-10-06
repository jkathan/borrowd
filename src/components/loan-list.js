import React from 'react';
import {connect} from 'react-redux';

import LoanCard from './loan-card';
import LoanForm from './loan-form';

export class LoanList extends React.Component {
    constructor(props) {
        super(props);
    }

       addCard(itemType, item, borrower, email, phone, date) {
        this.props.dispatch(
            addLoanCard(itemType, item, borrower, email, phone, date, null)
        );
    }
    render() {
        const loancards = this.props.loansList.map((loan, index) => (
            <li key={index}>
                <LoanCard 
                listId={index}
                {...loan} />
            </li>
        ));
        return (
            <div>
                <ul className="list">
                   <div>
                        <LoanForm onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}/>
                    </div>
                    {loancards}
                </ul>
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
    );
    return {*/
        loansList: state.loanList
    //};

})

export default connect(mapStateToProps)(LoanList);

/*<li>
                        <h2><link to = {`/items/loanform`} >Loan out an item</link></h2>
                    </li>
                    */