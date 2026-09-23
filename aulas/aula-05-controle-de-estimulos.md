---
theme: ../tema
title: "Aula 05 · Controle de estímulos: o papel do contexto"
info: A contingência de três termos, o treino discriminativo, a generalização e o
  seu gradiente, as classes de estímulos, a abstração e as cadeias de respostas
date: "2026-09-23"
author: FASM · Psicologia Comportamental
transition: slide-left
download: true
layout: lead
index: "05"
kicker: Psicologia Comportamental · FASM
subtitle: "O que vem antes do comportamento também controla a sua frequência."
---



---
layout: agenda
title: O caminho de hoje
items:
  - { topic: "Controle de estímulos e a contingência de três termos" }
  - { topic: "Estímulo discriminativo, estímulo delta e treino discriminativo" }
  - { topic: "Generalização de estímulos e gradiente de generalização" }
  - { topic: "Classes de estímulos, atenção e abstração" }
  - { topic: "Encadeamento de respostas e reforço condicionado" }
  - { topic: "Fechamento e aplicação" }
---



---
layout: default
kicker: De onde viemos
title: As aulas anteriores ficaram do lado da consequência
---

Até aqui a contingência tinha dois termos. O comportamento operante produzia uma consequência, e era ela que alterava a sua frequência.

- Reforço positivo e negativo **aumentam** a frequência: <strong>R → Sᴿ⁺</strong> e <strong>R → Sᴿ⁻</strong>
- Punição positiva e negativa a **reduzem**: <strong>R → Sᴾ⁺</strong> e <strong>R → Sᴾ⁻</strong>
- A extinção a reduz suspendendo o reforço que mantinha a resposta

Hoje entra o que acontece **antes** da resposta, e o que o contexto faz com ela.


---
layout: quote
kicker: Moreira e Medeiros (2007), abertura do capítulo 6
quote: Por que nos comportamos, às vezes, de formas tão <span class="destaque">diferentes em situações diferentes</span>?
author: moreira e medeiros (2007)
---

---
layout: section
index: "01"
kicker: Parte um
title: Controle de estímulos e a contingência de três termos
subtitle: O contexto entra na análise, e a unidade básica fica completa.
---

---
layout: define
kicker: O conceito que organiza a aula
term: Controle de estímulos
definition: A influência dos <span class="destaque">estímulos
  antecedentes</span> sobre o comportamento, isto é, o efeito que o contexto tem
  sobre ele.
points:
  - "<strong>Controlar</strong> quer dizer apenas alterar a probabilidade de o comportamento ocorrer"
  - "A consequência continua sendo o principal determinante do operante"
  - "Mas o operante não ocorre no vácuo: ele ocorre sempre em algum contexto"
---

---
layout: default
title: Por que o antecedente controla o comportamento
---

O antecedente controla pela **relação que tem com a consequência do responder**.

- Estímulo associado ao reforço **aumenta** a probabilidade da resposta quando é apresentado
- Estímulo que sinaliza extinção ou punição **diminui** essa probabilidade

<Callout tom="nota" icon="lucide:link">
Todo controle exercido por um antecedente é <strong>emprestado</strong> da consequência que se seguiu àquela resposta naquele contexto.
</Callout>

---
layout: define
term: Operante discriminado
definition: O comportamento operante que, emitido <span class="destaque">em
  determinado contexto</span>, produz consequências reforçadoras.
points:
  - "O operante que estudamos até aqui era <strong>R → C</strong>"
  - "O operante discriminado é <strong>Sᴰ – R → C</strong>"
  - "Os estímulos que o antecedem e controlam a sua ocorrência são os <strong>estímulos discriminativos</strong>"
---

<!--
Operante: a classe de respostas que produz mudanças no ambiente e é afetada por
elas. "Discriminado" indica que essa classe está também sob controle de
estímulos antecedentes.
-->

---
layout: columns
kicker: Discriminação operante
title: Respostas específicas diante de estímulos específicos
columns:
  - title: "A resposta que é reforçada"
    items:
      - "Garrafa de tampa de rosca: <strong>girar</strong>"
      - "Lata: <strong>puxar</strong> o anel"
      - "Na presença da mãe: dizer <strong>«mãe»</strong>"
  - title: "A mesma resposta no outro contexto"
    items:
      - "Puxar a tampa de rosca não abre a garrafa"
      - "Girar o anel não abre a lata"
      - "Na presença da mãe, dizer «pai» não é atendido"
---

Cada estímulo antecedente controla **qual** resposta produzirá consequência reforçadora.

---
layout: diagram
title: A contingência de três termos
note: O traço indica <strong>ocasião</strong>; a seta indica <strong>produção</strong>. São relações diferentes.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Diagrama da contingência de três termos: a ocasião, ligada por um traço à resposta, que por uma seta produz a consequência. Sob cada termo, as variações que ele pode assumir.">
  <rect x="24" y="44" width="252" height="88" rx="10" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <text x="150" y="80" text-anchor="middle" style="font-family:var(--fonte-titulo);font-size:25px;fill:var(--tinta)">Ocasião</text>
  <text x="150" y="110" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:21px;fill:var(--tinta-2)">O</text>

  <line x1="284" y1="88" x2="346" y2="88" stroke="var(--tinta)" stroke-width="3" />
  <text x="315" y="70" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">dá ocasião</text>

  <rect x="354" y="44" width="252" height="88" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="480" y="80" text-anchor="middle" style="font-family:var(--fonte-titulo);font-size:25px;fill:var(--tinta)">Resposta</text>
  <text x="480" y="110" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:21px;fill:var(--tinta-2)">R</text>

  <line x1="614" y1="88" x2="666" y2="88" stroke="var(--acento)" stroke-width="3" />
  <polygon points="678,88 662,80 662,96" fill="var(--acento)" />
  <text x="646" y="70" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--acento)">produz</text>

  <rect x="684" y="44" width="252" height="88" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="810" y="80" text-anchor="middle" style="font-family:var(--fonte-titulo);font-size:25px;fill:var(--tinta)">Consequência</text>
  <text x="810" y="110" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:21px;fill:var(--tinta-2)">C</text>

  <line x1="24" y1="162" x2="936" y2="162" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <text x="150" y="198" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--acento);letter-spacing:.06em">PODE SER</text>
  <text x="150" y="228" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">Sᴰ — sinaliza reforço</text>
  <text x="150" y="256" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">Sᐞ — sinaliza extinção</text>

  <text x="480" y="198" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--acento);letter-spacing:.06em">O QUE VARIA</text>
  <text x="480" y="228" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">a topografia,</text>
  <text x="480" y="256" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">isto é, a forma da resposta</text>

  <text x="810" y="198" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--acento);letter-spacing:.06em">PODE SER</text>
  <text x="810" y="228" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">reforçadora ou punitiva</text>
  <text x="810" y="256" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">ou nenhuma — extinção</text>
</svg>

<!--
Topografia: a descrição física da resposta, a forma do movimento. Duas respostas
de topografia diferente podem pertencer à mesma classe operante, se produzirem a
mesma consequência.
-->

---
layout: default
kicker: A unidade básica de análise
title: Três termos
---

<Tabela
  :dados="[
    ['Termo', 'O que varia', 'Exemplo'],
    ['Ocasião (O)', 'Sᴰ ou Sᐞ', 'A loja marcada «Aberta» ou «Fechada» no aplicativo'],
    ['Resposta (R)', 'a topografia', 'Girar, puxar, dizer, escrever, pedir'],
    ['Consequência (C)', 'reforço, punição ou nenhuma', 'Receber o pedido, levar uma multa, nada acontecer'],
  ]"
  cabecalho
  compacta
/>

Todos os operantes, do mais simples ao mais complexo, são analisados nesses três termos.

<!--
O capítulo escreve a contingência tanto como Sᴰ – R → C quanto como O – R → C.
A segunda forma é mais geral: cobre também o caso em que a ocasião é um Sᐞ.
-->

---
layout: define
kicker: O que se faz com os três termos
term: Análise funcional
definition: Encaixar um comportamento numa <span class="destaque">contingência de
  três termos</span>.
points:
  - "Em que circunstâncias o comportamento ocorre — o primeiro termo"
  - "Quais consequências o mantêm — o terceiro termo"
  - "Sem o primeiro termo, a mesma resposta em dois contextos parece o mesmo comportamento"
---

<!--
Análise funcional: a descrição das relações entre o comportamento e as variáveis
ambientais de que ele é função. É o método de trabalho da análise do
comportamento, na pesquisa e na clínica.
-->

---
layout: default
kicker: Ponto de parada · 1
title: Qual é o Sᴰ?
---

Numa clínica-escola, um menino de 7 anos xinga durante a sessão apenas quando a estagiária está de fone, falando com a supervisora. Nessas horas ela interrompe a chamada e vai até ele. Quando ela está sem o fone, ele não xinga.

<v-clicks>

- **A.** O xingamento é o Sᴰ, porque é ele que produz a aproximação da estagiária
- **B.** O fone é o Sᴰ para xingar, e a atenção da estagiária é a consequência que mantém a resposta
- **C.** A estagiária sem o fone é o Sᴰ, porque é nela que o menino consegue atenção
- **D.** O fone elicia o xingamento

</v-clicks>

---
layout: default
kicker: Ponto de parada · 1 — resposta
title: "A alternativa correta é a <span class=\"destaque\">B</span>"
---

<Tabela
  :dados="[
    ['A', 'Errada — xingar é a resposta, o segundo termo; o Sᴰ é o que antecede a resposta'],
    ['B', 'Correta — o fone antecede a resposta e sinaliza que xingar será seguido de atenção'],
    ['C', 'Errada — é sem o fone que a resposta não ocorre; a estagiária sem fone é o Sᐞ'],
    ['D', 'Errada — o fone não produz o xingamento, apenas dá a ocasião; eliciar é relação respondente'],
  ]"
  realce="linha:2"
/>

<!--
Eliciar: produzir a resposta, relação própria do paradigma respondente. O
contraste entre eliciar e dar ocasião é assunto da Parte 2.
-->

---
layout: section
index: "02"
kicker: Parte dois
title: "Estímulo discriminativo, estímulo delta e treino discriminativo"
subtitle: Como um estímulo do ambiente passa a controlar uma resposta.
---

---
layout: define
term: Estímulo discriminativo (Sᴰ)
definition: O estímulo que antecede uma resposta e sinaliza que ela <span
  class="destaque">será reforçada</span>.
points:
  - "Está correlacionado com a <strong>presença</strong> do reforço"
  - "Ele não produz a resposta: ele fornece a ocasião para que ela ocorra"
  - "Emitida em outra circunstância, a mesma resposta não é reforçada"
---

<!--
A notação Sᴰ vem de "discriminative stimulus". Lê-se "S-dê". O capítulo também
escreve SD.
-->

---
layout: panels
kicker: Sᴰ no dia a dia
title: Três estímulos que sinalizam que a resposta vai funcionar
panels:
  - icon: lucide:smartphone
    title: A loja «Aberta»
    items:
      - "Fazer o pedido no aplicativo"
      - "O pedido é aceito e a comida chega"
  - icon: lucide:door-open
    title: A sala com a supervisora dentro
    items:
      - "Bater e entrar para tirar uma dúvida"
      - "A dúvida é respondida"
  - icon: lucide:traffic-cone
    title: O sinal verde
    items:
      - "Atravessar a faixa"
      - "Chega-se ao outro lado sem multa nem risco"
---

<!--
Aplicativo de entrega: o exemplo cumpre o papel que o restaurante com as luzes
acesas cumpre no capítulo — um estímulo visível que sinaliza a disponibilidade
do reforço.
-->

---
layout: define
term: Estímulo delta (Sᐞ)
definition: O estímulo que antecede uma resposta e sinaliza que ela <span
  class="destaque">não será reforçada</span>.
points:
  - "Está correlacionado com a <strong>extinção</strong> — a indisponibilidade do reforço"
  - "A loja marcada «Fechada»; a sala vazia; o sinal vermelho"
  - "O organismo <strong>discrimina</strong> quando responde diante do Sᴰ e não responde diante do Sᐞ"
---

<!--
O símbolo ᐞ é a letra grega delta. Lê-se "S-delta". O capítulo escreve SΔ.
-->

---
layout: vs
kicker: Os dois antecedentes
title: O que separa um do outro
label: ×
left:
  title: Sᴰ
  items:
    - "Sinaliza que a resposta <strong>será</strong> reforçada"
    - "A frequência dela é <strong>alta</strong> na presença dele"
right:
  title: Sᐞ
  items:
    - "Sinaliza que a resposta <strong>não será</strong> reforçada"
    - "A frequência dela é <strong>baixa</strong> na presença dele"
---


---
layout: default
title: A função é da consequência, não do contexto
---

Um mesmo estímulo é Sᴰ para uma resposta e Sᐞ para outra. Quem define a função é a consequência que a resposta produz naquele contexto.

- A mãe presente é **Sᴰ** para dizer «mãe» e **Sᐞ** para dizer «pai»
- O grupo de amigos é **Sᴰ** para contar a piada; a sala de aula é **Sᐞ** para a mesma piada
- Nenhum estímulo «é» discriminativo: ele é discriminativo **para uma resposta**

<Callout tom="alerta" icon="lucide:triangle-alert">
Perguntar «este estímulo é Sᴰ ou Sᐞ?» não tem resposta. A pergunta completa é <strong>Sᴰ para qual resposta?</strong>
</Callout>

---
layout: statement
kicker: O critério
title: O controle está estabelecido quando a resposta é <span class="destaque">provável</span> diante do Sᴰ e <span class="destaque">improvável</span> diante do Sᐞ
---

---
layout: define
term: Treino discriminativo
definition: Reforçar a resposta na presença do Sᴰ e <span
  class="destaque">extingui-la</span> na presença do Sᐞ.
points:
  - "Também chamado de <strong>reforçamento diferencial</strong>"
  - "É um procedimento, não um resultado: descreve o que o ambiente faz"
  - "O resultado dele é a discriminação"
---

<!--
Reforçamento diferencial: reforçar em uma condição e extinguir em outra. O termo
volta na Parte 3, aplicado ao gradiente de generalização, e na Parte 4,
aplicado à abstração.
-->

---
layout: diagram
title: As duas linhas de um treino discriminativo
note: Repetido muitas vezes, o pedido passa a ocorrer quase só na presença da «cara boa».
---

<svg viewBox="0 0 960 300" role="img" aria-label="Duas linhas. Na primeira, cara feia dá ocasião a pedir o carro, e o pedido é negado: extinção. Na segunda, cara boa dá ocasião a pedir o carro, e as chaves são entregues: reforço.">
  <text x="24" y="52" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--acento);letter-spacing:.06em">Sᐞ</text>
  <rect x="82" y="22" width="222" height="64" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="193" y="60" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">pai de «cara feia»</text>
  <line x1="312" y1="54" x2="368" y2="54" stroke="var(--tinta)" stroke-width="3" />
  <rect x="376" y="22" width="222" height="64" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="487" y="60" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">«me empresta o carro?»</text>
  <line x1="606" y1="54" x2="658" y2="54" stroke="var(--vermelho)" stroke-width="3" />
  <polygon points="670,54 654,46 654,62" fill="var(--vermelho)" />
  <rect x="678" y="22" width="258" height="64" rx="10" fill="none" stroke="var(--vermelho)" stroke-width="2" />
  <text x="807" y="48" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--vermelho)">«Não.»</text>
  <text x="807" y="72" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--vermelho);letter-spacing:.06em">EXTINÇÃO</text>

  <line x1="24" y1="128" x2="936" y2="128" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <text x="24" y="196" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--acento);letter-spacing:.06em">Sᴰ</text>
  <rect x="82" y="166" width="222" height="64" rx="10" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <text x="193" y="204" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">pai de «cara boa»</text>
  <line x1="312" y1="198" x2="368" y2="198" stroke="var(--tinta)" stroke-width="3" />
  <rect x="376" y="166" width="222" height="64" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="487" y="204" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">«me empresta o carro?»</text>
  <line x1="606" y1="198" x2="658" y2="198" stroke="var(--verde)" stroke-width="3" />
  <polygon points="670,198 654,190 654,206" fill="var(--verde)" />
  <rect x="678" y="166" width="258" height="64" rx="10" fill="none" stroke="var(--verde)" stroke-width="2" />
  <text x="807" y="192" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--verde)">«Tome as chaves.»</text>
  <text x="807" y="216" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--verde);letter-spacing:.06em">REFORÇO</text>

  <text x="480" y="276" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta-2)">a expressão facial passa a controlar o momento do pedido</text>
</svg>

<!--
A discriminação de expressões faciais é uma das primeiras que se aprende, e é o
exemplo com que o capítulo apresenta o procedimento (Figura 6.3).
-->

---
layout: default
title: Quase tudo o que sabemos fazer passou por aqui
---

- Ler: cada palavra que você reconhece foi reforçada diante daquela forma escrita e não de outra
- Nomear pessoas, objetos e cores — boa parte da aquisição de linguagem
- Comportar-se de um jeito na sala de aula e de outro no bar
- Usar um aparelho novo, obedecer a sinais de trânsito, responder a um e-mail de trabalho



---
layout: diagram
kicker: Dois paradigmas, duas relações
title: O Sᴰ não elicia a resposta
note: A seta indica <strong>produção</strong>; o traço indica apenas <strong>contexto</strong> para a resposta ocorrer.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Acima, o paradigma respondente: o estímulo, por uma seta, produz a resposta. Abaixo, o paradigma operante: o estímulo discriminativo, por um traço, dá ocasião à resposta, que por uma seta produz o reforço.">
  <text x="24" y="44" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--acento);letter-spacing:.06em">PARADIGMA RESPONDENTE</text>
  <rect x="120" y="62" width="250" height="64" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="245" y="92" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">cisco no olho</text>
  <text x="245" y="114" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--tinta-2)">S</text>
  <line x1="378" y1="94" x2="446" y2="94" stroke="var(--acento)" stroke-width="3" />
  <polygon points="458,94 442,86 442,102" fill="var(--acento)" />
  <text x="418" y="76" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--acento)">produz</text>
  <rect x="466" y="62" width="250" height="64" rx="10" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <text x="591" y="92" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">lacrimejar</text>
  <text x="591" y="114" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--tinta-2)">R</text>
  <text x="740" y="100" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta-2)">a resposta é eliciada</text>

  <line x1="24" y1="152" x2="936" y2="152" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <text x="24" y="188" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--acento);letter-spacing:.06em">PARADIGMA OPERANTE</text>
  <rect x="24" y="206" width="222" height="64" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="135" y="236" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">ver o cisco</text>
  <text x="135" y="258" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--tinta-2)">Sᴰ</text>
  <line x1="254" y1="238" x2="322" y2="238" stroke="var(--tinta)" stroke-width="3" />
  <text x="288" y="220" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">dá ocasião</text>
  <rect x="330" y="206" width="252" height="64" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="456" y="236" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">dizer «isto é um cisco»</text>
  <text x="456" y="258" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--tinta-2)">R</text>
  <line x1="590" y1="238" x2="652" y2="238" stroke="var(--acento)" stroke-width="3" />
  <polygon points="664,238 648,230 648,246" fill="var(--acento)" />
  <text x="626" y="220" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--acento)">produz</text>
  <rect x="672" y="206" width="264" height="64" rx="10" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <text x="804" y="236" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">o outro ajuda a tirar</text>
  <text x="804" y="258" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--tinta-2)">Sᴿ</text>
</svg>

<!--
Eliciar: o estímulo produz a resposta, que ocorre de forma regular sempre que
ele é apresentado. É a relação do reflexo, estudada na aula 02.
-->

---
layout: default
kicker: Atividade
title: Elicia ou fornece contexto?
---

Em cada par, o **estímulo é o mesmo** e a resposta muda. Classifique cada linha.

<Tabela
  :dados="[
    ['Estímulo', 'Resposta'],
    ['Estar num lugar alto', 'Taquicardia'],
    ['Estar num lugar alto', 'Segurar no corrimão'],
    ['Uma alfinetada no braço', 'Contração do braço'],
    ['Uma alfinetada no braço', 'Dizer «isso dói!»'],
    ['O barulho do dentista', 'Taquicardia e sudorese'],
    ['O barulho do dentista', 'Dizer «vai com calma, doutor»'],
  ]"
  cabecalho
  compacta
/>

<!--
Sudorese: sudação aumentada, uma das respostas do sistema nervoso autônomo que
compõem o padrão respondente de ansiedade.
-->

---
layout: vs
kicker: O critério que separa os dois casos
title: Eliciada ou emitida
label: ×
left:
  title: Eliciada
  items:
    - "Dado o estímulo, a resposta ocorre"
    - "O cisco no olho faz lacrimejar, queira a pessoa ou não"
right:
  title: Emitida
  items:
    - "Dado o Sᴰ, a resposta fica mais provável"
    - "Ver o cisco não obriga ninguém a dizer «isto é um cisco»"
---

---
layout: default
kicker: Ponto de parada · 2
title: O treino discriminativo funcionou?
---

Uma psicóloga atende uma adolescente que fala dos conflitos com a mãe na sessão, mas não fala deles em casa. Na sessão, o relato é acolhido; em casa, quando ela começa, a mãe muda de assunto.

<v-clicks>

- **A.** Não houve treino discriminativo, porque ninguém programou as consequências de propósito
- **B.** Houve treino discriminativo: falar do conflito é reforçado na presença da psicóloga e extinto na presença da mãe
- **C.** Houve generalização, porque a adolescente fala do mesmo assunto em dois lugares
- **D.** Houve punição do relato em casa, já que ele deixou de ocorrer ali

</v-clicks>

---
layout: default
kicker: Ponto de parada · 2 — resposta
title: "A alternativa correta é a <span class=\"destaque\">B</span>"
---

<Tabela
  :dados="[
    ['A', 'Errada — o treino discriminativo descreve o arranjo das consequências, não a intenção de quem as produz'],
    ['B', 'Correta — reforço numa condição, extinção na outra: é a definição do procedimento'],
    ['C', 'Errada — ela fala do assunto em um contexto e não no outro, que é o oposto de generalizar'],
    ['D', 'Errada — a mãe não apresenta nem retira estímulo; ela deixa de reforçar, e isso é extinção'],
  ]"
  realce="linha:2"
/>

<!--
A alternativa D é o erro mais comum: tratar toda queda de frequência como
punição. Punição exige apresentação ou retirada de um estímulo contingente à
resposta; extinção é a suspensão do reforço que a mantinha.
-->

---
layout: section
index: "03"
kicker: Parte três
title: Generalização de estímulos e gradiente de generalização
---

---
layout: define
term: Generalização operante
definition: A resposta é emitida diante de <span class="destaque">estímulos
  novos</span> que partilham alguma propriedade física com o Sᴰ.
points:
  - "O Sᴰ é aquele na presença do qual a resposta foi reforçada no passado"
  - "Quanto maior a similaridade física, maior a probabilidade de a resposta ocorrer"
  - "É o mesmo raciocínio da generalização respondente, do comportamento respondente"
---

<!--
Propriedade física: cor, forma, tamanho, textura, intensidade — o que pode ser
medido no estímulo, independentemente da função que ele tenha.
-->

---
layout: panels
kicker: Generalizar no dia a dia
title: Responder certo diante do que nunca se viu
panels:
  - icon: lucide:cup-soda
    title: A garrafa nunca vista
    items:
      - "Tampa de rosca de um modelo novo"
      - "A pessoa gira, e a garrafa abre"
  - icon: lucide:smartphone
    title: O celular de outro modelo
    items:
      - "Menu diferente, ícones em outro lugar"
      - "A pessoa consegue fazer a ligação"
  - icon: lucide:landmark
    title: O aplicativo de outro banco
    items:
      - "Aberto pela primeira vez"
      - "Procura-se o Pix onde ele costuma ficar"
---

---
layout: default
kicker: O que conta é a semelhança física
title: Quanto mais parecido com o Sᴰ, mais provável a resposta
---

Uma criança foi modelada a dizer «bola» diante de uma bola de futebol. A bola de futebol é o Sᴰ. O que acontece diante das outras?

- Diante da bola de vôlei ela dirá «bola» com **facilidade**: tamanho e forma são quase os mesmos
- Diante da bola de futebol americano dirá com **menos probabilidade**: a forma mudou
- Nenhuma das duas esteve no treino; o que as aproxima do Sᴰ é a semelhança física

<!--
Modelagem: o reforçamento de aproximações sucessivas de uma resposta até que ela
atinja a topografia desejada. Foi o procedimento estudado na aula 03.
-->

---
layout: figura
image: /generalizacao-bola.png
alt: Bolas de futebol, basquete, futebol americano e golfe, um globo e um vaso, cada vez menos parecidos com a bola de futebol
---

---
layout: figura
image: /generalizacao-elsa.png
alt: A personagem Elsa e várias versões dela, das mais fiéis às mais distantes do original
---

---
layout: figura
image: /generalizacao-michael.png
alt: Fotos de Michael Jackson ao lado de imagens cada vez menos parecidas com ele
---



---
layout: default
kicker: Os dois lados do processo
title: O que a generalização poupa, e o que ela custa
---

Sem generalização, cada estímulo novo exigiria uma modelagem nova. É ela que torna a aprendizagem rápida o bastante para ser útil.

- Ninguém precisa ser ensinado a abrir cada garrafa de rosca do mundo
- Mas generalizar nem sempre é reforçado
- A criança que chama qualquer homem adulto de «papai» está generalizando, e ali não será reforçada

---
layout: define
kicker: Como se mede o processo
term: Gradiente de generalização
definition: O gráfico que mostra a <span class="destaque">frequência da
  resposta</span> diante de diferentes variações do Sᴰ.
points:
  - "É a forma de saber <strong>quanto</strong> de generalização está ocorrendo"
  - "O que se lê é o formato da curva, não um ponto isolado dela"
---



---
layout: diagram
title: Três ratos, uma mesma tendência
note: Quanto mais o estímulo se afasta do Sᴰ, menor a frequência da resposta na presença dele — e o quanto ela cai muda de sujeito para sujeito.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Gráfico de linhas. No eixo horizontal, as intensidades de luz de cem por cento a zero. No eixo vertical, a frequência de respostas. As três curvas caem da esquerda para a direita: a do rato 2 cai devagar, a do rato 3 cai depressa, e a do rato 1 fica entre as duas.">
  <text x="24" y="40" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--acento);letter-spacing:.06em">FREQUÊNCIA DE RESPOSTAS</text>

  <line x1="100" y1="52" x2="100" y2="238" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="100" y1="238" x2="920" y2="238" stroke="var(--linha-forte)" stroke-width="2" />

  <polyline points="140,70 320,118 500,168 680,212 860,232" fill="none" stroke="var(--tinta-2)" stroke-width="3" />
  <polyline points="140,86 320,100 500,128 680,172 860,216" fill="none" stroke="var(--azul)" stroke-width="3" />
  <polyline points="140,60 320,166 500,220 680,234 860,236" fill="none" stroke="var(--acento)" stroke-width="3" />

  <text x="152" y="272" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">100%</text>
  <text x="320" y="272" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">75%</text>
  <text x="500" y="272" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">50%</text>
  <text x="680" y="272" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">25%</text>
  <text x="860" y="272" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">0%</text>
  <text x="140" y="296" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta-2)">intensidade da luz — a 100% é o Sᴰ</text>

  <line x1="640" y1="58" x2="676" y2="58" stroke="var(--azul)" stroke-width="3" />
  <text x="686" y="64" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">Rato 2 — generaliza mais</text>
  <line x1="640" y1="84" x2="676" y2="84" stroke="var(--acento)" stroke-width="3" />
  <text x="686" y="90" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">Rato 3 — discrimina mais</text>
  <line x1="640" y1="110" x2="676" y2="110" stroke="var(--tinta-2)" stroke-width="3" />
  <text x="686" y="116" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">Rato 1</text>
</svg>

<!--
As curvas reproduzem o formato da Figura 6.6 do capítulo. O eixo vertical não
traz números de propósito: o que se lê num gradiente é a forma da curva, não o
valor de um ponto.
-->

---
layout: vs
kicker: Como se lê um gradiente
title: O formato da curva é a medida
label: ×
left:
  title: Larga
  items:
    - "A resposta ocorre em muitas variações do Sᴰ"
    - "Mais <strong>generalização</strong>"
right:
  title: Estreita
  items:
    - "A resposta ocorre em poucas variações do Sᴰ"
    - "Mais <strong>discriminação</strong>"
---

---
layout: columns
kicker: O gradiente não é fixo
title: Dois procedimentos que o modificam
columns:
  - title: "Reforçamento diferencial"
    items:
      - "Reforçar numa variação e extinguir nas outras"
      - "O gradiente <strong>estreita</strong>"
      - "A criança passa a dizer «papai» só diante do pai"
  - title: "Reforçamento adicional"
    items:
      - "Reforçar a resposta também nas outras variações"
      - "O gradiente <strong>alarga</strong>"
      - "Quem aprendeu «avião» diante de um caça é reforçado diante dos outros aviões"
---

<!--
Reforçamento adicional: o nome vem de "adicionar" novos estímulos à classe na
presença da qual a resposta será reforçada.
-->

---
layout: diagram
title: O mesmo gradiente, antes e depois
note: O procedimento não muda a resposta; muda <strong>diante de quantos estímulos</strong> ela ocorre.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Dois gráficos lado a lado. À esquerda, o reforçamento diferencial transforma uma curva larga tracejada numa curva estreita cheia. À direita, o reforçamento adicional transforma uma curva estreita tracejada numa curva larga cheia.">
  <text x="240" y="36" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--acento);letter-spacing:.06em">REFORÇAMENTO DIFERENCIAL</text>
  <line x1="60" y1="56" x2="60" y2="222" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="60" y1="222" x2="430" y2="222" stroke="var(--linha-forte)" stroke-width="2" />
  <polyline points="80,112 168,134 256,164 344,194 420,214" fill="none" stroke="var(--tinta-2)" stroke-width="3" stroke-dasharray="7 6" />
  <polyline points="80,74 168,158 256,206 344,218 420,220" fill="none" stroke="var(--acento)" stroke-width="3" />
  <text x="240" y="252" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">a curva <tspan style="fill:var(--acento)">estreita</tspan></text>
  <text x="240" y="278" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta-2)">mais discriminação</text>

  <line x1="480" y1="46" x2="480" y2="282" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <text x="720" y="36" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--acento);letter-spacing:.06em">REFORÇAMENTO ADICIONAL</text>
  <line x1="540" y1="56" x2="540" y2="222" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="540" y1="222" x2="910" y2="222" stroke="var(--linha-forte)" stroke-width="2" />
  <polyline points="560,80 648,160 736,206 824,218 900,220" fill="none" stroke="var(--tinta-2)" stroke-width="3" stroke-dasharray="7 6" />
  <polyline points="560,88 648,106 736,138 824,176 900,206" fill="none" stroke="var(--verde)" stroke-width="3" />
  <text x="720" y="252" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">a curva <tspan style="fill:var(--verde)">alarga</tspan></text>
  <text x="720" y="278" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta-2)">mais generalização</text>

  <text x="24" y="296" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">tracejado: antes</text>
</svg>

---
layout: default
kicker: Ponto de parada · 3
title: Que processo descreve o que aconteceu?
---

Num serviço de psicologia infantil, um menino aprendeu a pedir ajuda dizendo «me ajuda» com a terapeuta. Na semana seguinte ele disse «me ajuda» para a recepcionista, para o segurança e para a mãe — e nas três vezes foi atendido.

<v-clicks>

- **A.** Discriminação, porque ele pediu ajuda a três pessoas diferentes
- **B.** Generalização, e o atendimento nas três situações funciona como reforçamento adicional
- **C.** Generalização, e o atendimento nas três situações estreita o gradiente
- **D.** Treino discriminativo, porque houve reforço em mais de um contexto

</v-clicks>

---
layout: default
kicker: Ponto de parada · 3 — resposta
title: "A alternativa correta é a <span class=\"destaque\">B</span>"
---

<Tabela
  :dados="[
    ['A', 'Errada — discriminar é responder num contexto e não em outro; aqui ele respondeu em todos'],
    ['B', 'Correta — a resposta ocorreu diante de estímulos novos parecidos com o Sᴰ, e o reforço nessas variações amplia a classe'],
    ['C', 'Errada — quem estreita o gradiente é o reforçamento diferencial, que exige extinção nas variações'],
    ['D', 'Errada — o treino discriminativo exige reforço numa condição e extinção em outra; aqui não houve extinção'],
  ]"
  realce="linha:2"
/>

<!--
A alternativa C é a mais instrutiva: ela acerta o processo e erra o efeito.
Nomear o processo e prever o que ele faz com o gradiente são duas operações
distintas.
-->

---
layout: section
index: "04"
kicker: Parte quatro
title: "Classes de estímulos, atenção e abstração"
subtitle: Como muitos estímulos diferentes passam a controlar uma mesma resposta.
---

---
layout: define
term: Classe de estímulos
definition: O conjunto de estímulos que serve de <span class="destaque">ocasião
  para uma mesma resposta</span>.
points:
  - "Por <strong>similaridade física</strong>: os estímulos se parecem"
  - "Por <strong>função</strong>: os estímulos não se parecem, mas fazem a mesma coisa"
  - "Em ambos os casos, o que define a classe é a resposta que eles ocasionam"
---

---
layout: diagram
kicker: O primeiro tipo
title: Classe por similaridade física
note: "É o produto da generalização: o treino ocorreu com <strong>um</strong> estímulo, e a classe se formou em volta dele."
---

<svg viewBox="0 0 960 300" role="img" aria-label="Cinco maçãs de tamanhos ligeiramente diferentes dentro de um contorno tracejado. A primeira está marcada como o estímulo discriminativo do treino; todas dão ocasião à mesma resposta.">
  <text x="24" y="34" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--acento);letter-spacing:.06em">UMA CLASSE, CINCO ESTÍMULOS</text>

  <rect x="24" y="50" width="912" height="132" rx="16" fill="none" stroke="var(--linha-forte)" stroke-width="2" stroke-dasharray="8 7" />

  <circle cx="120" cy="122" r="36" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <line x1="120" y1="86" x2="120" y2="72" stroke="var(--acento)" stroke-width="3" />
  <text x="120" y="212" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--acento)">Sᴰ do treino</text>

  <circle cx="300" cy="122" r="31" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <line x1="300" y1="91" x2="300" y2="78" stroke="var(--tinta)" stroke-width="3" />
  <circle cx="470" cy="124" r="27" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <line x1="470" y1="97" x2="470" y2="84" stroke="var(--tinta)" stroke-width="3" />
  <circle cx="640" cy="120" r="34" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <line x1="640" y1="86" x2="640" y2="73" stroke="var(--tinta)" stroke-width="3" />
  <circle cx="820" cy="124" r="25" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <line x1="820" y1="99" x2="820" y2="86" stroke="var(--tinta)" stroke-width="3" />

  <text x="560" y="212" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta-2)">nunca estiveram no treino</text>

  <line x1="480" y1="232" x2="480" y2="250" stroke="var(--acento)" stroke-width="3" />
  <polygon points="480,262 472,246 488,246" fill="var(--acento)" />
  <text x="480" y="292" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:20px;fill:var(--tinta)">todos dão ocasião a dizer «maçã»</text>
</svg>

---
layout: figura
image: /classe-estimulo-verde.png
alt: Objetos diferentes que têm em comum a cor verde: maçã, garrafa, cristal, bota, vagem, presente e cédula
---

---
layout: define
term: Classe funcional
definition: Estímulos <span class="destaque">fisicamente diferentes</span>
  reunidos por servirem de ocasião para a mesma resposta.
points:
  - "A palavra escrita «bolo», a figura de um bolo e a palavra «cake»"
  - "Guitarra, piano e tambor, para a resposta «instrumento musical»"
  - "O agrupamento é arbitrário: nada no estímulo o anuncia"
---

<!--
Arbitrário, aqui, quer dizer que a relação não decorre de nenhuma propriedade
física comum. Ela decorre da história de reforçamento da comunidade verbal.
-->

---
layout: diagram
kicker: O segundo tipo
title: Classe funcional
note: Nenhuma propriedade física une os três. O que os une é a resposta que todos ocasionam.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Três estímulos fisicamente diferentes: a palavra escrita bolo, o desenho de um bolo e a palavra cake. Os três convergem para uma única resposta: dizer bolo.">
  <rect x="40" y="46" width="240" height="94" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="160" y="102" text-anchor="middle" style="font-family:var(--fonte-titulo);font-size:34px;fill:var(--tinta)">bolo</text>
  <text x="160" y="128" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">a palavra escrita</text>

  <rect x="360" y="46" width="240" height="94" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <rect x="440" y="80" width="80" height="34" rx="4" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <line x1="480" y1="80" x2="480" y2="62" stroke="var(--acento)" stroke-width="3" />
  <text x="480" y="128" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">a figura</text>

  <rect x="680" y="46" width="240" height="94" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="800" y="102" text-anchor="middle" style="font-family:var(--fonte-titulo);font-size:34px;fill:var(--tinta)">cake</text>
  <text x="800" y="128" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">a palavra em outra língua</text>

  <line x1="160" y1="140" x2="160" y2="176" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="480" y1="140" x2="480" y2="176" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="800" y1="140" x2="800" y2="176" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="160" y1="176" x2="800" y2="176" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="480" y1="176" x2="480" y2="196" stroke="var(--acento)" stroke-width="3" />
  <polygon points="480,208 472,192 488,192" fill="var(--acento)" />

  <rect x="330" y="214" width="300" height="62" rx="10" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <text x="480" y="253" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:22px;fill:var(--tinta)">dizer «bolo»</text>
</svg>

---
layout: vs
kicker: As duas classes, lado a lado
title: O que reúne os estímulos
label: ×
left:
  title: Similaridade física
  items:
    - "Maçãs, sapatos, bolas"
    - "A classe é produto da <strong>generalização</strong>"
right:
  title: Função
  items:
    - "«bolo», a figura do bolo, «cake»"
    - "A classe é produto da <strong>história de reforçamento</strong>"
---

---
layout: default
kicker: Um termo psicológico tradicional, relido
title: A atenção como filtro não explica nada
---

Nas visões mentalistas, a atenção é uma espécie de filtro ou seletor de canais que decide quais informações entram na mente.

- O filtro explicaria por que respondemos a um estímulo e não a outro
- Mas então é preciso explicar **o comportamento do filtro**: por que ele deixa passar um e não o outro
- A explicação apenas empurra a pergunta para dentro, e ali ela fica sem resposta

<!--
Mentalismo: a explicação do comportamento por eventos ou entidades da mente,
tomados como causas iniciadoras. Skinner objeta que esses eventos, quando
existem, são eles próprios comportamento a ser explicado.
-->

---
layout: define
kicker: A releitura comportamental
term: Atentar
definition: Comportar-se sob <span class="destaque">determinado controle de
  estímulos</span>.
points:
  - "Não é um processo que antecede o comportamento: é o próprio comportamento"
  - "Dizemos que alguém atentou a um filme se ele consegue discuti-lo depois"
  - "A pergunta útil deixa de ser «ele prestou atenção?» e passa a ser <strong>«sob controle de quê ele ficou?»</strong>"
---

---
layout: default
kicker: Quem decide a que atentamos
title: A história de reforço e punição seleciona a dimensão
---

Lidamos o tempo todo com estímulos complexos, feitos de muitas dimensões. Qual delas controla o nosso comportamento depende do que se seguiu a ela no passado.

- Os postes passaram a controlar o comportamento dos motoristas **depois** que os radares foram instalados
- Numa aula, a turma pode ficar sob controle das notificações do celular e não da fala de quem apresenta
- Nos dois casos não há falta de atenção: há atenção a **outra** dimensão



---
layout: diagram
kicker: O experimento de Reynolds
title: Treinar com o composto, testar com as partes
note: Nenhum pássaro bicou no círculo nem no verde — os elementos do Sᐞ.
---

<svg viewBox="0 0 960 300" role="img" aria-label="À esquerda, a fase de treino: um triângulo sobre fundo vermelho é o estímulo discriminativo e é reforçado; um círculo sobre fundo verde é o estímulo delta e é extinto. À direita, a fase de teste apresenta os quatro elementos isolados: o triângulo, o círculo, o fundo vermelho e o fundo verde.">
  <text x="24" y="34" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--acento);letter-spacing:.06em">TREINO</text>
  <rect x="30" y="50" width="120" height="96" rx="8" fill="var(--vermelho)" />
  <polygon points="90,72 118,126 62,126" fill="var(--papel)" />
  <text x="90" y="176" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">Sᴰ</text>
  <text x="90" y="200" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--verde)">reforço</text>

  <rect x="180" y="50" width="120" height="96" rx="8" fill="var(--verde)" />
  <circle cx="240" cy="98" r="30" fill="var(--papel)" />
  <text x="240" y="176" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">Sᐞ</text>
  <text x="240" y="200" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--vermelho)">extinção</text>

  <line x1="340" y1="40" x2="340" y2="210" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <text x="376" y="34" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--acento);letter-spacing:.06em">TESTE — OS ELEMENTOS ISOLADOS</text>
  <rect x="380" y="50" width="120" height="96" rx="8" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <polygon points="440,72 468,126 412,126" fill="var(--tinta)" />
  <text x="440" y="176" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">triângulo</text>

  <rect x="520" y="50" width="120" height="96" rx="8" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <circle cx="580" cy="98" r="30" fill="var(--tinta)" />
  <text x="580" y="176" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">círculo</text>

  <rect x="660" y="50" width="120" height="96" rx="8" fill="var(--vermelho)" />
  <text x="720" y="176" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">fundo vermelho</text>

  <rect x="800" y="50" width="120" height="96" rx="8" fill="var(--verde)" />
  <text x="860" y="176" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">fundo verde</text>

  <text x="480" y="250" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:20px;fill:var(--tinta)">os dois pássaros foram treinados com o <tspan style="font-weight:700">mesmo</tspan> Sᴰ composto</text>
  <text x="480" y="282" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:20px;fill:var(--tinta-2)">e responderam a partes diferentes dele</text>
</svg>

<!--
Reynolds, G. S. (1961). Attention in the pigeon. Journal of the Experimental
Analysis of Behavior, 4(3), 203–208. O capítulo descreve o experimento nas
Figuras 6.9 e 6.10.
-->

---
layout: diagram
title: Dois pássaros, duas dimensões do mesmo estímulo
note: Cada um estava sob controle de uma dimensão diferente — um da <strong>forma</strong>, o outro da <strong>cor</strong>.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Dois gráficos de barras. No pássaro 105, a barra do triângulo é a mais alta e a do fundo vermelho é baixa. No pássaro 107, é o contrário: a barra do fundo vermelho é a mais alta. Em ambos, círculo e verde ficam em zero.">
  <text x="24" y="32" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">BICADAS NO TESTE</text>
  <text x="250" y="32" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--acento);letter-spacing:.06em">PÁSSARO 105</text>
  <text x="730" y="32" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--acento);letter-spacing:.06em">PÁSSARO 107</text>

  <line x1="70" y1="52" x2="70" y2="228" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="70" y1="228" x2="440" y2="228" stroke="var(--linha-forte)" stroke-width="2" />
  <rect x="92" y="78" width="60" height="150" fill="var(--acento)" />
  <rect x="178" y="224" width="60" height="4" fill="var(--tinta-2)" />
  <rect x="264" y="194" width="60" height="34" fill="var(--tinta-2)" />
  <rect x="350" y="225" width="60" height="3" fill="var(--tinta-2)" />
  <polygon points="122,242 136,266 108,266" fill="var(--tinta)" />
  <circle cx="208" cy="254" r="12" fill="var(--tinta)" />
  <rect x="282" y="242" width="24" height="24" rx="3" fill="var(--vermelho)" />
  <rect x="368" y="242" width="24" height="24" rx="3" fill="var(--verde)" />

  <line x1="490" y1="40" x2="490" y2="286" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <line x1="550" y1="52" x2="550" y2="228" stroke="var(--linha-forte)" stroke-width="2" />
  <line x1="550" y1="228" x2="920" y2="228" stroke="var(--linha-forte)" stroke-width="2" />
  <rect x="572" y="188" width="60" height="40" fill="var(--tinta-2)" />
  <rect x="658" y="225" width="60" height="3" fill="var(--tinta-2)" />
  <rect x="744" y="83" width="60" height="145" fill="var(--acento)" />
  <rect x="830" y="224" width="60" height="4" fill="var(--tinta-2)" />
  <polygon points="602,242 616,266 588,266" fill="var(--tinta)" />
  <circle cx="688" cy="254" r="12" fill="var(--tinta)" />
  <rect x="762" y="242" width="24" height="24" rx="3" fill="var(--vermelho)" />
  <rect x="848" y="242" width="24" height="24" rx="3" fill="var(--verde)" />

  <text x="250" y="292" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">ficou sob controle da forma</text>
  <text x="730" y="292" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">ficou sob controle da cor</text>
</svg>



---
layout: define
kicker: A técnica que corrige o controle
term: Esvanecimento (<em>fading</em>)
definition: Manipular <span class="destaque">gradualmente</span> uma dimensão do
  estímulo para facilitar a discriminação.
points:
  - "Tracejados que vão sumindo, para ensinar a escrever"
  - "Cores que escurecem pouco a pouco, até «b» e «p» ficarem ambas pretas"
  - "O apoio sai devagar; a resposta correta se mantém do começo ao fim"
---

<!--
Fading: o termo em inglês é o mais usado na literatura aplicada, inclusive em
português. Terrace (1963) descreveu o procedimento em pombos, aprendendo a
discriminação sem erros.
-->

---
layout: diagram
title: O apoio sai; a resposta fica
note: A dimensão manipulada é <strong>uma só</strong>, e o passo é pequeno o bastante para a resposta não falhar.
---

<img src="/esvaneicimento.png" alt="Frutas cortadas em formas que se transformam aos poucos: melancias que viram o símbolo do Batman, maçãs que viram cisnes">

---
layout: define
kicker: O conceito que fecha a Parte 4
term: Abstração
definition: Responder sob controle de uma <span class="destaque">propriedade
  comum</span> a vários estímulos, e não sob controle das demais.
points:
  - "Dizer «mesa» diante de qualquer mesa, seja qual for a cor, o tamanho ou o material"
  - "A propriedade relevante controla; as irrelevantes são ignoradas"
  - "Não é espontâneo: exige um treino que varie o que é irrelevante"
---

---
layout: default
kicker: Uma troca de termo que não é só de palavra
title: Por que Skinner recusa «formação de conceitos»
---

O termo tradicional em psicologia era «formação de conceitos». Skinner o substitui por **abstração**.

- «Formação de conceitos» sugere um conceito que se forma e passa a existir **na mente** da pessoa
- O conceito formado seria então a causa do acerto — e a causa fica dentro, fora de alcance
- «Abstrair» nomeia o que se observa: **responder** a uma propriedade e não às outras

<!--
A objeção é a mesma feita à atenção como filtro: o que se ganha em explicação
com um objeto mental postulado, perde-se em possibilidade de manipulação.
-->

---
layout: diagram
kicker: Como se treina uma abstração
title: Variar o irrelevante, manter o relevante
note: Reforça-se em <strong>todas</strong> as células da linha; a dimensão que varia deixa de controlar a resposta.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Duas linhas. Na primeira, para discriminar a forma, o triângulo se mantém e a cor do fundo varia em quatro quadros. Na segunda, para discriminar a cor, o fundo vermelho se mantém e a forma varia em quatro quadros.">
  <text x="24" y="60" style="font-family:var(--fonte-corpo);font-size:20px;fill:var(--acento)">Para discriminar a FORMA</text>
  <text x="24" y="88" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta-2)">mantém-se o triângulo, varia-se a cor</text>
  <rect x="430" y="30" width="100" height="78" rx="8" fill="var(--vermelho)" />
  <polygon points="480,46 502,94 458,94" fill="var(--papel)" />
  <rect x="545" y="30" width="100" height="78" rx="8" fill="var(--verde)" />
  <polygon points="595,46 617,94 573,94" fill="var(--papel)" />
  <rect x="660" y="30" width="100" height="78" rx="8" fill="var(--azul)" />
  <polygon points="710,46 732,94 688,94" fill="var(--papel)" />
  <rect x="775" y="30" width="100" height="78" rx="8" fill="var(--ambar)" />
  <polygon points="825,46 847,94 803,94" fill="var(--papel)" />

  <line x1="24" y1="140" x2="936" y2="140" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <text x="24" y="196" style="font-family:var(--fonte-corpo);font-size:20px;fill:var(--acento)">Para discriminar a COR</text>
  <text x="24" y="224" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta-2)">mantém-se o vermelho, varia-se a forma</text>
  <rect x="430" y="166" width="100" height="78" rx="8" fill="var(--vermelho)" />
  <polygon points="480,182 502,230 458,230" fill="var(--papel)" />
  <rect x="545" y="166" width="100" height="78" rx="8" fill="var(--vermelho)" />
  <circle cx="595" cy="205" r="25" fill="var(--papel)" />
  <rect x="660" y="166" width="100" height="78" rx="8" fill="var(--vermelho)" />
  <rect x="686" y="180" width="48" height="48" rx="3" fill="var(--papel)" />
  <rect x="775" y="166" width="100" height="78" rx="8" fill="var(--vermelho)" />
  <polygon points="825,178 851,205 825,232 799,205" fill="var(--papel)" />

  <text x="480" y="284" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta-2)">o que se mantém constante é o que passa a controlar</text>
</svg>



---
layout: figura
image: /classe-estimulo-verde.png
alt: Objetos diferentes que têm em comum a cor verde: maçã, garrafa, cristal, bota, vagem, presente e cédula
---

---
layout: figura
image: /abstracao-fofo.png
alt: Objetos diferentes que têm em comum serem fofos: bicho de pelúcia, cachorro, gatos, toalhas e pão
---

---
layout: figura
image: /abstracao-raiva.png
alt: Rostos e desenhos diferentes que têm em comum a expressão de raiva
---


---
layout: default
kicker: Ponto de parada · 4
title: Sob controle de quê está a resposta?
---

Um menino de 9 anos acerta todas as palavras do ditado quando a professora as lê na mesma ordem da lista que mandou estudar. Se ela troca a ordem, ele erra quase todas.

<v-clicks>

- **A.** Sob controle do som de cada palavra; a troca de ordem apenas o deixou nervoso
- **B.** Sob controle da ordem da lista, que é uma propriedade irrelevante do estímulo
- **C.** É generalização: ele responde a qualquer arranjo de apresentação
- **D.** É abstração: ele abstraiu a lista inteira como uma classe

</v-clicks>

---
layout: default
kicker: Ponto de parada · 4 — resposta
title: "A alternativa correta é a <span class=\"destaque\">B</span>"
---

<Tabela
  :dados="[
    ['A', 'Errada — se o som de cada palavra controlasse a resposta, mudar a ordem não faria diferença'],
    ['B', 'Correta — a resposta ficou sob controle de uma dimensão que não é a relevante para escrever a palavra'],
    ['C', 'Errada — generalizar seria acertar diante de arranjos novos, e é exatamente o que não acontece'],
    ['D', 'Errada — abstrair é responder à propriedade comum ignorando as demais; aqui ocorreu o contrário'],
  ]"
  realce="linha:2"
/>

<!--
O caso é o mesmo problema do «b» e do «p», num nível acima: a resposta está sob
controle de uma dimensão presente no treino e ausente na prova.
-->

---
layout: section
index: "05"
kicker: Parte cinco
title: Encadeamento de respostas e reforço condicionado
subtitle: Como sequências longas de comportamento se mantêm sem reforço a cada passo.
---

---
layout: define
term: Reforçador incondicionado
definition: O estímulo cuja função reforçadora <span class="destaque">não depende
  de história de aprendizagem</span>.
points:
  - "Água para um rato privado dela há 48 horas"
  - "Ligado a variáveis biológicas: as privações de água, de alimento, de sono"
  - "Segue o mesmo raciocínio do reflexo incondicionado"
---

<!--
Privação: o período sem acesso a um estímulo, que aumenta a eficácia dele como
reforçador. É uma operação sobre o organismo, não sobre a contingência.
-->

---
layout: default
kicker: O problema que o conceito resolve
title: Quase nenhum operante produz o reforçador incondicionado direto
---

Entre a resposta e a água existe, em geral, uma sequência inteira de comportamentos.

- Um rato que mora numa casa de fazenda sai da toca, atravessa até a parede oposta, caminha até a pia, sobe pela lateral, chega à borda, desce até a cuba — e só então bebe
- Cada um desses comportamentos produziu alguma consequência; senão, deixaria de ocorrer
- A pergunta é: **o que reforça os elos que não produzem água?**

---
layout: steps
kicker: O procedimento em laboratório
title: Monta-se a cadeia de trás para a frente
steps:
  - { title: "Modelar a última resposta", desc: "Pressionar a barra da esquerda (Be), que aciona o bebedouro", icon: "lucide:target" }
  - { title: "Pôr essa resposta sob controle de estímulo", desc: "Treino discriminativo: ela só é reforçada com a luz acesa", icon: "lucide:lightbulb" }
  - { title: "Modelar a resposta anterior", desc: "Pressionar a barra da direita (Bd), tendo o acender da luz como reforço", icon: "lucide:arrow-left" }
---

<!--
Be e Bd: barra da esquerda e barra da direita, as duas barras da caixa operante
usada no exemplo do capítulo.
-->

---
layout: default
kicker: A razão de ser dessa ordem
title: Feito ao contrário, o procedimento não sai do lugar
---

Para um rato privado de água, acender uma luz não é consequência reforçadora nenhuma.

- A luz só passa a reforçar **depois** que pressionar a Be na presença dela produziu água
- É nesse momento que a luz acesa se torna um **reforço condicionado**

---
layout: define
term: Cadeia comportamental
definition: A sequência de respostas que só produz o reforçador se todas forem
  emitidas <span class="destaque">numa certa ordem</span>.
points:
  - "Cada elo produz uma consequência que serve de ocasião para o elo seguinte"
  - "Só o último elo produz o reforçador do fim da cadeia"
  - "Os demais são mantidos por reforço condicionado"
---

---
layout: diagram
title: O elo entre duas contingências
note: A consequência da contingência 1 é o antecedente da contingência 2. O mesmo estímulo, as duas funções.
---

<img src="/encadeamento-cafe.png" alt="Cadeia de três elos para passar café: colocar o pó no filtro, derramar a água quente e servir na xícara">

---
layout: diagram
title: O elo entre duas contingências
note: A consequência da contingência 1 é o antecedente da contingência 2. O mesmo estímulo, as duas funções.
---

<img src="/encadeamento-sapato.png" alt="Cadeia de três elos para amarrar o sapato: cruzar os cadarços, fazer o primeiro nó e formar o laço">

---
layout: statement
kicker: O que segura a cadeia
title: O reforço condicionado <span class="destaque">reforça</span> a resposta que o produz e <span class="destaque">dá ocasião</span> à resposta seguinte
---

---
layout: default
kicker: Atividade
title: Onde está o estímulo de dupla função?
---

<Momento tipo="discussao" titulo="Monte a cadeia, elo a elo">
A cadeia é esta: **ver o garçom → chamar o garçom → o garçom presente → pedir o chope → receber o chope.**

Escreva cada elo nos três termos. Depois aponte, em cada ponto de junção, qual estímulo está cumprindo **as duas funções** ao mesmo tempo.
</Momento>

---
layout: vs
title: Reforçador condicionado simples × generalizado
label: ×
left:
  title: Simples
  items:
    - "Serve de ocasião a poucas respostas"
    - "Exige <strong>privação específica</strong>: a luz só reforça o rato privado de água"
right:
  title: Generalizado
  items:
    - "Serve de ocasião a muitas respostas"
    - "<strong>Não</strong> exige privação específica para ter efeito"
---

---
layout: default
kicker: Os dois exemplos do capítulo
title: Dinheiro e atenção
---

Os dois são reforçadores condicionados generalizados, e pela mesma razão: servem de ocasião para um número grande de respostas diferentes.

- **Dinheiro**: com ele se come, se paga a faculdade, se pega um táxi, se compra um livro
- **Atenção de outra pessoa**: para que um pedido seja atendido, antes é preciso que o outro escute
- Nenhum dos dois depende de uma privação em particular para funcionar

<!--
É por serem generalizados que esses dois reforçadores aparecem tanto na clínica:
funcionam com o cliente em praticamente qualquer estado de privação.
-->

---
layout: diagram
title: A atenção como elo de várias cadeias
note: A mesma resposta inicial atende a privações diferentes, porque o que ela produz serve de ocasião a respostas diferentes.
---

<svg viewBox="0 0 960 300" role="img" aria-label="Uma cadeia que começa em ver a mãe e passa por dizer mãe até a atenção da mãe. A partir daí ela se bifurca: dizer biscoito leva a receber o biscoito, e dizer bola leva a receber a bola.">
  <rect x="10" y="110" width="180" height="76" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="100" y="155" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">ver a mãe</text>
  <line x1="194" y1="148" x2="212" y2="148" stroke="var(--tinta)" stroke-width="3" />

  <rect x="225" y="110" width="180" height="76" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="315" y="155" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta)">dizer «mãe»</text>
  <line x1="409" y1="148" x2="425" y2="148" stroke="var(--acento)" stroke-width="3" />
  <polygon points="437,148 421,140 421,156" fill="var(--acento)" />

  <rect x="440" y="110" width="200" height="76" rx="10" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="3" />
  <text x="540" y="143" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">atenção</text>
  <text x="540" y="167" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">da mãe</text>

  <line x1="644" y1="148" x2="672" y2="148" stroke="var(--acento)" stroke-width="3" />
  <line x1="672" y1="62" x2="672" y2="234" stroke="var(--acento)" stroke-width="3" />
  <line x1="672" y1="62" x2="686" y2="62" stroke="var(--acento)" stroke-width="3" />
  <polygon points="698,62 682,54 682,70" fill="var(--acento)" />
  <line x1="672" y1="234" x2="686" y2="234" stroke="var(--acento)" stroke-width="3" />
  <polygon points="698,234 682,226 682,242" fill="var(--acento)" />

  <rect x="702" y="28" width="248" height="68" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="826" y="58" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">dizer «biscoito»</text>
  <text x="826" y="82" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta-2)">e receber o biscoito</text>

  <rect x="702" y="200" width="248" height="68" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="826" y="230" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta)">dizer «bola»</text>
  <text x="826" y="254" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:18px;fill:var(--tinta-2)">e receber a bola</text>

  <text x="100" y="212" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--tinta-2)">Sᴰ₁</text>
  <text x="315" y="212" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--tinta-2)">R₁</text>
  <text x="540" y="212" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:17px;fill:var(--acento)">Sᴿ₁ = Sᴰ₂</text>

  <text x="315" y="272" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta-2)">privação de alimento ou de brinquedo:</text>
  <text x="315" y="294" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:19px;fill:var(--tinta-2)">o primeiro elo é o mesmo</text>
</svg>

---
layout: default
kicker: Ponto de parada · 5
title: O que é a ficha nessa contingência?
---

Numa escola, a professora entrega uma ficha a cada tarefa concluída. No fim da semana as fichas podem ser trocadas por tempo de quadra, por um livro da biblioteca ou por ajudar na secretaria. Desde que as fichas começaram, as tarefas concluídas aumentaram.

<v-clicks>

- **A.** Um reforçador incondicionado, porque a criança fica satisfeita ao recebê-la
- **B.** Um reforçador condicionado simples, porque só funciona sob privação específica
- **C.** Um reforçador condicionado generalizado, e também Sᴰ para o comportamento de trocá-la
- **D.** Um estímulo discriminativo apenas, já que a ficha em si não dá nada à criança

</v-clicks>

<!--
O arranjo descrito é uma economia de fichas: um sistema em que estímulos
trocáveis funcionam como reforçadores condicionados generalizados.
-->

---
layout: default
kicker: Ponto de parada · 5 — resposta
title: "A alternativa correta é a <span class=\"destaque\">C</span>"
---

<Tabela
  :dados="[
    ['A', 'Errada — a função da ficha depende inteiramente de uma história de aprendizagem; nada nela é biológico'],
    ['B', 'Errada — ela serve de ocasião a três classes de resposta diferentes e não exige uma privação em particular'],
    ['C', 'Correta — reforça a tarefa concluída e dá ocasião à troca: são as duas funções do reforço condicionado'],
    ['D', 'Errada — se fosse apenas Sᴰ, a frequência das tarefas concluídas não teria aumentado'],
  ]"
  realce="linha:3"
/>

<!--
A alternativa B é o erro mais comum: tomar "condicionado" por "simples". O que
separa os dois é o número de respostas que o estímulo ocasiona e a dependência
de uma privação específica.
-->

---
layout: section
index: "06"
kicker: Parte seis
title: Fechamento
subtitle: O que a aula acrescentou à unidade de análise.
---

---
layout: diagram
kicker: Síntese
title: Cinco processos, uma mesma contingência
---

<svg viewBox="0 0 960 300" role="img" aria-label="No alto, a contingência de três termos. Embaixo, cinco fichas — treino discriminativo, generalização, classes de estímulos, abstração e cadeia de respostas — cada uma com o que faz.">
  <rect x="120" y="30" width="200" height="72" rx="10" fill="var(--acento-claro)" stroke="var(--acento)" stroke-width="2" />
  <text x="220" y="74" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:24px;fill:var(--tinta)">Sᴰ</text>
  <line x1="324" y1="66" x2="374" y2="66" stroke="var(--tinta)" stroke-width="3" />
  <rect x="380" y="30" width="200" height="72" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="480" y="74" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:24px;fill:var(--tinta)">R</text>
  <line x1="588" y1="66" x2="628" y2="66" stroke="var(--acento)" stroke-width="3" />
  <polygon points="640,66 624,58 624,74" fill="var(--acento)" />
  <rect x="646" y="30" width="200" height="72" rx="10" fill="none" stroke="var(--tinta)" stroke-width="2" />
  <text x="746" y="74" text-anchor="middle" style="font-family:var(--fonte-mono);font-size:24px;fill:var(--tinta)">Sᴿ</text>

  <line x1="24" y1="130" x2="936" y2="130" stroke="var(--linha-forte)" stroke-width="1" stroke-dasharray="6 7" />

  <rect x="12" y="150" width="176" height="62" rx="8" fill="none" stroke="var(--acento)" stroke-width="2" />
  <text x="100" y="178" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">treino</text>
  <text x="100" y="200" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">discriminativo</text>
  <text x="100" y="248" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">estabelece</text>
  <text x="100" y="270" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">o controle</text>

  <rect x="202" y="150" width="176" height="62" rx="8" fill="none" stroke="var(--acento)" stroke-width="2" />
  <text x="290" y="189" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">generalização</text>
  <text x="290" y="248" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">estende</text>
  <text x="290" y="270" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">a classe</text>

  <rect x="392" y="150" width="176" height="62" rx="8" fill="none" stroke="var(--acento)" stroke-width="2" />
  <text x="480" y="178" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">classes de</text>
  <text x="480" y="200" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">estímulos</text>
  <text x="480" y="248" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">agrupa</text>
  <text x="480" y="270" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">os antecedentes</text>

  <rect x="582" y="150" width="176" height="62" rx="8" fill="none" stroke="var(--acento)" stroke-width="2" />
  <text x="670" y="189" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">abstração</text>
  <text x="670" y="248" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">seleciona</text>
  <text x="670" y="270" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">a dimensão</text>

  <rect x="772" y="150" width="176" height="62" rx="8" fill="none" stroke="var(--acento)" stroke-width="2" />
  <text x="860" y="178" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">cadeia de</text>
  <text x="860" y="200" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:17px;fill:var(--tinta)">respostas</text>
  <text x="860" y="248" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">encadeia</text>
  <text x="860" y="270" text-anchor="middle" style="font-family:var(--fonte-corpo);font-size:16px;fill:var(--tinta-2)">contingências</text>
</svg>

---
layout: statement
kicker: O que se leva para a prática
title: Antes de perguntar <span class="destaque">por que</span> a pessoa se comporta assim, pergunte <span class="destaque">em que contexto</span> — e o que ali se seguiu à resposta
---

---
layout: default
kicker: Fontes · 1 de 2
title: Referências — a base e as fontes primárias
---

<Tabela
  :dados="[
    ['Base', 'Moreira, M. B., &amp; Medeiros, C. A. (2007). <em>Princípios básicos de análise do comportamento</em>, cap. 6. Artmed.'],
    ['Parte 3', 'Guttman, N., &amp; Kalish, H. I. (1956). <em>Journal of Experimental Psychology</em>, 51(1), 79–88.'],
    ['Parte 4', 'Reynolds, G. S. (1961). <em>JEAB</em>, 4(3), 203–208.'],
    ['Parte 4', 'Terrace, H. S. (1963). <em>JEAB</em>, 6(1), 1–27.'],
    ['Parte 4', 'Herrnstein, R. J., &amp; Loveland, D. H. (1964). <em>Science</em>, 146(3643), 549–551.'],
  ]"
  realce="linha:1"
  compacta
/>

<!--
JEAB = Journal of the Experimental Analysis of Behavior. Tudo o que não traz
citação inline vem da base: o capítulo 6 de Moreira e Medeiros.
-->

---
layout: columns
kicker: Fontes · 2 de 2
title: Aplicação atual, e o que o capítulo sugere ler
columns:
  - title: "Aplicação atual"
    items:
      - "Green, G. (2001). <em>Focus on Autism and Other Developmental Disabilities</em>."
      - "Cengher, M. et al. (2018). <em>Journal of Developmental and Physical Disabilities</em>, 30, 155–173."
      - "Souza, M. (2012). Introdução ao controle de estímulos. <em>Portal Comporte-se</em>."
      - "Fialho, J. (2015). Autismo: o planejamento da generalização. <em>Portal Comporte-se</em>."
  - title: "Sugestões do próprio capítulo"
    items:
      - "Catania, A. C. (1999). <em>Aprendizagem</em>, cap. 8: operantes discriminados e controle de estímulos. Artmed."
      - "Millenson, J. R. (1975). <em>Princípios de análise do comportamento</em>, cap. 10: discriminação. Coordenada."
---

<!--
As duas entradas da coluna da direita são as que Moreira e Medeiros listam em
"Bibliografia consultada e sugestões de leitura" ao fim do capítulo 6.
-->

---
layout: end
title: Até a próxima
subtitle: "Aula 06 — Esquemas de reforçamento: o que acontece quando nem toda resposta é reforçada."
---
