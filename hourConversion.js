function timeConversion(s) {
    let time = s.split("");
    let pmAm = time.slice(-2).join("");
    time = time.slice(0, time.length - 2);
    let hour = time.slice(0, 2).join("");
    time = time.slice(2, time.length);
  
    if (pmAm === "PM" && hour !== "12") {
      hour = Number(hour);
      hour += 12;
      hour = String(hour)
    }
  
    if (pmAm === "AM" && hour === "12") {
      hour = "00";
    }
  
    hour = hour.split("")
  
    time = hour.concat(time).join("")
  
    console.log(time);
  
  }
  
  timeConversion("07:05:45PM");