export type PeriodKey = 'jantar' | 'seg_qui' | 'sex_dom'

export interface Period {
  label: string
  prices: number[]
}

export const PERIODS: Record<PeriodKey, Period> = {
  jantar:  { label: 'Jantar — qualquer dia', prices: [79.90, 109.90, 129.90, 189.90] },
  seg_qui: { label: 'Almoço — Seg a Qui',    prices: [114.90, 144.90, 164.90, 224.90] },
  sex_dom: { label: 'Almoço — Sex a Dom',    prices: [129.90, 159.90, 179.90, 239.90] },
}

export const COMBOS = [
  { name: 'Rodízio Livre',      desc: 'Buffet + Rodízio. Bebidas cobradas à parte.',          featured: false },
  { name: 'Combo Soft',         desc: 'Água com/sem gás + Refrigerante.',                     featured: false },
  { name: 'Combo Intermediário',desc: 'Água + Refrigerante + Suco de Laranja.',               featured: true  },
  { name: 'Combo Premium',      desc: 'Água + Refrigerante + Suco + Cervejas.',               featured: false },
] as const

export const SLIDE_LABELS = [
  'Capa', 'Identidade', 'Sobre Nós', 'Espaço', 'Gastronomia',
  'Cortes', 'Tarifas', 'Público', 'Parcerias', 'Contato',
]

export const AMENITIES = [
  { title: 'Climatização Integral', desc: 'Paredes termoacústicas + ar central premium' },
  { title: 'Projetor HD Incluso',   desc: 'Projetor HD + tela retrátil sem custo'       },
  { title: 'Valet na Porta',        desc: 'Manobrista profissional incluso'              },
  { title: 'Espaço Kids',           desc: 'Brinquedão + monitoria profissional'          },
  { title: 'Área de Montagem',      desc: 'Acesso antecipado para decoradores'           },
  { title: 'Acessibilidade Total',  desc: 'Infraestrutura universal completa'            },
]

export const OCCASIONS = [
  { title: 'Festas Sociais',            desc: 'Aniversários, formaturas, casamentos'          },
  { title: 'Corporativo',               desc: 'Confraternizações, convenções, premiações'     },
  { title: 'Colação de Grau',           desc: 'Jantares e celebrações acadêmicas'             },
  { title: 'Workshops & Palestras',     desc: 'Eventos com projeção e treinamentos'           },
  { title: 'Ações com Influenciadores', desc: 'Reels, Stories, TikTok e imprensa'            },
]

export const PARTNERSHIPS = [
  {
    title: 'Criadores de Conteúdo',
    desc: 'Experiência exclusiva com acesso aos bastidores da parrilla. Conteúdo orgânico de alto impacto.',
    tags: ['Reels', 'Stories', 'TikTok', 'YouTube'],
  },
  {
    title: 'Eventos Corporativos',
    desc: 'Reserva do salão privativo para confraternizações, lançamentos e treinamentos.',
    tags: ['Confraternizações', 'Convenções', 'Treinamentos'],
  },
  {
    title: 'Ativação de Marca',
    desc: 'Exposição de produtos durante eventos de alta visibilidade com público qualificado.',
    tags: ['Product Launch', 'Sampling', 'Branding'],
  },
  {
    title: 'Cobertura de Imprensa',
    desc: 'Acesso editorial para jornalistas e críticos gastronômicos. Pautas sobre gastronomia em Cuiabá.',
    tags: ['Gastronomia MT', 'Eventos', 'Negócios'],
  },
]

export const DEMOGRAPHICS = [
  { label: 'Faixa etária 25–45 anos', pct: 68 },
  { label: 'Classes A e B',           pct: 74 },
  { label: 'Executivos & Empresários', pct: 52 },
  { label: 'Famílias com crianças',   pct: 41 },
]

export const STATS = [
  { n: '16',   l: 'Cidades' },
  { n: '95+',  l: 'Colaboradores' },
  { n: '2018', l: 'Em Cuiabá' },
]

export const TIMELINE = [
  { year: '2006', title: 'Fundação em Goiânia',  body: 'Primeira unidade une churrasco gaúcho e buffet gourmet em um modelo inédito no Centro-Oeste.',    pill: null },
  { year: '2018', title: 'Chegada a Cuiabá',     body: 'Primeira filial nacional na Av. Miguel Sutil — divisor de águas para a expansão da rede.',       pill: 'Marco nacional' },
  { year: '2021', title: 'Inovação & Superação', body: 'Costela Fogo de Chão criada na pandemia. Tornou-se o prato mais icônico da casa.',                pill: 'Ícone gastronômico' },
  { year: '2026', title: 'Referência em Cuiabá', body: '16 cidades no Brasil. Liderança no mercado de eventos premium em Mato Grosso.',                   pill: '16 cidades' },
]

export const CUTS = [
  'Picanha Angus', 'Shoulder', 'Bife Ancho',
  'Chorizo', 'T-Bone', 'Maminha', 'Fraldinha',
]

export const BUFFET_ITEMS = [
  'Sushis & Sashimis', 'Queijos artesanais',
  'Presuntos especiais', 'Salmão norueguês',
  'Bacalhau', 'Camarão', 'Massas artesanais',
  'Sobremesas', 'Pratos quentes', 'Saladas frescas',
]
