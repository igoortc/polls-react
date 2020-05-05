export const sanitizeDate = (dateString, options) => {
    const newDate = new Date(dateString);
    const date = newDate.toLocaleDateString();
    const time = newDate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});

    if (!options || (options.date && options.time)) return `${date} at ${time}`;
    else if (options.date) return date;
    else if (options.time) return time;
}