const checkLength = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  const str1 = str.replace(/\s/g,'').toLowerCase();
  const str2 = [...str1].reverse().join('');

  return str1 === str2;
};

const extractNumbers = (str) => {
  const number = parseInt(str.toString().replace(/\D/g, ''), 10);

  return isNaN(number) ? NaN : number;
};

checkLength();
isPalindrome();
extractNumbers();
