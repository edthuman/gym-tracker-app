export function getDateOneMonthAgo(): Date {
    const todayTimestamp = new Date().getTime()
    const msInAMonth = 2629800000
    const dateMonthAgo = new Date(todayTimestamp - msInAMonth)
    return dateMonthAgo
}