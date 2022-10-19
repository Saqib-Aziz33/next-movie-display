const apiKey = process.env.API_KEY

export const requests = {
        fetchTrending: {
            title: 'Trending',
            url: `/trending/all/week?api_key=${apiKey}&language=en-US`
        },
        fetchTopRated: {
            title: 'Top Rated',
            url: `/movie/top_rated?api_key=${apiKey}&language=en-US`
        },
        fetchActionMovies: {
            title: 'Action',
            url: `/discover/movie?api_key=${apiKey}&with_genres=28`
        },
        fetchComedyMovies: {
            title: 'Comedy',
            url: `/discover/movie?api_key=${apiKey}&with_genres=35`
        },
        fetchHorrorMovies: {
            title: 'Horror',
            url: `/discover/movie?api_key=${apiKey}&with_genres=27`
        },
        fetchRomanceMovies: {
            title: 'Romance',
            url: `/discover/movie?api_key=${apiKey}&with_genres=10749`
        },
        fetchMysteryMovies: {
            title: 'Mystery',
            url: `/discover/movie?api_key=${apiKey}&with_genres=9648`
        },
        fetchSciFiMovies: {
            title: 'Sci-Fi',
            url: `/discover/movie?api_key=${apiKey}&with_genres=878`
        },
        fetcWestrenMovies: {
            title: 'Westren',
            url: `/discover/movie?api_key=${apiKey}&with_genres=37`
        },
        fetcAnimationMovies: {
            title: 'Animation',
            url: `/discover/movie?api_key=${apiKey}&with_genres=16`
        },
        fetcTVMovies: {
            title: 'TV Movies',
            url: `/discover/movie?api_key=${apiKey}&with_genres=10770`
        }
}