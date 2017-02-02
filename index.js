function iterativeLog(array) {
  array.forEach((element, index) => {
  console.log (`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arrayAnything = ["Apples", "Oranges", "Grapefruit"]
  arrayAnything.forEach(callback)
  return arrayAnything
}

function doToArray(array, callback) {
  array.forEach(callback)
}
