"use strict"
let array =[]

var fs = require('fs')
var cheerio = require('cheerio')
var request = require('request')

request({
  method: 'GET',
  url: 'https://news.ycombinator.com/'
}, function(err, response, body){
  if(err) return console.error(err);

  let $ = cheerio.load(body)
  $('.storylink').each(function(){
    array.push($(this).html());
  })
  console.log(array)
})
