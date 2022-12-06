import { WORDS } from './constants/wordlist'

let worldleNumber = Math.floor(Math.random() * WORDS.length)

export function getWordleNumber() {
  return worldleNumber
}
