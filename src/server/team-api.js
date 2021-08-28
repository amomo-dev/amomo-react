import axios from 'axios';

const requestTeam = (() => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_IP,
  });

  return {
    async get() {
      const response = await instance.get('team');
      return response.data;
    },
    async getById(teamId) {
      const response = await instance.get(`team/${teamId}`);
      return response.data;
    },
    async createTeam(info) {
      const response = await instance.post('team', {
        name: info.name,
        title: info.title,
        game: info.game,
        count: info.count,
        rank: info.rank,
        isPublic: info.isPublic,
      });
      return response;
    },
  };
})();

export default requestTeam;
