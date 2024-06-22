// import favicon from '../assets/images/favicon.png';

export const SiteTitle = "Sugar Cosmetics";
export const Author = "Sazad Ahemad";
export const AuthorURL = "https://www.github.com/connect2sazad";
// export const Favicon = favicon;

export const Keywords = ["Best Site", "Best Site 2", "Best Site 3"];
export const Description = 'Test Description';

export const PORT = 7777;

export const token = localStorage.getItem('sweet-token');
export const user = localStorage.getItem('sweet-user');

export const Facebook = "https://www.facebook.com";
export const Twitter = "https://www.twitter.com";
export const Instagram = "https://www.instagram.com";
export const Tumblr = "https://www.tumblr.com";
export const Youtube = "https://www.youtube.com";
export const Pinterest = "https://www.pinterest.com";
export const Email = "email@website.com";

export const get_api = endpoint => `http://localhost:${PORT}/api/${endpoint}`;

export const sentenceCase = input => {
    const words = input.split('-');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(' ');
}
