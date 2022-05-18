function SearchUser()
{
	var value = document.getElementById('searchByUsernameInputIG').value;

	if(value != "")
	{
		window.open('https://www.instagram.com/' + value, '_blank');
	}
}

function Back()
{
	window.open('../index.html', '_self');
}