const formatDate = (dateString) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Date(dateString).toLocaleString("en-US", options);
};
export default formatDate;
