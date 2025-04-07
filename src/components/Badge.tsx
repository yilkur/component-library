interface BadgeProps {
  text: string,
  color: 'neutral' | 'danger' | 'success' | 'info'
}

const Badge = ({ text = 'Button text', color = 'neutral' }: BadgeProps) => (
  <button className={`${color} rounded-xs bg-red-400`}>
    {text}
  </button>
)

export default Badge