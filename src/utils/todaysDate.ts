import dayjs from 'dayjs'

function getTodaysDate(): string {
    return dayjs().format('YYYY-MM-DD')
}

const todaysDate = getTodaysDate()

export default todaysDate
