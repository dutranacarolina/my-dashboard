import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import SummaryCard from "./components/SummaryCard";
import Panel from "./components/Panel";
import InfoRow from "./components/InfoRow";
import StatusBadge from "./components/StatusBadge";
import DetailsToggle from "./components/DetailsToggle";



const summaryCards = [
  { id: 'member', title: 'Integrantes', value: 7, icon: '👥' },
  { id: 'Albums', title: 'Álbuns', value: 9, icon: '💿' },
  { id: 'Awards', title: 'Prêmios', value: 17, icon: '🏆', isHighlighted: true },
  { id: 'rating', title: 'Nota média', value: '8,6', icon: '💜' },
]


function App(){
  return (
    
    <div className="flex min-h-screen flex-col  bg-background  text-foreground">
      <Header />
      <main className="grid flex-1 grid-cols-1 content-start gap-4 p-4
      md:grid-cols-2 md:grad-6 md:p-6
      xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >

        <Menu />
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

        <Panel id="highlight" title="Membros" className= "md:col-span-2">
          
          <p className="mt-1 text-muted">
             Conheça os sete membros do BTS
          </p>

          <div className="flex flex-wrap items-center gap-2">
           <h3 className="font-heading text-xl font-bold">Nome de cada membro</h3>
           <StatusBadge label="Conheça" isActive />
           <StatusBadge label="Idades" />
          </div>

          <div className="grid gap-x-6 md:grid-cols-2">

          </div>

          <DetailsToggle>
           <p> O BTS é formado por sete integrantes.
            O grupo estreou em 2013.</p>
          </DetailsToggle>

        </Panel>

        <Panel id="list" title="Músicas mais ouvidas" className= "md:min-h-80">
          Lista
        </Panel>

        <Panel id="chart" title="Grafico" className= "md:min-h-80">
          Gráfico
        </Panel>


      </main>
      <Footer />
    </div>
    
  )
}

export default App;