describe("7. About Applying What We Have Learnt", () => {

  let products;

  beforeEach(() => {
    products = [
      { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
      { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
      { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
      { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
      { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", () => {

    let i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
      if (products[i].containsNuts === false) {
        hasMushrooms = false;
        for (j = 0; j < products[i].ingredients.length; j+=1) {
          if (products[i].ingredients[j] === "mushrooms") {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) productsICanEat.push(products[i]);
      }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", () => {

    let productsICanEat = [];

    /* solve using filter() & some() / every() */

    expect(productsICanEat.length).toBe(0);
  });
  /*********************************************************************************/

  // EXTRA CHALLENGES
  it("should find the largest palindrome made from the product of two 3 digit numbers", () => {
    function largestPalindrome(){

        var arr = [];
        for(var i =999; i>100; i--){
            for(var j = 999; j>100; j--){
                var mul = j*i;
                if(isPalindrome(mul)){
                    arr.push(j * i);
                }
            }
        }

        return Math.max.apply(Math, arr);
    }

  const isPalindrome =  function(i){
        return i.toString() == i.toString().split("").reverse().join("");
    }


    // const isPalidrome = function(item) {
    //   // a palindrome is a string that is the same forwards and backwards
    //   // let n = item.length;
    //   // let f = true;
    //   // for(let i=0;i<n/2; i++)
    //   // for(let k=n;k<n/2;k--)
    //   // {
    //   //   if(item[i]!=item[k])
    //   //   f=false;
    //   // }
    //   // return f;
    //
    //  var len = item.length;
    //  for (var i = 0; i < len/2; i++) {
    //    if (item[i] !== item[len - 1 - i]) {
    //        return false;
    //    }
    //  }
    //  return true;
    // };

    // const largestPalidrome = () => {
    //   let listOfAllThreeDigitNumbers = [
    //     101, 111, 121, 131, 141, 151, 161, 171, 181, 191,
    //     202, 212,222,232,242,252,262,272,282,292,
    //     303, 313,323,333,343,353,363,373,383,393,
    //     404, 414,424,434,444,454,464,474,484,494,
    //     505,515,525,535,545,555,565,575,585,595,
    //     606,616,626,636,646,656,666,676,686,696,
    //     707,717,727,737,747,757,767,777,787,797,
    //     808,818,828,838,848,858,868,878,888,898,
    //     909,919,929,939,949,959,969,979,989,999];
    //   let list3 = listOfAllThreeDigitNumbers;
    //   let list3length = list3.length;
    //   let prodList = [];
    //   for(let i=0;i<list3length;i++)
    //   for(let j=i+1;j<list3length;j++)
    //   {
    //     //console.log(list3[i],list3[j]);
    //     prodList.push(list3[i]*list3[j]);
    //   }
    //   console.log(prodList);
    //
    //   let palindromeProd = prodList.map(x => isPalidrome(x));
    //   console.log(palindromeProd);
    //   let mx = 0;
    //   for(item in prodList)
    //   {
    //     mx = item>mx?item:mx;
    //   }
    //   return mx;
    // };
    largestPalindrome();

    expect(largestPalindrome()).toBe(906609);
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", () => {

  });

  it("should find the 10001st prime", () => {

  });
});
