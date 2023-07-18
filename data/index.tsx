import { GeneralCardType } from "../components/Common/Cards/GeneralCard";
import { ProductCardType } from "../components/Common/Cards/ProductCard";

export const LANDING_CARDS: GeneralCardType[] = [
  {
    title: 'Public and Private AI Workspaces',
    thumbnail: '/images/landing/privacy.png',
    type: 'CREATE',
    content: <p>Link multiple sources for dynamic updates <br />Support for various content types (websites, e-books, podcasts, videos)</p>
  },
  {
    title: 'Create, Share & Earn',
    thumbnail: '/images/landing/Frame 237511.png',
    type: 'EXCHANGE',
    content: <p>Link multiple sources for dynamic updates <br />Support for various content types (websites, e-books, podcasts, videos)</p>
  }
];

export const LANDING_PRODUCTS: ProductCardType[] = [
  {
    title: 'Gernal Assistant Prompt',
    price: 0,
    tags: ['ChatGPT', 'Productivity'],
    moneyType: '$',
    thumbnail: '/images/landing/products/1.png'
  },
  {
    title: 'CAN Coder Prompt',
    price: 0,
    tags: ['ChatGPT', 'Coding'],
    moneyType: '$',
    thumbnail: '/images/landing/products/2.png'
  },
  {
    title: '5C Framework Prompt for PMs',
    price: 0,
    tags: ['ChatGPT', 'PM'],
    moneyType: '$',
    thumbnail: '/images/landing/products/3.png'
  },
  {
    title: 'Idea Generator Assistant Prompt',
    price: 0,
    tags: ['ChatGPT', 'Design'],
    moneyType: '$',
    thumbnail: '/images/landing/products/4.png'
  },
];