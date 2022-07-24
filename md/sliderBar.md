<!-- titulo -->
# **Slidebar**
<!-- qual exercicio ? -->
> ## 🚀Desafio rocketseat
---
<a href="https://github.com/IsaacGSS/SiderBar/blob/main/README.md">***🚢 README***</a>

</br>

<!-- Descrição do exercisio proposto pelo professor -->
**📄 Descrição | Proposta** </br>
Sliderbar nav, projeto/desasfio proposto pela escola <a href="https://www.rocketseat.com.br/">@Rocketseat</a>.
O projeto deve conter uma interface na lateral no site que se retrai e se espande de forma uniforme confome descrito no projeto no <a href="https://www.figma.com/file/iOuqAlZvhAMkkfjCMFyc7Y/DD-%2F-Sidebar-Responsiva/duplicate">FIGMA 🎨</a>, o mesmo tanbem deve conter logo e icones, local para um perfil (nome, carago, img e icon), um menu e um input de pesquisa [⚠️ nem uma das funcionalidades alem de um slide bar sera obrigatorio]
</br>
<img src="https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F36165949-0a72-4b11-8075-904fbf6021f3%2FAnimao.gif?table=block&id=cc482a76-c8aa-412c-bf86-e8049fc208bd&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&userId=&cache=v2">
<a href="https://efficient-sloth-d85.notion.site/Desafio-Sidebar-f2251eb4976941eb958326ea327ffeb9">Desafio 👆</a>

---
<!-- tecnologia utilizada -->
### 🧑‍💻**Tecnologia**
> * **JS**
> * **CSS**
>  * **HTML**
---

<!-- aqui iremos mostrar como foi resolvido -->
## **Resolvendo..**
> ### <a href="https://github.com/IsaacGSS"> ***@Isaac S. Silva***</a>
---
<!-- resumo e/ou descrição da comclusão -->
<q>Eu criei com um principio de ideia, ja que nunca tinha criado algo parecido, sem muitos segredos, foi tudo resolvido via <code>script.js</code> em todas as funcionalidades devidas ao Sliderbar. </q>
</br>

<!-- topicos da resoluçãao -->
* Elementos
  em cada local no qual seria necessario a interacao foi pelo o elemento do HTML para realizar a manipulacao
```js
// variaves constantes e uilzados Selector para obter
const menu = document.querySelector('.navIcon');
const navBar = document.querySelector('#nav');
const logo = document.querySelector('.logo');
const quest = document.querySelector('input');
const perfil = document.querySelector('#perfil')
```
</br>

* Eventos e Validação

  * Evento menu [1]
  * Evento Buscar [2]
* [1]
  Ao clicar no icone de menu a nav se retrai ou se espande mudnado a largura do layout, juntamente com as aparicoes e o inverso nos icones.
```js
//  foi decidido cirar
menu.addEventListener('click', function() {

  if (navBar.style.width === '70px') {
    navBar.style.width = '325px';
    logo.style.display= 'block';
    quest.value = 'Buscar'; 
    perfil.style.display= 'flex';   
    
  } else {
    navBar.style.width = '70px';
    logo.style.display= 'none';
    quest.value = ''
    perfil.style.display= 'none';
  }

})
```
* [2]
  Ao clicar e entrar no input enquato o SliderBar estiver retraido o mesmo aotomaticamente fara com a nav abrir, existence um foco e desfoco com o icone e a palavra 'Buscar' dentro do input.
```js
quest.addEventListener('focus', function() {
  quest.value = ''

  if (navBar.style.width = '70px') {
    navBar.style.width = '325px';
    logo.style.display= 'block';  
    perfil.style.display= 'flex';
  }
})

quest.addEventListener('blur', function() {
  quest.value = 'buscar'
})
```