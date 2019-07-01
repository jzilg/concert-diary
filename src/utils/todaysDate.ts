import moment from 'moment'

function getTodaysDate(): string {
    return moment().format('YYYY-MM-DD')
}

const todaysDate = getTodaysDate()

export default todaysDate
