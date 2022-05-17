function Search(){
	var value = document.getElementById('searchInput').value;
	if (value != "")
	{
		window.open("https://www.youtube.com/results?search_query=" + value, '_blank');
	}
}