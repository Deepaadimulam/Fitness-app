export const exerciseOptions = {
    method: 'GET',
    headers: {
		'x-rapidapi-key': '41501095f5msh4e687d973311100p1afc76jsn6959eeffd622',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
		'x-rapidapi-key': '41501095f5msh4e687d973311100p1afc76jsn6959eeffd622',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	},
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };