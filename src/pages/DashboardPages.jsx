import { Link } from 'react-router-dom'
import { musicas } from '../data/musicas';
import Panel from '../components/Panel';
import DetailsToggle from '../components/DetailsToggle';
import InfoRow from '../components/InfoRow';
import SummaryCard from '../components/SummaryCard';
import StatusBadge from '../components/StatusBadge';
import ListItem from '../components/ListsItem';

const membros = [
  { id: 'rm', nome: 'RM', nomeCompleto: 'Kim Nam-joon', funcao: 'Líder' },
  { id: 'jin', nome: 'Jin', nomeCompleto: 'Kim Seok-jin', funcao: 'Vocalista' },
  { id: 'suga', nome: 'Suga', nomeCompleto: 'Min Yoon-gi', funcao: 'Rapper' },
  {id: 'jhope', nome: 'J-Hope', nomeCompleto: 'Jung Hoseok', funcao: 'Rapper',},
  {id: 'jimin', nome: 'Jimin', nomeCompleto: 'Park Jimin', funcao: 'Vocalista',},
  { id: 'v', nome: 'V', nomeCompleto: 'Kim Taehyung', funcao: 'Vocalista' },
  {id: 'jungkook', nome: 'Jung Kook', nomeCompleto: 'Jung Junkook', funcao: 'Vocalista',},
];

function DashboardPage(){
// … dentro de DashboardPage, antes do return:
const firstMusic = musicas.slice(0, 3)
const totalMinutes = musicas.reduce((total,musica) => total + musica.minutes, 0)
const completeMinutes = musicas.filter((musica) => musica.isFavorite). length

 const summaryCards = [
  { id: 'member', title: 'Integrantes', value: musicas.length, icon: '👥' },
  { id: 'Albums', title: 'Álbuns', value: 20, icon: '💿' },
  {id: 'Awards', title: 'Prêmios', value: completeMinutes, icon: '🏆', isHighlighted: true,},
  { id: 'rating', title: 'Nota média', value: musicas.length - completeMinutes, icon: '💜' },
];
  
return ( 
    <>
    <Panel id="summary" title="Resumo" className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {summaryCards.map((card) => (
              <SummaryCard
                key={card.id}
                title={card.title}
                value={card.value}
                icon={card.icon}
                isHighlighted={card.isHighlighted}
              />
            ))}
          </div>
        </Panel>

        <Panel id="highlight" title="Membros" className="md:col-span-2">
          <p className="mt-1 text-muted">Conheça os sete membros do BTS</p>

          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl font-bold">
              Nome de cada membro
            </h3>
            <StatusBadge label="Conheça" isActive />
            <StatusBadge label="Posição" />
          </div>

          <div className="grid gap-x-6 md:grid-cols-2">
            {membros.map((membro) => (
              <InfoRow
                key={membro.id}
                label={`${membro.nome} - ${membro.nomeCompleto}`}
                value={membro.funcao}
              />
            ))}
          </div>

          <DetailsToggle>
            <p>
              {' '}
              O BTS é formado por sete integrantes. O grupo estreou em 2013.
            </p>
          </DetailsToggle>
        </Panel>


  <Panel id="list" title="Meus jogos" className="xl:min-h-80">
    {firstMusic.length === 0 ? (
            <p className="text-muted">Nenhuma música encontrada.</p>
          ) : (
            <ul>
              {firstMusic.map((musica) => (
                <ListItem
                  key={musica.id}
                  title={musica.title}
                  minutes={musica.minutes}
                  isFavorite={musica.id === 'dynamite'}
                />
              ))}
            </ul>
          )}
     <Link to="/lista"
      className="mt-4 inline-block font-bold text-primary …">
       Ver todos as {musicas.length} muiscas →
     </Link>

  </Panel>

   <Panel id="chart" title="Grafico" className="md:min-h-80">
        Gráfico
   </Panel>
</>
)}

export default DashboardPage;