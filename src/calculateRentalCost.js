/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days < 3) {
    return days * 50
  }

  if (days < 7) {
    return (days * 50) - 20
  }

  return (days * 50) - 30;
}

module.exports = calculateRentalCost;
