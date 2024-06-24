import cn from "../helpers/cn"

interface ContainerProps {
  children: React.ReactNode
  width?: string
  className?: string
}

const Container = ({
  children,
  width = '100%',
  className = '',
}: ContainerProps) => {
  return (
    <div
      style={{ maxWidth: width }}
      className={cn('mx-auto px-4', className)}
    >
      {children}
    </div>
  )
}

export default Container
