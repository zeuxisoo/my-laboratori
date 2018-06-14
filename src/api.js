import Axios from 'axios'

export default class Api {

    static agent = Axios.create({
        timeout: 3000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    });

    static getAllProjects() {
        return Api.agent.get('/data/projects.json');
    }

}
