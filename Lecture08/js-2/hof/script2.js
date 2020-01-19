function runLoop(n, afterLoop) {
  for (let i = 1; i <= n; i++) {
    console.log('Running iteration ' + i)
  }
  if (typeof afterLoop === 'function') {
    afterLoop()
  }
}


runLoop(5, function () {
  console.log("Loop has been run now")
})
