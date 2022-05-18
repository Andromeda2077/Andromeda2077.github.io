function SearchUser()
{
	var value = document.getElementById('searchByUsernameInputTT').value;

	if(value != '')
	{
		if(value.includes('@', 0) == true)
		{
			window.open('https://www.tiktok.com/' + value, '_blank');
		}
		else
		{
			window.open('https://www.tiktok.com/@' + value, '_blank');
		}
	}
}

function Back()
{
	window.open('../index.html', '_self');
}