import { tz } from "moment-timezone";

export const TIMEZONE = "Asia/Singapore";

// format datetime to dd MMM yyyy
export const formatDate = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};

// 1. To break string if exceeded approx. 20 chars. Avoid splitting word
// 2. Must be in caps
export const formatSplitText = splitText => {
  if (!splitText) return null;
  const trimText = splitText.trim();
  const textLength = trimText.length;
  if (textLength > 20) {
    // explanation of indexOf:
    // - string.indexOf(searchvalue, start)
    const firstPart = trimText.substr(0, trimText.indexOf(" ", 19));
    const secondPart = trimText.substring(
      trimText.indexOf(" ", 19),
      textLength
    );
    return (
      <span>
        {firstPart.toUpperCase()} <br /> {secondPart.toUpperCase()}
      </span>
    );
  }

  return trimText.toUpperCase();
};
