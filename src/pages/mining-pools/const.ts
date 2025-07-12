import type { MiningPool } from '@/server/types'
import { MiningPoolStatus } from '@/server/types'

export const poolsTableCaptions: Partial<Record<keyof MiningPool, string>> = {
  activeWorkers: 'Активные воркеры',
  hashrateTHs: 'Хешрейт (TH/s)',
  name: 'Название пула',
  rejectRate: 'Процент ошибок',
  status: 'Статус',
  id: 'Дополнительная информация',
}

export const poolStatusMap = {
  [MiningPoolStatus.DEGRADED]: 'yellow',
  [MiningPoolStatus.OFFLINE]: 'red',
  [MiningPoolStatus.ONLINE]: 'green',
}
