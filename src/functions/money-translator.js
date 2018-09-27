const dollarFormat = (value, s) => {
  switch(value){
    case 100 :
    case 50 : 
    case 20 : 
    case 10 : 
    case 5 :
    case 1 : return s===1 ? value+" dollar bill" : value+" dollar bills"
    case 0.25 : return s===1 ? "quarter" : "quarters"
    case 0.1 : return s===1 ? "dime" : "dimes"
    case 0.05 : return s===1 ? "nickel" : "nickels"
    case 0.01 : return s===1 ? "penny" : "pennies"
    default : return "Nothing"
  }
}

const renderTextResult = (changes) => {
  let str = ""
  changes.forEach((v,i) => {
    str += ` ${v.quantity}x ${dollarFormat(v.value,v.quantity)}`
    if(i !== changes.length-1){
      str += `,`
    }
  })
  return str + "."
}

export { dollarFormat, renderTextResult }