export enum MiningPoolStatus {
  DEGRADED = 'degraded',
  OFFLINE = 'offline',
  ONLINE = 'online',
}

export interface MiningPool {
  id: string
  name: string
  hashrateTHs: number
  activeWorkers: number
  rejectRate: number
  status: MiningPoolStatus
}

export interface MiningPoolDetailsType {
  last24hRevenueBTC: number
  uptimePercent: number
  location: string
  feePercent: number
}
