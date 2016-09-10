'use strict'

const cheerio = require('cheerio')
const fs = require('fs')
let request = require('request')
let user = []
let story = []
let comment = []
let col = ["\x1b[30m",
    "\x1b[31m",
    "\x1b[32m",
    "\x1b[33m",
    "\x1b[34m",
    "\x1b[35m",
    "\x1b[36m",
    "\x1b[37m"
  ]
  // let col = [FgBlack = "\x1b[30m",
  //   FgRed = "\x1b[31m",
  //   FgGreen = "\x1b[32m",
  //   FgYellow = "\x1b[33m",
  //   FgBlue = "\x1b[34m",
  //   FgMagenta = "\x1b[35m",
  //   FgCyan = "\x1b[36m",
  //   FgWhite = "\x1b[37m"]

request({
  method: 'GET',
  url: 'https://news.ycombinator.com/newcomments'
}, function (err, response, body) {
  if (err) return console.error(err)


  let $ = cheerio.load(body)
  $('.hnuser').each(function () {
    user.push($(this).text())
  })


  $('.storyon > a:first-child').each(function () {
    story.push($(this).text())
  })

  $('.c00').each(function () {
    comment.push($(this).text().replace(/(\w{7}).*/g, "$1...."))
  })

  user.forEach((val, idx) => {
    console.log(col[2], val, "commented on:", col[4], story[idx])
    console.log(col[(idx + 1) % 8], "--------------------------------------------------")
    console.log(col[idx % 8], comment[idx])
  })
})
