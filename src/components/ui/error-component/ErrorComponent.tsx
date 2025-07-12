import { Icon } from '@iconify/react'
import { Alert } from '@mantine/core'

import { MantineProvider } from '@/providers/MantineProvider'

const icon = <Icon icon="line-md:alert-circle-loop" height={24} />

export const ErrorComponent = () => {
  return (
    <MantineProvider>
      <Alert
        icon={icon}
        variant="filled"
        color="red"
        title="Unexpected error"
      >
        Something went wrong. Please try again.
      </Alert>
    </MantineProvider>
  )
}
