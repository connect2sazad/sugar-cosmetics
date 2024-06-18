// import favicon from '../assets/images/favicon.png';

export const SiteTitle = "Sugar Cosmetics";
export const Author = "Sazad Ahemad";
export const AuthorURL = "https://www.github.com/connect2sazad";
// export const Favicon = favicon;
export const PORT = 7777;

export const token = localStorage.getItem('sweet-token');
export const user = localStorage.getItem('sweet-user');

export const facebook = "https://www.facebook.com";
export const twitter = "https://www.twitter.com";
export const instagram = "https://www.instagram.com";
export const linkedin = "https://www.linkedin.com";

export const get_api = endpoint => `http://localhost:${PORT}/api/${endpoint}`;