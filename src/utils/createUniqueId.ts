/**
 * @returns {number} new id with 10 digits
 */
export default function createUniqueId(): number {
    const date = new Date()
    const time = date.getTime()
    const randomNumber = Math.random() * time
    const partialString = String(randomNumber).slice(0, 10)
    return parseInt(partialString, 10)
}
