// setTimeout(() => {
//   console.log('After timeout')
// }, 2500)
// setInterval(() => {
//   console.log('After timeout')
// }, 1000)

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }
//
// delay(() => {
//   console.log('After 2 seconds');
// }, 2000)

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Что-то пошло не так. Повторите попытку')
  }, wait)
})
  return promise
}

delay(2500)
  .then(() => {
    console.log('After 2 seconds')
  })
  .catch(err => console.error('Error:', err))
  .finally(() => console.log('Finaly'))
