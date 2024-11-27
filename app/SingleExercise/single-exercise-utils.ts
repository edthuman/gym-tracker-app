export function getDateOneMonthAgo(): Date {
    const todayTimestamp = new Date().getTime()
    const msInAMonth = 2629800000
    const dateMonthAgo = new Date(todayTimestamp - msInAMonth)
    return dateMonthAgo
}

export function getDateString(date: Date): string {
    const dateString = date.toLocaleDateString()
    return dateString.replaceAll("/", "-")
}