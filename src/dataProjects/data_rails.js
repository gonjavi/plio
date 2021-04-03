import sports from '../img/rails/sports.png';
import railsEvents from '../img/events3.png';
import railsFace from '../img/face2.png';
import products from '../img/rails/products.png';

const dataProjects = [
  {
    id: 0,
    technologies: 'Ruby on Rails',
    titulo: 'EVENTS APP',
    description: 'An App that behaves similar to Eventbrite.',
    demoLink: 'https://associations-rails.herokuapp.com/',
    githubLink: 'https://github.com/gonjavi/railsAssociation',
    img: railsEvents,
  },
  {
    id: 1,
    technologies: 'Ruby on Rails - JavaScript',
    titulo: 'FACEBOOKAPP',
    description: 'A simple Facebook app.',
    demoLink: 'https://bookfaces1.herokuapp.com/',
    githubLink: 'https://github.com/gonjavi/railsfacebookapp',
    img: railsFace,
  },
  {
    id: 2,
    technologies: 'Ruby on Rails',
    titulo: 'SPORTS TRAKING API',
    description: 'An sports tracking API.',
    demoLink: 'https://trackingapi-gon.herokuapp.com/api/v1/sports.json',
    githubLink: 'https://github.com/gonjavi/RailsSportsTracking-API',
    img: sports,
  },
  {
    id: 3,
    technologies: 'Ruby on Rails',
    titulo: 'PRODUCTS API',
    description: 'An API for users with associations.',
    demoLink: 'https://products-categories-api.herokuapp.com/api/v1/users',
    githubLink: 'https://github.com/gonjavi/railsProductsApi',
    img: products,
  },
];

export default dataProjects;
