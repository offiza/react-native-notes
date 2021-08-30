function time(date: string){
    const ms = new Date(date).toString();
    let newDate = ms[8] + ms[9] + ms[7] + ms[4]+ ms[5] + ms[6] + ms[10] + ms[11] + ms[12] + ms[13] + ms[14];
    let newTime = ms[16] + ms[17] + ms[18] + ms[19] + ms[20] + ms[21] + ms[22] + ms[23];
    let msNow = new Date(Date.now()).toString();
    let checkDate =  msNow[8] + msNow[9] + msNow[7] + msNow[4]+ msNow[5] + msNow[6] + msNow[10] + msNow[11] + msNow[12] + msNow[13] + msNow[14];
    
    return (newDate==checkDate)? newTime : newDate
}

export default time