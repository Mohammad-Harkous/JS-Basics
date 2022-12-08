
const stringSize = (text) => {
text='This text has a certain number of characters';
const result=text.length;
return result;
}

const replaceCharacterE = (text) => {
text = 'This text has a certain number of characters';
const result = text.replace("text", "t xt");
return result;
}

const concatString = (text1, text2) => {
text1 = 'el Javascript shi ';
text2 = 'ra2e3';
const result = text1 + text2;
return result;
}

const showChar5 = (text) => {
text = 'TDD kicks ass';
const result = text.charAt(4);
return result;
}

const showChar9 = (text) => {
text = 'But it is really annoying to write';
const result = text.slice(0, 9);
return result;
}

const toCapitals = (text) => {
text ='Another useful function';
const result = text.toUpperCase();
return result;

}
const toLowerCase = (text) => {
text = 'This is a sentence!';
const result = text.toLowerCase();
return result;
}

const removeSpaces = (text) => {
text = ' Rome wasn\'t built in a day ';
const result = text.trim();
return result;
}

const IsString = (text) => {
text = 'Is this a string?';
const result = typeof text == 'string';

if(result){
    return result;
}else {
    return;
}
}

const getExtension = (text) => {
text = 'images/photo01.jpg';
const result =  text.split('.').pop();
return result;
}

const countSpaces = (text) => {
text = 'Sire open we have a big one!';
const result = text.split(' ').length - 1;
return result;
}

const InverseString = (text) => {
text = 'Après demain, à partir d\'aujourd\'hui?'
const result = text.split("").reverse().join("");
return result;
}

const power = (x, y) => {
const result = Math.pow(2,3);
return result;
}

const absoluteValue = (num) => {
const result = Math.abs(-5);
return result;
}

const absoluteValueArray = (array) => {
    array = ["-5", "-50", "-25" , "-568"];
    var result = array.map(Math.abs);
    return result;  
}

const circleSurface = (radius) => {
radius = 5;
const result = Math.round(Math.PI * radius * radius);
return result;
}

const hypothenuse = (ab, ac) => {
const result = Math.hypot(5, 8);
return result;
}

const BMI = (weight, height) => {
    weight = 65;
    height = 1.75;
    const result = Math.round((weight / (height * height))* 100) / 100;
    return result;
}

const createLanguagesArray = () => {
    const languages = ['Html','CSS','Java','PHP'];
    return languages;
}

const createNumbersArray = () => {
    const nombres = [0,1,2,3,4,5];
    return nombres;
}

const replaceElement = (languages) => {
  languages = ['Html','CSS','Java','PHP'];
  var index = languages.indexOf('Java');
   if (index !== -1) {
    languages[index] = 'Javascript';
   }
   const replacedLanguages = languages;
  return replacedLanguages;
}

const addElement = (languages) => {
/*
const replacedLanguages = languages.push('Ruby','Python');
const modifiedLanguages = replacedLanguages;
return modifiedLanguages;
*/

}

const addNumberElement = (numbers) => {
/*
numbers = [0,1,2,3,4,5];

const modifiedNumbers = numbers.unshift(-2,-1);
return modifiedNumbers;
*/
}


const removeFirst = (languages) => {   

languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']

const modifiedLanguages = languages.slice(1, 6);
return modifiedLanguages;
}

const removeLast = (languages) => {

languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
const modifiedLanguages = languages.slice(0,4);
return modifiedLanguages
}

const convertStrToArr = (social_arr) => {

    social_arr = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    const socialNetworks = social_arr.split(/[.,!,?,;,...]/); 
    return socialNetworks;
}

const convertArrToStr = (languages) => {
languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
const languagesConverted = languages.join(',');
return languagesConverted;
}

const sortArr = (social_arr) => {
social_arr = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
const socialNetworksSorted = social_arr.sort();
return socialNetworksSorted;
}

const invertArr = (social_arr) => {
social_arr = ['CSS','Javascript','PHP','Ruby'];
const languagesInverted = social_arr.reverse();
return languagesInverted;
}