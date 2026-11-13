import StatusBadge from "./StatusBadge"

function ListItem({ title, minutes, isFavorite=false }) {
  return (
    <li
      className="flex flex-wrap items-center justify-between gap-2
        border-b border-border py-3"
    >
      <div>
        <p className="flex items-center gap-2 font-bold">{isFavorite && <span>⭐</span>} {title}</p>
        <p className="text-sm text-muted"> Duração: {minutes} </p>
      </div>

      <StatusBadge label={isFavorite ? "Favorita" : "Favoritar"} isActive={isFavorite} />    
    </li>
  )
}
 
export default ListItem