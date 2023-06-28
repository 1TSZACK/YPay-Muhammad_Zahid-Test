const insertHistory = (number,oddeven) => {
    return {
        type: 'insert',
        payload: {number: number, isOddEven: oddeven}
    }
}

export {insertHistory}