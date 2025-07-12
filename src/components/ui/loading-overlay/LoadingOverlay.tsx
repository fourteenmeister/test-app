import { LoadingOverlay as MantineLoadingOverlay } from '@mantine/core'

interface LoadingOverlayProps {
  visible: boolean
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible }) => {
  return (
    <MantineLoadingOverlay
      visible={visible}
      zIndex={1000}
      loaderProps={{ size: 72 }}
      overlayProps={{
        backgroundOpacity: 0.1,
        radius: 'sm',
        blur: 1,
      }}
    />
  )
}
