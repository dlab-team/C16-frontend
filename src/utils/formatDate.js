export function formatDate(date) {
  const currentDate = date

  // Create a Date Object from the Date String
  const newDate = new Date(currentDate)

  // Get the name of the month and year
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = newDate.toLocaleDateString('es-ES', options)
  return formattedDate
}
