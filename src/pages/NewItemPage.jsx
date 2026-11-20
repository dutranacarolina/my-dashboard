import Panel from '../components/Panel.jsx'
import ItemForm from '../components/ItemForm'
import { useNavigate } from 'react-router-dom'
import { usemusica } from '../context/GamesContext.js'

function NewItemPage() {
  function handleSave(values) {
    const { addGame } = usemusica()
  const navigate = useNavigate()
  } 
 
  function handleSave(values) {
    const newmusica = { id: String(Date.now()), ...values }
    addmusica(newmusica)
    navigate('/lista')
  }
  
 
  return (
    <Panel
      id="new-item"
      title="Novo jogo"
      className="md:col-span-2 xl:row-span-3"
    >
      <ItemForm onSave={handleSave} />
    </Panel>
  )
}
 
export default NewItemPage