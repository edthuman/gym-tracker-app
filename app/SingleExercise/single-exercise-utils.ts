export function getDateOneMonthAgo(): Date {
    const todayTimestamp = new Date().getTime()
    const msInAMonth = 2629800000
    const dateMonthAgo = new Date(todayTimestamp - msInAMonth)
    return dateMonthAgo
}

export function getDateString(date: Date): string {
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // zero-indexed
    const formattedMonth = String(month).length === 1 ? `0${month}` : month
    const day = date.getDate()
    const formattedDay = String(day).length === 1 ? `0${day}` : day
    
    const dateString = `${formattedDay}-${formattedMonth}-${year}`
    return dateString
}