function getDays(): number {
    const today: Date = new Date();
    const month: number = today.getMonth();
    const seasonMonth: number = (month + 2) % 3 === 0 ? 3 : (month + 2) % 3;
    let startMonth: number = month + 1 - seasonMonth;
    let days: number = 0;

    while (startMonth < month) {
        days += new Date(today.getFullYear(), startMonth + 1, 0).getDate();
        startMonth++;
    }

    return days + today.getDate();
}

export function getPoints(): number {
    const days: number = getDays();
    const result = [0,2,3];
    for (let i=3;i<=days;i++){
        result.push(result[i-2] + 0.6*result[i-1]);
    }
    return result[days];
}