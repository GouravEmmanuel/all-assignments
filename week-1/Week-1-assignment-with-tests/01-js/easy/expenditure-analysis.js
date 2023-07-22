/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var obj={}
  for(var i=0;i<transactions.length;i++){

    if(obj[transactions[i].category]){
      obj[transactions[i].category]=obj[transactions[i].category]+transactions[i].price;
    }else{
      obj[transactions[i].category]=transactions[i].price;
    }
  }
  //obj={"Food":23,"Drinks":45}
  //arr ={"Food","Drinks"}
  arr=Object.keys(obj);

  res=[]
  
  for(var i=0;i<arr.length;i++){
    var ob={
      category: arr[i],
      totalSpent: obj[arr[i]]
    }
    res.push(ob);
  }

  return res;
}

module.exports = calculateTotalSpentByCategory;
