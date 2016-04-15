




// main product array


var bikes = [
// card one
// var barbieBike =
{
		image: "img/barbie.jpg",
		imageAlt: "barbie",
		name: "Barbie Bike",
		description: "Cruise down the streets of Malibu wherever you are with this SUPER cute fashion statement and transportation vessel all in one!",
		price: "PRICE: $900.00 USD"
},
// card two
// var bigWheel =
{
		image: "img/bigWheel.jpg",
		imageAlt: "bigWheel",
		name: "The Big Wheel",
		description: "Relive the glory days, when you were the hottest 7 year-old on the cul-de-sac. Skinned knees and Capri Suns available as upgrades.",
		price: "PRICE: $1,000.00 USD"
},
// card three
// var cafeRacer =
{
		image: "img/cafeRacer.jpg",
		imageAlt: "cafeRacer",
		name: "Cafe Racer",
		description: "Make it to your next writing session in style. You might not be able to pay rent, but who cares when you look this good?!",
		price: "PRICE: Does it matter?"
},
// card four
// var madMax =
{
		image: "img/madMax.jpg",
		imageAlt: "madMax",
		name: "Mad Max",
		description: "Kill everyone you come across on this beast. Combining the classic styling of the roadster with the firepower of a mid-class warship, we guarantee you won't ever get pulled over again.",
		price: "PRICE: $12,000.00 USD"
},
// card five
// var miniBike =
{
		image: "img/miniBike.png",
		imageAlt: "miniBike",
		name: "Mini Bike",
		description: "You can probably get about 70 miles to the gallon on this hog.",
		price: "PRICE: eh...how about 50 bucks?"
},
// card six
// var fixie =
{
		image: "img/fixie.jpg",
		imageAlt: "fixie",
		name: "Fixie",
		description: "You probably haven't heard of this bike before; it was manufacted in a rural village right outside Nice, France in the mid 60's. All fair-trade, totally sustainable components and not at all guaranteed to work.",
		price: "PRICE: Market value of a latte at the latest artisinal coffee shop/chocolatier/barber shop/boutique."
},
// card seven
// var powerRangers =
{
		image: "img/powerRangers.jpg",
		imageAlt: "powerRangers",
		name: "Rocky's T-Rex Bike",
		description: "Kick some serious Putty ass. One of our vintage models, this old dinosaur still packs a hell of a punch and is sure to morph you right into the envy of your entire Cub Scout troop.",
		price: "PRICE: $4,500.00 USD"
},
// card eight
// var vespa =
{
		image: "img/vespa.jpg",
		imageAlt: "vespa",
		name: "Vespa",
		description: "Still haven't grown into your big-boy pants? Not quite ready for the real deal? This is the perfect bike for you. We include a full-coverage helmet so no one has to see that it's you riding this pathetic thing.",
		price: "PRICE: All of your dignity."
},

// {
// 		image: ,
// 		name: ,
// 		description: ,
// 		price:
// }

]

// var bikes = [barbieBike, bigWheel, cafeRacer, fixie, madMax, miniBike, powerRangers, vespa]

var loopCount = bikes.length;

// console.log("bike variable length", loopCount);

var bikeHTML = document.getElementById("productCards");

for (var i = 0; i < loopCount; i++)	{
	bikeHTML.innerHTML +=
	"<article  class='card'>" +
			"<img src='" + bikes[i].image + "' alt='" + bikes[i].imageAlt + "'>" +
			"<h3 class='productName'>" + bikes[i].name + '</h3>' +
		"<p class='productDescription'>" + bikes[i].description + '</p>' +
		"<h4 class='price'>" + bikes[i].price + "</h4>" +
	"</article>"
}

console.log("product card for loop", bikeHTML.innerHTML);


