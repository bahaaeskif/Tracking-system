export function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

export const convertDate = (date) => {
  // const date1 = new Date(date);
  // return `${date1.toLocaleDateString("en-US")}`;

  const date1 = new Date(date);

  // Months array for converting month index to name
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month, day, and year
  const month = months[date1.getMonth()];
  const day = date1.getDate();
  const year = date1.getFullYear();

  // Format the date
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // Note: getMonth() returns 0 for January, 11 for December, so add 1 to normalize
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}
