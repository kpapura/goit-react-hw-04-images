import axios from "axios";

axios.defaults.baseURL="https://pixabay.com/api/"

async function getImages(query,page=1) {
    return await axios({
        params: {
            key: '36251930-42816f081666303cc975e8abf',
            q: query,
            per_page: 12,
            page,
            image_type:"photo",
            orientation:"horizontal",
        }
})
}

export default getImages;