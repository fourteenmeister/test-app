import type { IconifyIcon } from '@iconify/react'

import type { MiningPoolDetailsType } from '@/server/types'

interface DetailsListItem {
  dimension?: string
  icon: string | IconifyIcon
  key: keyof MiningPoolDetailsType
  title: React.ReactNode
}

export const detailsList: DetailsListItem[] = [
  {
    dimension: 'BTC',
    icon: 'cryptocurrency-color:btc',
    key: 'last24hRevenueBTC',
    title: 'Доход за 24 часа (BTC)',
  },
  {
    dimension: '%',
    icon: 'svg-spinners:clock',
    key: 'uptimePercent',
    title: 'Время бесперебойной работы (%)',
  },
  {
    icon: 'line-md:map-marker-alt-loop',
    key: 'location',
    title: 'Расположение',
  },
  {
    dimension: '%',
    icon: 'mdi:hand-coin-outline',
    key: 'feePercent',
    title: 'Комиссия (%)',
  },
]
