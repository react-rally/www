/**
 * Suffle an array immutably using Fisher-Yates shuffle
 *
 * @param {array} list The array to shuffle
 * @return {array} A new array containing shuffled values from list
 */
export default function shuffle (list) {
  const result = [].concat(list)
  
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = result[i]
    
    result[i] = result[j]
    result[j] = temp
  }

  return result
}
