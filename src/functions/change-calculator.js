const changeCalculator = (inputMoney) => {
  let moneyValueConfig = [100,50,20,10,5,1,0.25,0.1,0.05,0.01]
  let changes = []
  //tune up 10 times to solve decimal issue
  let money = inputMoney*100
  moneyValueConfig.forEach(value => {
    value *= 100
    let quantity = Math.floor(money/value)
    console.log(quantity,money,value)
    if(quantity){
      let change = {value:value/100,quantity:quantity}
      changes.push(change)
      money = money - value*quantity
    }
  });
  return changes
}

export default changeCalculator;