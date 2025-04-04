// src/utils/dateFormatter.js
export const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit"
    }).replace(/\//g, "-");
  };