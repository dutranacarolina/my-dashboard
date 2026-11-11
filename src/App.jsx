import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import SummaryCard from "./components/SummaryCard";
import Panel from "./components/Panel";
import InfoRow from "./components/InfoRow";
import StatusBadge from "./components/StatusBadge";


function App(){
  return (
    
    <div className="flex min-h-screen flex-col  bg-background  text-foreground">
      <Header />
      <main className="grid flex-1 grid-cols-1 content-start gap-4 p-4
      md:grid-cols-2 md:grad-6 md:p-6
      xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >

        <Menu />
        <Panel id="summary" title="Resumo" className= "md:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <SummaryCard title="Jogos" value={42} icon="🎮" />
            <SummaryCard title="Horas jogadas" value={318} icon="⏱️" />
            <SummaryCard title="Zerados" value={17} icon="🏆" isHighlighted />
            <SummaryCard title="Nota média" value="8,6" />
          </div>
        </Panel>

        <Panel id="highlight" title="Membros" className= "md:col-span-2">
          
          <p className="mt-1 text-muted">
            Lista de membros destaque
          </p>

          <div className="flex flex-wrap items-center gap-2">
           <h3 className="font-heading text-xl font-bold">Nome de cada membro</h3>
           <StatusBadge label="Conheça" isActive />
           <StatusBadge label="Idades" />
          </div>

          <div className="mt-4 grid gap-x-6 md:grid-cols-2">
            <InfoRow label="Kim Nam-joon" value="31 anos" />
            <InfoRow label="Kim Seok-jin" value="33 anos" />
            <InfoRow label="Min Yoon-gi" value="33 anos" />
            <InfoRow label="Jung Hoseok" value="32 anos" />
            <InfoRow label="Park Jimin" value="30 anos" />
            <InfoRow label="Kim Taehyung" value="30 anos" />
            <InfoRow label="Jung Junkook" value="28 anos" />
          </div>
        </Panel>

        <Panel id="list" title="List" className= "md:min-h-80">
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