import axios from 'axios';

const KEY = 'AIzaSyCI7Yn7mGezNHoWuIc6SL8qQ7H27K6Ydys'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 4,
    key: KEY,
  },
})