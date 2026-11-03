# Landing page RK SunLight · Roberto Kennedy

Esta é a landing page da **RK SunLight** ([@rksunlight](https://www.instagram.com/rksunlight/)), de Roberto Kennedy. Ela é estática (HTML + Bootstrap 4 + jQuery) e não precisa de servidor nem de build. Para abrir, basta dar dois cliques em `index.html` ou publicar a pasta em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages).

## Estrutura
- `index.html` contém a página inteira.
- `css/style.css` é o Bootstrap do template com as cores da RK: verde-petróleo `#0e7c66`, amarelo sol `#ffc93c` e verde escuro `#0b2b26`.
- `css/custom.css` tem os estilos próprios: hero com vídeo, faixa de destaques, unidades, passos, FAQ, WhatsApp flutuante.
- `js/main.js` controla carrosséis, rolagem suave, navbar e botão de voltar ao topo.
- `js/hero-video.js` carrega o vídeo de fundo do banner (versão leve no celular).
- `js/whatsapp-form.js` monta a mensagem do formulário e abre o WhatsApp `(98) 98525-7041`.
- `video/` guarda o vídeo do banner: `hero.mp4` (1080p), `hero-mobile.mp4` (540p) e `hero-poster.jpg`.
- `img/` guarda as imagens. As atuais são **genéricas**, então troque pelas fotos reais.

## Dados usados (levantados em 03/11/2026)
| Informação | Valor | Fonte |
|---|---|---|
| Nome no Instagram | "Roberto Kennedy \| energia solar Maranhão" | Instagram |
| Bio | "Economia na sua conta de energia · Instalações, projetos e carregadores elétricos · Maranhão · Orçamento rápido" | Instagram |
| Destaques | INSTALAÇÕES, INTER SOLAR SP | Instagram |
| Descrição | "Especializada em habilitar seus clientes a produzirem a energia elétrica que consomem através da geração fotovoltaica"; atende "diversas cidades do Maranhão e do Piauí" | Sites rksunlight.com.br e rksunlight.com (hoje fora do ar) |
| WhatsApp principal | (98) 98525-7041 | rksunlight.com e post do Instagram (ago/2026) |
| WhatsApp secundário | (98) 98303-4941 | Os dois sites |
| E-mail | energiasolarrk@gmail.com | rksunlight.com.br |
| Unidades | Centro Empresarial Shopping da Ilha, Torre 1, Sala 404 (Cohama, São Luís) · Rua Duque de Caxias, 183, Centro, Brejo/MA | Os dois sites |
| Horário | Seg a Sex 08:00–18:30 · Sáb 08:00–12:00 | rksunlight.com |

**Confirme com o cliente:**
- **WhatsApp principal:** confirme qual é o número atual. Também aparece (98) 99913-1231 no site antigo.
- **Unidade de Brejo:** confirme se continua ativa e qual é o horário dela.
- **CNPJ:** não foi encontrado. Se ele quiser, adicione no rodapé.

**Não usado de propósito:** o percentual de economia ("até 80%" ou "até 95%", as fontes divergem) e um exemplo de conta antes e depois que aparecia no site antigo. Ficaram de fora porque não foi possível confirmar os valores. Se o cliente enviar, dá para criar uma seção de resultados como a do site da Mendes.

## Imagens para substituir (mantenha o mesmo nome do arquivo)
| Arquivo | Onde aparece | Sugestão |
|---|---|---|
| `video/hero.mp4` (+ `hero-mobile.mp4` e `hero-poster.jpg`) | Fundo do banner | Vídeo de uma instalação da RK |
| `img/about.jpg` | Seção "Sobre" (retrato, ~700×800) | Foto do Roberto Kennedy em obra ou na Intersolar |
| `img/gallery-1.jpg`, `img/gallery-6.jpg`, `img/carousel-2.jpg` | Cards de serviços | Instalação, projeto e um carregador elétrico instalado |
| `img/gallery-1.jpg` a `img/gallery-6.jpg` | Galeria "Instalações" (quadradas) | Fotos do destaque INSTALAÇÕES do Instagram |
| `img/carousel-1.jpg` | Janela "Como funciona a energia solar?" | Foto de uma instalação |
| `img/favicon.svg` | Ícone da aba | Logo da RK SunLight |
