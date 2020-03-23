const fs = require('fs');

function fromFileToList(path){
  var text = fs.readFileSync(path);
  var string = text.toString('utf-8')
  var textByLine = string.split("\n")
  return textByLine;
}

function readFileAsBooleans(path){
  list = fromFileToList(path);
  return list.map(str => str.toLowerCase() == 'true\r' ? true : false)
}

function readFileAsFloats(path){
  list = fromFileToList(path);
  return list.map(str => parseFloat(str));
}

module.exports = 
{
    getGmmData: function()
    {
        return readFileAsFloats("C:/Users/Tomer/nodejs/webppl/workspace/webppl/resource/gmm_data.csv");       
    },

    getSurveyDataHalf: function () {
      return readFileAsBooleans("C:/Users/Tomer/nodejs/webppl/workspace/webppl/resource/survey_half_data.csv")
    },

    getSurveyDataOneThird: function(){
      return readFileAsBooleans("C:/Users/Tomer/nodejs/webppl/workspace/webppl/resource/survey_one_third_data.csv");
    },

    getSurveyDataTwoThird: function(){
      return readFileAsBooleans("C:/Users/Tomer/nodejs/webppl/workspace/webppl/resource/survey_two_third_data.csv")
    },
    getHmmData: function(){
      return readFileAsFloats("C:/Users/Tomer/nodejs/webppl/workspace/webppl/resource/hmm_data.csv")
    }
};
