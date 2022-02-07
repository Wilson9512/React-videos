import axios from 'axios';

const KEY = 'AIzaSyCZE5Jk5-iv2AHEsst2n7EprOph1MpJy4Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});