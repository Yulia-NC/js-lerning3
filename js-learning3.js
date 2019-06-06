const smallestDivisor = (n) => {
    if (n < 1) {
      return NaN;
    } 
    if (n === 1) {
      return 1;
    }
    let div = 2;
  
    while (n % div !== 0) {
      div = div + 1;
    }
  
    return div;
};


const result = greet("person");
const greet = (str) => {
    retutn "Well hello, " + str;
}



const str1 = 'It is a \'big\' book';
const str2 = "It is a \"big\" book";
const str3 = 'It is a "big" book';
const str4 = "It is a 'big' book";



const skip = (str) => {
    let i = 0;                   //i - counter
    let result = '';
                                //rats
    while (i < str.length) {       //0<4-true         2<4-true  4<4-false
        result = result + str[i];  // result=''+'r'   ='r'+'t'
        i = i + 2;                 //i=0+2=2          i=2+2=4
    }

    return result;
}