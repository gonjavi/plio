import resto from '../img/javascript/resto.png';
import library from '../img/javascript/library.png';
import weather from '../img/javascript/weather.png';
import todolist from '../img/javascript/todolist.png';

const dataProjects = [
  {
    id: 0,
    technologies: 'JAVASCRIPT',
    titulo: 'RESTAURANT PAGE',
    description: 'The entire content of the website is generated with JavaScript',
    demoLink: 'https://gonjavi.github.io/JavascriptRestaurantPage/',
    githubLink: 'https://github.com/gonjavi/JavascriptRestaurantPage',
    img: resto,
  },
  {
    id: 1,
    technologies: 'JavaScript - HTML - CSS3',
    titulo: 'LIBRARY APP',
    description: 'An app based on javascript, applying concepts of OOP',
    demoLink: 'https://gonjavi.github.io/JavascriptLibrary/',
    githubLink: 'https://github.com/gonjavi/JavascriptLibrary',
    img: library,
  },
  {
    id: 2,
    technologies: 'JavaScript - HTML - Boostrap',
    titulo: 'WEATHER APP',
    description: 'A weather forecast site built using the Open Weather Map API',
    demoLink: 'https://gonjavi.github.io/JavaScriptWeatherApp/',
    githubLink: 'https://github.com/gonjavi/JavaScriptWeatherApp',
    img: weather,
  },
  {
    id: 3,
    technologies: 'JavaScript - HTML - Materialize-CSS',
    titulo: 'TO-DO LIST',
    description: 'A basic To-Do List app developed with JavaScript',
    demoLink: 'https://gonjavi.github.io/JavascriptTodoList/',
    githubLink: 'https://github.com/gonjavi/JavascriptTodoList',
    img: todolist,
  },
];

export default dataProjects;
