import { Icon } from '@iconify/react'
import { Badge, Flex, UnstyledButton } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import type { MRT_ColumnDef } from 'mantine-react-table'

import { poolStatusMap } from '@/pages/mining-pools/const'
import type { MiningPool } from '@/server/types'

export const miningPoolColumns: MRT_ColumnDef<MiningPool>[] = [
  {
    accessorKey: 'name',
    header: 'Название пула',
  },
  {
    accessorKey: 'hashrateTHs',
    header: 'Хешрейт (TH/s)',
  },
  {
    accessorKey: 'activeWorkers',
    header: 'Активные воркеры',
  },
  {
    accessorKey: 'rejectRate',
    header: 'Процент ошибок',
  },
  {
    accessorKey: 'status',
    header: 'Статус',
    Cell: ({ renderedCellValue, row }) => (
      <Badge color={poolStatusMap[row.original.status]} autoContrast>{renderedCellValue}</Badge>
    ),
  },
  {
    accessorKey: 'id',
    header: 'Дополнительная информация',
    Cell: ({ renderedCellValue }) => (
      <UnstyledButton component={Link} to={`${renderedCellValue}`}>
        <Flex align="center" gap={8}>
          <Icon height={18} icon="clarity:details-line" />
          Подробнее
        </Flex>
      </UnstyledButton>
    ),
  },
]
