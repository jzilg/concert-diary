import moment from 'moment'

export default function getTodaysDate(): string {
    return moment().format('YYYY-MM-DD')
}
