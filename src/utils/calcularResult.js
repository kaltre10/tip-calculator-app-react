const calcularResult = (bill, people, percentage) => {
    const amount = ((bill * (Number(percentage) / 100)) / people).toFixed(2);
    const total = (bill / people + Number(amount)).toFixed(2);
    return {
        amount,
        total
    }
};

export default calcularResult;