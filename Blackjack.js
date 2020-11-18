
//dealer hand
function dealerHand()
{
	var sHTML = '';
	var deck = shuffle(makeDeck());
	
	sHTML += playHand(deck);
	
	document.getElementById('divDealerHand').innerHTML = sHTML;
}

//create the deck
function makeDeck()
{
	var faceSymbol = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	var faceValue =  [ 2,   3,   4,   5,   6,   7,   8,   9,   10,  10,  10,  10,   1];
	var suitSymbol = ['&spadesuit;', '&clubsuit;', '&heartsuit;', '&diamondsuit;'];
	var deck = [];

	for (var i = 0; i < faceSymbol.length; i++) {
		for (var j = 0; j < suitSymbol.length; j++) {
			deck.push({'symbol': faceSymbol[i] + suitSymbol[j], 'value': faceValue[i]});
		}
	}
	
	return deck;
}

//shuffle the deck into a random order
function shuffle (array) 
{
  var i = 0, j = 0, temp;

  //randomly arrange the deck using this for loop
  for (i = array.length - 1; i > 0; i -= 1) {
    }
  
  return array;
}

//play the hand
function playHand(deck)
{
	var done = false;
	var sHTML = '';
	var hand = [deck[0], deck[1]];
	var deckIndex = 1;
	var isBlackjack, isBusted, isStay;
	
	while (!done) {
		sHTML += formatHand(hand) + '&nbsp; &nbsp; &nbsp;';
		
		isBlackjack = blackjack(hand);
		isBusted = busted(hand);
		isStay = stay(hand);

        //use these if/elseif code to determine Blackjack, busted and stay	
		if (isBlackjack) {
		} else if (isBusted.busted) {
		} else if (isStay.stay) {
		} else {
		}
	}
	
	return sHTML;
}

function formatHand(hand)
{
	var sHTML = '';
	
	for (var i = 0; i < hand.length; i++) {
		sHTML += hand[i].symbol + ' ';
	}
	
	return sHTML;
}

//This is where you pass in the values of the hand and formatted them
function blackjack(hand)
{
	return (hand[0].value == 1 && hand[1].value == 10) || (hand[0].value == 10 && hand[1].value == 1);
}

function busted(hand)
{
	var total = totalHand(hand, 4);

	return {'busted': (total > 21), 'total': total};
}

function stay(hand)
{
	var total = totalHand(hand, 1);
	
	return {'stay': (total >= 17), 'total': total};
}

//this is where you determine the value of your hand
function totalHand(hand, hardAces)
{
	var total = 0;
	var nAces = 0;
	
	for (var i = 0; i < hand.length  && total <= 21; i++) {
		var cardVal = hand[i].value;
		if (cardVal == 1) {
			nAces++;
			if (nAces <= hardAces) {
				total += 1;
			} else {
				total += 11;
			}
		} else {
			total += cardVal;
		}
	}
	
	return total;
}