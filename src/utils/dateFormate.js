function formatDate(dateString) {
    const [day, month, year] = dateString.split('/');
    const date = new Date(year, month - 1, day);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }

export default formatDate;
  