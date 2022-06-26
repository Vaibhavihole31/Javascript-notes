var sellingprice = 199;
var listingprice = 799;
var discountpercent = ((listingprice-sellingprice)/listingprice)*100;
console.log("Discount percent is :",discountpercent)
roundupvalue = Math.round(discountpercent);
console.log("Round up value od discount is :",roundupvalue)
