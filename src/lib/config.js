import { dev } from '$app/environment';

export const title = 'ellie.best';
export const description = 'the best* ellie';
export const url = dev ? 'http://localhost:5173/' : 'https://ellie.best/';
export const formatDate = (date) => { return new Date(date).toLocaleString('en-GB', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }); };