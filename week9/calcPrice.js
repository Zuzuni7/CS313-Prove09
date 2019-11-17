
function getPrice(weight, type) {
    var price;
    var basePrice;
    var incr = 0.15;
    
    //The Math
    try{
        
        switch(type){
            case "stamped":
                basePrice = 0.55;
                price = basePrice + (weight * incr);
                break;
            case "metered":
                basePrice = 0.50;
                price = basePrice + (weight * incr);
                break;
            case "flats":
                basePrice = 1.00;
                price = basePrice + (weight * incr);
                break;
            case "first-class":
                basePrice= 3.66;
                price = basePrice + (weight * incr);
                break;
            default:
                console.log("I think I messed up the algorith...");
                throw "Error finding price.";
    }
    console.log(weight);
   

    } catch(err) {
        //document.getElementById("error").innerHTML = err;
        console.log(err);
    }
    if(isNaN(price))
    {
        price = -1;
    } 
    return price.toFixed(2);
}

function price(req,res){
    console.log("Made it 'ere m'lord!");
    var weight = req.query.weight;
    var type = req.query.mailType;

    var price = getPrice(weight,type);
    var results = {weight: weight, type: type, price: price};
    res.render('results', results); 
}

module.exports = {calcPrice: price};