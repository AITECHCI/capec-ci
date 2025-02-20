import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Remplacez par l'URL de votre backend

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ajouter un token JWT aux requêtes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fonctions pour chaque endpoint
export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const getAccueil = async () => {
  const response = await api.get('/accueil');
  return response.data;
};

export const updateAccueil = async (content) => {
  const response = await api.put('/accueil', { content });
  return response.data;
};

export const getAPropos = async () => {
  const response = await api.get('/apropos');
  return response.data;
};

export const createAPropos = async (title, content) => {
  const response = await api.post('/apropos', { title, content });
  return response.data;
};

export const getEtudes = async () => {
  const response = await api.get('/etudes');
  return response.data;
};

export const createEtude = async (title, content) => {
  const response = await api.post('/etudes', { title, content });
  return response.data;
};

export const getRecherches = async () => {
  const response = await api.get('/recherches');
  return response.data;
};

export const createRecherche = async (title, content) => {
  const response = await api.post('/recherches', { title, content });
  return response.data;
};

export const getPublications = async () => {
  const response = await api.get('/publications');
  return response.data;
};

export const createPublication = async (title, content) => {
  const response = await api.post('/publications', { title, content });
  return response.data;
};

export const getFormations = async () => {
  const response = await api.get('/formations');
  return response.data;
};

export const createFormation = async (title, content) => {
  const response = await api.post('/formations', { title, content });
  return response.data;
};

export const getActivites = async () => {
  const response = await api.get('/activites');
  return response.data;
};

export const createActivite = async (title, content) => {
  const response = await api.post('/activites', { title, content });
  return response.data;
};

export const getMedias = async () => {
  const response = await api.get('/medias');
  return response.data;
};

export const createMedia = async (title, content) => {
  const response = await api.post('/medias', { title, content });
  return response.data;
};

export const getChercheurs = async () => {
  const response = await api.get('/chercheurs');
  return response.data;
};

export const createChercheur = async (name, details) => {
  const response = await api.post('/chercheurs', { name, details });
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const createUser = async (username, password) => {
  const response = await api.post('/users', { username, password });
  return response.data;
};

export const getBanners = async () => {
    const response = await api.get('/banners');
    return response.data;
};