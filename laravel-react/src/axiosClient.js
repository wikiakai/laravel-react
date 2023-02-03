import axios from "axios";

const baseApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

baseApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export default baseApi;
