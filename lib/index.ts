const easyDateFormat = (date: Date): string => {
  const year: number = date.getFullYear();
  const month: string = leftPad(date.getMonth() + 1);
  const day: string = leftPad(date.getDate());
  const h: string = leftPad(date.getUTCHours());
  const m: string = leftPad(date.getUTCMinutes());
  const s: string = leftPad(date.getUTCSeconds());

  return `${year}-${month}-${day} ${h}:${m}:${s}`;
};

const leftPad = (num: number): string => {
  const str = num.toString();
  return str.length >= 2 ? str : `0${str}`;
};

export default easyDateFormat;
