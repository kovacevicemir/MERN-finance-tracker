import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function IncomeExpenses() {
    const {transactions} = useContext(GlobalContext)

    const income = transactions.map(
        transaction => transaction.amount > 0 ? transaction.amount : 0
    ).filter(val => val !== 0).reduce((acc,item) => (acc += item),0).toFixed(2)


    const expense = transactions.map(
        transaction => transaction.amount < 0 ? transaction.amount : 0
    ).filter(val => val !== 0).reduce((acc,item) => (acc += item),0).toFixed(2)

    const expenseFinal = Math.abs(expense)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expenseFinal}</p>
            </div>
        </div>
    )
}
