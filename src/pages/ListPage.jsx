import { useState } from "react";
import Panel from "../components/Panel";
import { musicas } from "../data/musicas";
import ListItem from "../components/ListsItem";

const filterOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'favorite', label: 'Favoritos' },
  { id: 'popular', label: 'Populares' },
];

function ListPage(){
    const [statusFilter, setStatusFilter] = useState('all');
    const [search, setSearch] = useState('');
    const searchTerm = search.toLowerCase().trim();

    const visibleMusicas = musicas.filter((musica) => {
        const matchesSearch = musica.title.toLowerCase().includes(searchTerm);
        if (statusFilter === 'favorite') {
          return musica.isFavorite && matchesSearch;
        } else if (statusFilter === 'popular') {
          return !musica.isFavorite && matchesSearch;
        } else {
          return matchesSearch;
        }
      });
     
    return(
        <>
         <Panel id="list" title="Músicas mais ouvidas" className="md:min-h-80">
          <label htmlFor="music-search" className="text-sm text-muted">
            Buscar pelo nome
          </label>
          <input
            id="music-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Ex.: Pesquise"
            className="mt-1 mb-3 w-full rounded-lg border border-border bg-background
              px-3 py-2 focus:border-primary focus:outline-none"
          />
          <div className="mb-4 flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setStatusFilter(option.id)}
                aria-pressed={statusFilter === option.id}
                className={`rounded-lg border px-3 py-2 font-bold ${
                  statusFilter === option.id
                    ? 'rounded-full border border-primary bg-primary text-background'
                    : 'rounded-full border border-border text-muted hover:border-primary'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {visibleMusicas.length === 0 ? (
            <p className="text-muted">Nenhuma música encontrada.</p>
          ) : (
            <ul>
              {visibleMusicas.map((musica) => (
                <ListItem
                  key={musica.id}
                  title={musica.title}
                  minutes={musica.minutes}
                  isFavorite={musica.id === 'dynamite'}
                />
              ))}
            </ul>
          )}
        </Panel>
        </>
    )
}

export default ListPage;