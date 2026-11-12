import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import SummaryCard from "./components/SummaryCard";
import Panel from "./components/Panel";
import InfoRow from "./components/InfoRow";
import StatusBadge from "./components/StatusBadge";
import DetailsToggle from "./components/DetailsToggle";


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
            <SummaryCard title="Integrantes" value={7} icon="👥" />
            <SummaryCard title="Premios" value={525} icon="🏆" />
            <SummaryCard title="Albuns lançados" value={9} icon="💿" isHighlighted />
            <SummaryCard title="Nota média" value="8,6" />
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

          <div className="mt-4 grid gap-x-6 md:grid-cols-2">
            <InfoRow label="Kim Nam-joon" value="Líder" />
            <InfoRow label="Kim Seok-jin" value="Vocalista" />
            <InfoRow label="Min Yoon-gi" value="Rapper" />
            <InfoRow label="Jung Hoseok" value="Rapper" />
            <InfoRow label="Park Jimin" value="Vocalista" />
            <InfoRow label="Kim Taehyung" value="Vocalista" />
            <InfoRow label="Jung Junkook" value="Vocalista" />
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