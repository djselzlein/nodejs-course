console.log('client side javascript loaded')

fetch('http://puzzle.mead.io/puzzle').then(res => {
  res.json().then(data => {
    console.log(data)
  })
})

fetch('http://localhost:3000/weather?address=boston').then(res => {
  res.json().then(data => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data)
    }
  })
})
