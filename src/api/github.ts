import axios from "axios";

const apiGithub = axios.create({ baseURL: 'https://api.github.com/users/fazt' })

export default apiGithub;