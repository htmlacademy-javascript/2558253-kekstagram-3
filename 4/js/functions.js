const checkLength = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  const str1 = str.replace(/\s/g,'').toLowerCase();
  const str2 = [...str1].reverse().join('');

  return str1 === str2;
};

const extractNumbers = (str) => parseInt(str.toString().replace(/\D/g, ''), 10);

window.console.log(checkLength('проверяемая строка', 20));
window.console.log(isPalindrome('топот'));
window.console.log(extractNumbers('dfs 2025 ыва 6'));
