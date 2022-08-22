import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

import { name, age, validate } from './bases/01-types'

import { FavoriteAnime } from './bases/02-class'

import { Characters } from './bases/03-inheritance'

const anime = new FavoriteAnime('Hunter X Hunter')
const character = new Characters('Evangelion', 'Mari Makinami Iloustrius')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${name} ${age} ${validate} ${anime.info()} ${character.info()}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more!!!!!!!!
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
