import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        if (newBudget > 20000) {
            alert('El presupuesto no puede ser mayor a 20000.');
            setNewBudget(20000); // Restringe el presupuesto máximo a 20000.
        }

        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        if (newBudget < totalExpenses) {
            alert('El presupuesto no puede ser menor que los gastos ya asignados.');
            setNewBudget(totalExpenses); // Ajusta el presupuesto al total de gastos asignados.
        }
    }, [newBudget, expenses]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;

