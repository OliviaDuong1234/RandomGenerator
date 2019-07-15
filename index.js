var destinations = [
  'Paris, France (Europe). ',
  'South Island, New Zealand (Oceania).',
  'Rome, Italy (Europe).',
  'Tahiti, French Polynesia (Oceania).',
  'Hawaii, USA (North America)',

]
var p = $('p');

var randomNumber = Math.random() * 5;
var pickDestination = Math.floor(randomNumber);
var finalChoice = destinations[pickDestination];

p.text(`${finalChoice}`);
