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
  $('.sitestr').each(function(){
    array.push($(this).html());
  })
  console.log(array)
})







// request({
//   method: 'GET',
//   url: 'https://github.com/showcases'
// }, function(err, response, body){
//   if(err) return console.error(err);
//
//   //Tell Cheerio to load the HTML
//   $ = cheerio.load(body)
//   $('.exploregrid-item-title').each(function(){
//     array.push($(this).html());
//   });
//   console.log(array)
// });
