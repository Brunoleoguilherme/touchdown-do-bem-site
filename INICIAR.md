# 🏈 Touchdown do Bem — Site Oficial

## Como iniciar o projeto

### 1. Instalar dependências

Abra o terminal nessa pasta e rode:

```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse **http://localhost:3000** no navegador.

---

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx           ← Layout global (Navbar + Footer + fontes)
│   ├── globals.css          ← Estilos globais, paleta, classes utilitárias
│   ├── page.tsx             ← Página principal (monta todas as seções)
│   └── transparencia/
│       └── page.tsx         ← Página de Transparência
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx       ← Menu fixo com dropdown e mobile menu
    │   └── Footer.tsx       ← Footer completo
    │
    └── sections/
        ├── Hero.tsx             ← Tela cheia com stats e botões
        ├── ImpactNumbers.tsx    ← Cards de impacto animados
        ├── QuemSomos.tsx        ← Storytelling + depoimento fundador
        ├── EsporteMudaVidas.tsx ← 10 valores do esporte em cards
        ├── NossosPolos.tsx      ← 6 polos com horários e endereços
        ├── AlemDoEsporte.tsx    ← Inglês, bolsas, eventos, etc.
        ├── FormandoCampeoes.tsx ← Campeonatos com visual escuro premium
        ├── LA2028.tsx           ← Timeline até os Jogos Olímpicos
        ├── NaMidia.tsx          ← TV Globo, Band, NFL Flag Brasil...
        ├── Historias.tsx        ← Depoimentos em carrossel
        ├── Parceiros.tsx        ← Logo cloud de parceiros
        ├── Patrocinadores.tsx   ← Seção de captação com Lei de Incentivo
        └── QueroApoiar.tsx      ← CTA final: Patrocinar / Doar / Voluntário / Inscrever
```

---

## Paleta de cores

| Nome    | Hex       | Uso                        |
|---------|-----------|----------------------------|
| Verde   | `#00A651` | Cor principal, CTAs        |
| Amarelo | `#FFD100` | Destaques, conquistas      |
| Navy    | `#1A2B4A` | Seções escuras, textos     |
| Grafite | `#2D2D2D` | Texto corrido              |
| Branco  | `#FFFFFF` | Fundo principal            |

---

## Para adicionar fotos reais do projeto

- **Hero:** Substituir o placeholder em `src/components/sections/Hero.tsx` por `<Image>` do Next.js apontando para a foto do acervo
- **Polos:** Adicionar fotos de cada polo na pasta `public/images/polos/`
- **Galeria:** Criar componente `Galeria.tsx` com fotos em masonry usando `public/images/galeria/`
- **Parceiros:** Substituir emojis pelos logos reais em `public/images/parceiros/`

---

## Para publicar (deploy)

Recomendado: **Vercel** (gratuito para projetos open source)

```bash
npm install -g vercel
vercel
```

Ou conecte o repositório diretamente em vercel.com.

---

## Próximos passos

- [ ] Adicionar fotos reais do acervo do projeto
- [ ] Configurar domínio `touchdowndobem.org.br`
- [ ] Integrar formulários de inscrição e doação
- [ ] Adicionar vídeos reais do YouTube
- [ ] Configurar Google Analytics
- [ ] Criar página de Galeria com masonry real
- [ ] Integrar Instagram API para feed live
