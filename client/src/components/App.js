import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import {AddTransaction} from './AddTransaction'

import './App.css'

export default function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    )
}