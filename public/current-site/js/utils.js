function zeroFill(number, width) {
  width -= number.toString().length;
  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
  }
  return number + ""; // always return a string
}

/**
 * TODO: Corregir generación de decimales
 *
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 */
function formatNumber(number) {
  var f = Array(5);

  f[0] = parseInt(number % 1000);

  number /= 1000;

  f[1] = parseInt(number % 1000);

  number /= 1000;

  f[2] = parseInt(number % 1000);

  number /= 1000;

  var ret = "";
  ret += (ret == "" ? (f[2] == 0 ? "" : f[2] + "'") : zeroFill(f[2], 3) + "'");
  ret += (ret == "" ? (f[1] == 0 ? "" : f[1] + ",") : zeroFill(f[1], 3) + ",");
  ret += (ret == "" ? (f[0] == 0 ? "" : f[0]) : zeroFill(f[0], 3));

  return ret;
}

function formatTime1(d) {

  var s = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };
  var r = {};

  Object.keys(s).forEach(function(key) {
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
  });

  var cnt = 0;

  var ret = "";
  if (r.year != 0 && cnt < 1) {
    ret += " " + r.year + (r.year == 1 ? " año" : " años");
    cnt += 1;
  }
  if (r.month != 0 && cnt < 1) {
    ret += " " + r.month + (r.month == 1 ? " mes" : " meses");
    cnt += 1;
  }
  if (r.day != 0 && cnt < 1) {
    ret += " " + r.day + (r.day == 1 ? " día" : " días");
    cnt += 1;
  }
  if (r.hour != 0 && cnt < 1) {
    ret += " " + r.hour + (r.hour == 1 ? " hora" : " horas");
    cnt += 1;
  }
  if (r.minute != 0 && cnt < 1) {
    ret += " " + r.minute + (r.minute == 1 ? " minuto" : " minutos");
    cnt += 1;
  }
  if (r.second != 0 && cnt < 1) {
    ret += " " + r.second + (r.second == 1 ? " segundo" : " segundos");
    cnt += 1;
  }
  return ret;
};

var formatTime2 = function(d) {
  var s = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  var r = {};

  Object.keys(s).forEach(function(key) {
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
  });

  var cnt = 0;

  var ret = "";
  if (r.year != 0 && cnt < 2) {
    if (ret !== "") ret += " y ";
    ret += " " + r.year + (r.year == 1 ? " año" : " años");
    cnt += 1;
  }
  if (r.month != 0 && cnt < 2) {
    if (ret !== "") ret += " y ";
    ret += " " + r.month + (r.month == 1 ? " mes" : " meses");
    cnt += 1;
  }
  if (r.day != 0 && cnt < 2) {
    if (ret !== "") ret += " y ";
    ret += " " + r.day + (r.day == 1 ? " día" : " días");
    cnt += 1;
  }
  if (r.hour != 0 && cnt < 2) {
    if (ret !== "") ret += " y ";
    ret += " " + r.hour + (r.hour == 1 ? " hora" : " horas");
    cnt += 1;
  }
  if (r.minute != 0 && cnt < 2) {
    if (ret !== "") ret += " y ";
    ret += " " + r.minute + (r.minute == 1 ? " minuto" : " minutos");
    cnt += 1;
  }
  if (r.second != 0 && cnt < 2) {
    if (ret !== "") ret += " y ";
    ret += " " + r.second + (r.second == 1 ? " segundo" : " segundos");
    cnt += 1;
  }

  return ret;
};
