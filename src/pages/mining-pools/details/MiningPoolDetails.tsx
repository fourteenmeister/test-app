import { List, Modal, Title } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'

import { detailsList } from '@/pages/mining-pools/details/const'
import { MiningPoolDetailsListItem } from '@/pages/mining-pools/details/MiningPoolDetailsListItem'
import { Route } from '@/routes/_layout/mining-pools/_miningPoolsLayout/$poolId'

export const MiningPoolDetails = () => {
  const pool = Route.useLoaderData()
  const navigate = useNavigate()
  const onClose = async () => {
    await navigate({
      to: '..',
    })
  }

  return (
    <>
      <Modal
        centered
        opened
        onClose={onClose}
        title={<Title component="div" size="h3">Дополнительная информация</Title>}
        size="lg"
      >
        <List spacing="xs" size="sm" center>
          {detailsList.map(item => (
            <MiningPoolDetailsListItem
              {...item}
              key={item.key}
              value={pool[item.key]}
            />
          ))}
        </List>
      </Modal>
    </>
  )
}
