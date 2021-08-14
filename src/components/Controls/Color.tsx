interface ColorProps {
  color: string
  index: number
  onDelete(index: number): void
}

const Color = ({ color, index, onDelete }: ColorProps) => {
  return (
    <div style={{
      background: color,
      display: 'inline-block',
      padding: '32px',
      margin: '16px',
      position: 'relative',
      borderRadius: '4px'
    }}>
      <button style={{
        background: "crimson",
        color: "white",
        display: "inline-block",
        borderRadius: "50%",
        position: "absolute",
        top: "-8px",
        right: "-8px",
        border: "none",
        fontSize: "18px",
        lineHeight: 1,
        width: "24px",
        height: "24px",
        cursor: "pointer",
        boxShadow: "0 0 1px #000"
      }}
        onClick={() => onDelete(index)}
      >x</button>
    </div>
  )
}

export default Color