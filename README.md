# Um site para o jogo do Dininho

Este é um simples _website_ para o jogo do dininho [(Dininho Adventures)](https://store.steampowered.com/app/1230760/Dininho_Adventures/ "Dininho Adventures na Steam").

O _website_ foi desenvolvido apenas com html, css e javascript. Ou seja, ele é apenas uma página estática.

O projeto está online! Confira [aqui!](https://lucas-lm.github.io/dininho-game-website/)

Este projeto foi um desafio proposto pela [CollabCode](https://www.youtube.com/collabcode "Youtube da CollabCode"): \#QuarentenaCode 0 - FrontEnd

## Páginas

Há apenas uma página neste _website_, que é a própria _landing page_.

## Ações do usuário

* Navegação para páginas oficiais do jogo
* Checar prévias do jogo (imagens e trailer)
* Checar informações gerais sobre o jogo
* Ver easter egg

### Conteúdo

* Informações descritivas sobre o jogo
* Prévias (imagens e vídeos) do jogo
* Link para a página do jogo na steam
* Links para redes sociais

## Features

* Responsividade

  O site é _mobile friendly_, que significa que seu _layout_ se adapta bem aos diversos tamanhos de tela: 
    * Smartphones, 
    * Tablets, 
    * Televisões, 
    * Monitores de tamanho normal,
    * Telas muito grandes (_Ultra-wide screens_)

* Carousel gallery 

  Uma galeria com previas do jogo (video e fotos) no formato _carousel/slider_.
  A navegação pelo _carousel_ pode se dar tanto por gestos em dispositivos móveis (deslizar para a direita ou para esquerda), quanto por botões nas suas laterais e o próprio clique/_touch_ no item pode mover para o alvo.
  
* Easter egg

  Ao clicar nos ovos (separadores de seções) que estão espalhados pela página, uma surpresa aparece para o usuário.
  
---

## To do

* _Parallax hero background_

  Configurar um _background_ dinâmico com efeito paralax para o _banner_ inicial no lugar da imagem estática atual.
  
* _Video controller_

  Remover controles padrões e implementar controles personalizados ao _player_ de vídeo e adicionar 'autocontroles' de acordo com a navegação no carousel: se o vídeo estiver tocando e o usuário passar para a próxima imagem (ou anterior), o _player_ deverá pausar automaticamente. Também é importante que os controles não impeçam a navegação padrão no _carousel_, ou seja, os controles não devem impedir que o usuário consiga passar para a próxima imagem com o gesto de _swipe_.
  
* _Full view_

  Adicionar uma nova feature: ao clicar na imagem que está sendo exibida no centro do _carousel_, ela deve aparecer ampliada (em tela cheia). Um _backdrop_ deve ser criado para ressaltar a imagem e desfocar o fundo. Ao clicar nele (_backdrop_) a imagem deve voltar ao estado original. Opcionalmente também pode haver um botão de close para fechar. Este efeito não deve ser aplicado ao vídeo, pois o vídeo em si já deve possuir o recurso de _full screen_ em seus controles e o comportamento padrão de clique sobre o _player_ deve ser de _play/pause_.

---

### Agradeço a CollabCode pela realização do desafio e pela chance de participar do sorteio do kindle

[CollabCode](https://www.youtube.com/collabcode "Youtube da CollabCode"): \#QuarentenaCode 0 - FrontEnd
[Figma do projeto](https://www.figma.com/file/ymr102dGHLHCINbR1dqYWr/Dininho-Adventures "Figma do projeto")
