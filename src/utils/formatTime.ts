function formatAMPM(date: {
  getHours: () => any;
  getMinutes: () => any;
  minutes: string | number;
}) {
  const _date = new Date();

  let hours = _date.getHours();
  let minutes = _date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export default formatAMPM;
