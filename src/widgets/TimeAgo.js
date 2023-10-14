function getFormattedDate(date, preformattedDate = false) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${minutes}`;
  }

  if (preformattedDate === "Hoy") {
    return `${hours}:${minutes}`;
  }
  if (preformattedDate === "Ayer") {
    // Today at 10:20
    // Yesterday at 10:20
    return `${preformattedDate}`;
  }

  // Is this year
  return `${day}/${month}/${year}`;
}

function timeAgo(dateParam, onlyMinutes = false) {
  if (!dateParam) {
    return null;
  }

  const date = typeof dateParam === "object" ? dateParam : new Date(dateParam);
  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) {
    return "ahora";
  } if (seconds < 60) {
    return `${seconds} seconds ago`;
  } if (seconds < 90) {
    return "hace un minuto";
  } if (minutes < 60) {
    return `${minutes} minutes ago`;
  } if (isToday || onlyMinutes) {
    return getFormattedDate(date, "Hoy"); // Today at 10:20
  } if (isYesterday) {
    return getFormattedDate(date, "Ayer"); // Yesterday at 10:20
  } if (isThisYear) {
    return getFormattedDate(date, false); // 10. January at 10:20
  }

  return getFormattedDate(date); // 10. January 2017. at 10:20
}

export default timeAgo;
