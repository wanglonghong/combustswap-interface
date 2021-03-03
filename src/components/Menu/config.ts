import { MenuEntry } from '@zealous4467/cmbstswapuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://combust.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://combust.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://combust.finance/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.combust.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/combustswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.combustswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://combustswap.medium.com',
      },
    ],
  },
]

export default config
