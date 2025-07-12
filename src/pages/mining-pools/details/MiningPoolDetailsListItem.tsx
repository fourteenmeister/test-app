import type { IconifyIcon } from '@iconify/react'
import { Icon } from '@iconify/react'
import {
  Badge,
  Flex,
  List,
  ThemeIcon,
  Title,
} from '@mantine/core'

interface MiningPoolDetailsListItemProps {
  dimension?: string
  icon: string | IconifyIcon
  title: React.ReactNode
  value: React.ReactNode
}

export const MiningPoolDetailsListItem: React.FC<MiningPoolDetailsListItemProps> = ({
  dimension,
  icon,
  title,
  value,
}) => {
  return (
    <List.Item
      w="100%"
      icon={(
        <ThemeIcon color="teal" size={24} radius="xl">
          <Icon height={16} icon={icon} />
        </ThemeIcon>
      )}
    >
      <Flex align="center" justify="space-between" gap={8}>
        <Title size="h5">{title}</Title>
        <Badge size="md">
          {value}
          {dimension ? ` ${dimension}` : ''}
        </Badge>
      </Flex>
    </List.Item>
  )
}
