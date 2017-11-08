
/**
 * Index Route :- This route will generate <iframe>( embed code )for 
                  embedding youtube/vimeo/dailymotion/whatever video in websites from URL or ID.
 * @index : Rendering Angular
 * @vimeoUrl : Rendering vimeo embed URL
 * @youtubeUrl : Rendering youtube embed URL
 * @dailymotionUrl : Rendering dailymotion embed URL
 */
const path = require('path');
const appPath = path.join(__dirname,'..','App');


//URL : https://www.npmjs.com/package/embed-video
const embed = require("embed-video");

exports.index = (req,res) => {
  res.sendFile(appPath+'/index.html')
}

exports.vimeoUrl = (req,res) => {
  const vimeoUrl = "http://vimeo.com/19339941";
  res.json({"success":"true" ,"iframe" : embed(vimeoUrl)});
}

exports.youtubeUrl = (req,res) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=twE64AuqE9A";
    res.json({"success":"true" ,"iframe" : embed(youtubeUrl)});
}

exports.dailymotionUrl = (req, res) => {
  const dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";
  res.json({"success":"true" , "iframe" :embed(dailymotionUrl)});

};
