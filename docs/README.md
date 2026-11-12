# Portfólio Profissional — Alan Medeiros

Site de uma página com Apresentação, Sobre mim, Competências, Projetos e Contato.
Feito com HTML5, CSS3 e JavaScript puros, sem dependências, pronto para o GitHub Pages.

## Estrutura

```
index.html   # conteúdo e marcação semântica
styles.css   # layout responsivo (mobile first) e tema
script.js    # menu mobile, destaque da seção ativa e ano do rodapé
docs/        # brief, PRD, arquitetura e revisão de segurança
specs/       # especificação da FEAT-001
```

## Rodar localmente

Abra o `index.html` no navegador. Se preferir um servidor local:

```bash
python3 -m http.server 8000
```

## Publicar no GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → branch `main`, pasta `/ (root)`.

## Critérios de aceite (FEAT-001)

- [x] Nome profissional e resumo visíveis ao carregar
- [x] Menu navega até a seção correspondente
- [x] Sem rolagem horizontal em 390 px
- [x] Links do GitHub abrem em nova aba com `rel="noopener noreferrer"`
- [x] Navegação por teclado (link "pular para o conteúdo", foco visível, Esc fecha o menu)
- [ ] Teste em celular real após a publicação
