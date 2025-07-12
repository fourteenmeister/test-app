import { Box } from '@mantine/core'
import { Outlet } from '@tanstack/react-router'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'

import { miningPoolColumns } from '@/pages/mining-pools/columns'
import { Route } from '@/routes/_layout/mining-pools/_miningPoolsLayout'

import styles from './MiningPools.module.css'

const mantineTableProps = {
  striped: true,
}

export const MiningPools = () => {
  const data = Route.useLoaderData()

  const table = useMantineReactTable({
    columns: miningPoolColumns,
    data,
    mantineFilterTextInputProps: {
      classNames: {
        input: styles.filterInput,
        root: styles.filterInputRoot,
      },
    },
    mantineTableProps,
  })

  return (
    <>
      <Box w="100%">
        <MantineReactTable table={table} />
      </Box>

      <Outlet />
    </>
  )
}
