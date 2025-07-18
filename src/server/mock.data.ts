import type { MiningPool, MiningPoolDetailsType } from '@/server/types'
import { MiningPoolStatus } from '@/server/types'

export const MiningPools: MiningPool[] = [
  {
    id: 'pool-1',
    name: 'US East Pool',
    hashrateTHs: 830.5,
    activeWorkers: 1240,
    rejectRate: 0.012,
    status: MiningPoolStatus.ONLINE,
  },
  {
    id: 'pool-2',
    name: 'EU Central Pool',
    hashrateTHs: 460.3,
    activeWorkers: 876,
    rejectRate: 0.045,
    status: MiningPoolStatus.DEGRADED,
  },
  {
    id: 'pool-3',
    name: 'Asia West Pool',
    hashrateTHs: 712.8,
    activeWorkers: 985,
    rejectRate: 0.017,
    status: MiningPoolStatus.ONLINE,
  },
  {
    id: 'pool-4',
    name: 'South America Pool',
    hashrateTHs: 320.4,
    activeWorkers: 534,
    rejectRate: 0.039,
    status: MiningPoolStatus.DEGRADED,
  },
  {
    id: 'pool-5',
    name: 'Africa North Pool',
    hashrateTHs: 215.9,
    activeWorkers: 478,
    rejectRate: 0.021,
    status: MiningPoolStatus.OFFLINE,
  },
  {
    id: 'pool-6',
    name: 'Canada East Pool',
    hashrateTHs: 912.1,
    activeWorkers: 1100,
    rejectRate: 0.010,
    status: MiningPoolStatus.ONLINE,
  },
  {
    id: 'pool-7',
    name: 'Europe West Pool',
    hashrateTHs: 652.3,
    activeWorkers: 754,
    rejectRate: 0.033,
    status: MiningPoolStatus.DEGRADED,
  },
  {
    id: 'pool-8',
    name: 'Australia East Pool',
    hashrateTHs: 488.6,
    activeWorkers: 620,
    rejectRate: 0.029,
    status: MiningPoolStatus.OFFLINE,
  },
  {
    id: 'pool-9',
    name: 'Japan Pool',
    hashrateTHs: 789.0,
    activeWorkers: 998,
    rejectRate: 0.013,
    status: MiningPoolStatus.ONLINE,
  },
  {
    id: 'pool-10',
    name: 'India North Pool',
    hashrateTHs: 333.7,
    activeWorkers: 612,
    rejectRate: 0.042,
    status: MiningPoolStatus.DEGRADED,
  },
  {
    id: 'pool-11',
    name: 'Russia East Pool',
    hashrateTHs: 410.2,
    activeWorkers: 730,
    rejectRate: 0.016,
    status: MiningPoolStatus.OFFLINE,
  },
  {
    id: 'pool-12',
    name: 'Middle East Pool',
    hashrateTHs: 598.4,
    activeWorkers: 845,
    rejectRate: 0.027,
    status: MiningPoolStatus.ONLINE,
  },
  {
    id: 'pool-13',
    name: 'Antarctica Pool',
    hashrateTHs: 25.0,
    activeWorkers: 12,
    rejectRate: 0.055,
    status: MiningPoolStatus.OFFLINE,
  },
]

export const MiningPoolDetails: Record<string, MiningPoolDetailsType> = {
  'pool-1': {
    last24hRevenueBTC: 0.035,
    uptimePercent: 99.82,
    location: 'Ashburn, VA',
    feePercent: 1.0,
  },
  'pool-2': {
    last24hRevenueBTC: 0.029,
    uptimePercent: 98.74,
    location: 'Frankfurt, Germany',
    feePercent: 1.2,
  },
  'pool-3': {
    last24hRevenueBTC: 0.041,
    uptimePercent: 99.93,
    location: 'Singapore',
    feePercent: 0.9,
  },
  'pool-4': {
    last24hRevenueBTC: 0.033,
    uptimePercent: 99.65,
    location: 'São Paulo, Brazil',
    feePercent: 1.3,
  },
  'pool-5': {
    last24hRevenueBTC: 0.038,
    uptimePercent: 99.88,
    location: 'Toronto, Canada',
    feePercent: 1.1,
  },
  'pool-6': {
    last24hRevenueBTC: 0.027,
    uptimePercent: 97.45,
    location: 'Mumbai, India',
    feePercent: 1.5,
  },
  'pool-7': {
    last24hRevenueBTC: 0.036,
    uptimePercent: 99.72,
    location: 'London, UK',
    feePercent: 1.0,
  },
  'pool-8': {
    last24hRevenueBTC: 0.042,
    uptimePercent: 99.95,
    location: 'Tokyo, Japan',
    feePercent: 0.8,
  },
  'pool-9': {
    last24hRevenueBTC: 0.031,
    uptimePercent: 98.92,
    location: 'Seoul, South Korea',
    feePercent: 1.4,
  },
  'pool-10': {
    last24hRevenueBTC: 0.039,
    uptimePercent: 99.87,
    location: 'Sydney, Australia',
    feePercent: 1.2,
  },
  'pool-11': {
    last24hRevenueBTC: 0.026,
    uptimePercent: 96.83,
    location: 'Johannesburg, South Africa',
    feePercent: 1.6,
  },
  'pool-12': {
    last24hRevenueBTC: 0.034,
    uptimePercent: 99.54,
    location: 'Paris, France',
    feePercent: 1.0,
  },
}
