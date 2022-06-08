import axios from 'axios';

export const podcast = axios.create({
  baseURL: 'https://managetavie.com/api/podcast',
  headers: { 'x-api-key': 'Ca reste entre nous !' },
});

export const mailerlite = null;

export const emailjs = null;
