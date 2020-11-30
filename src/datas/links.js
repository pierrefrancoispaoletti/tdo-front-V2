/* eslint-disable no-unused-vars */
import {
  faPizzaSlice, faPepperHot, faCookie, faWineBottle, faCocktail, faCoffee, faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import ItemElement from '../components/Items/ItemElement/ItemElement';
import Cuisine from '../components/Items/Cuisine/Cuisine';
import BoissonsMenu from '../components/Items/ItemsMenu/BoissonsMenu';
import CicchetteriaMenu from '../components/Items/ItemsMenu/CicchetteriaMenu';
import PizzeMenu from '../components/Items/ItemsMenu/PizzeMenu';
import VinsMenu from '../components/Items/ItemsMenu/VinsMenu';
import CuisineMenu from '../components/Items/ItemsMenu/CuisineMenu';

const Links = [
  {
    slug: '/pizze',
    icon: faPizzaSlice,
    name: 'Pizze',
    title: 'Pizze Al Forno',
    component: ItemElement,
    apiEndpoint: ['pizzas'],
    menu: PizzeMenu,

  },
  {
    slug: '/cuisine',
    icon: faUtensils,
    name: 'La Cuisine',
    title: 'La Cuisine',
    component: Cuisine,
    apiEndpoint: ['tagliate', 'ptes_et_risottos', 'les_antipasti', 'la_carne'],
    menu: CuisineMenu,

  },
  {
    slug: '/cicchetteria',
    icon: faPepperHot,
    name: 'Cicchetteria',
    title: 'La Cicchetteria',
    component: ItemElement,
    apiEndpoint: ['cichetteria'],
    menu: CicchetteriaMenu,

  },
  {
    slug: '/dolce',
    icon: faCookie,
    name: 'Dolce',
    title: 'Dolce',
    component: ItemElement,
    apiEndpoint: ['les_desserts'],

  },
  {
    slug: '/vins',
    icon: faWineBottle,
    name: 'Vinothèque',
    title: 'La Vinothèque',
    component: ItemElement,
    apiEndpoint: ['vins'],
    menu: VinsMenu,

  },
  {
    slug: '/cocktails',
    icon: faCocktail,
    name: 'Cocktails',
    title: 'Les Cocktails',
    component: ItemElement,
    apiEndpoint: ['les_cocktails'],

  },
  {
    slug: '/boissons',
    icon: faCoffee,
    name: 'Boissons',
    title: 'Les Boissons',
    component: ItemElement,
    apiEndpoint: ['les_boissons'],
    menu: BoissonsMenu,

  },

];

export default Links;
