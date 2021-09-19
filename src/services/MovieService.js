import API from "../utils/API";

export async function getMovieBySearch(search, page) {
    try {
        let searchParam = search || "Batman";
        let movieData = await API.get(`&s=${searchParam}&page=${page}`);
        console.log("Get movie by search", movieData);
        return movieData;
    } catch (error) {
        console.log("Error get movie by search", error)
        return error;
    }
}

export async function getMovieById(id) {
    try {
        let movieData = await API.get(`&i=${id}`);
        console.log("Get movie by id", movieData);
        return movieData;
    } catch (error) {
        console.log("Error get movie by id", error)
        return error;
    }
}