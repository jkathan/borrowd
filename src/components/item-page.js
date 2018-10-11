import React from 'react';
import ItemList from './Item-list';
import Sidebar from './side-bar';
import './sidebar.css';

const LoanPage = () => (
    <div className='listPage'>
    	<div className="sidebar">
        	<Sidebar />
        </div>	
        <ItemList />
    </div>
);

export default LoanPage;