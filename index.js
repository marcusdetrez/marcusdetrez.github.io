function countPopup() {
	setTimeout("Popup()",10000);
	return false;
}

function Popup () {
	if (window.confirm("Fun fact: Lundinn est le nom islandais du macareux moine, clique ok pour en savoir plus!")) { 
  window.open("https://fr.wikipedia.org/wiki/Macareux_moine");
}}

