const checkLength = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  const str1 = str.replace(/\s/g,'').toLowerCase();
  const str2 = [...str1].reverse().join('');

  return str1 === str2;
};

const extractNumbers = (str) => parseInt(str.toString().replace(/\D/g, ''), 10);

const convertTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map((v, i) => i === 1 ? v.padEnd(2, '0') : v).map(Number);

  return hours * 60 + minutes;
};

const isMeetingWithinDay = (str1, str2, str3, duration) => {
  const dayStart = convertTimeToMinutes(str1);
  const dayEnd = convertTimeToMinutes(str2);
  const meetingStart = convertTimeToMinutes(str3);
  const meetingEnd = meetingStart + duration;

  return meetingStart >= dayStart && meetingEnd <= dayEnd;
};

window.console.log(checkLength('проверяемая строка', 20));
window.console.log(isPalindrome('топот'));
window.console.log(extractNumbers('dfs 2025 ыва 6'));
window.console.log(isMeetingWithinDay('08:00', '17:30', '14:00', 90));
window.console.log(isMeetingWithinDay('8:00', '17:30', '08:00', 900));
