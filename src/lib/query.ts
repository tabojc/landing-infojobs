import type { DICTIONARY_TYPE } from "../const.ts"
const INFOJOBS_API_ENDPOINT = "https://api.infojobs.net/api/1/"

const TOKEN = import.meta.env.API_INFOJOBS_TOKEN

export const query = (path: string) => {
  const url = `${INFOJOBS_API_ENDPOINT}${path}`
  return fetch(url, {
    headers: {
      Authorization: `Basic ${TOKEN}`,
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
}

type DictionaryId = (typeof DICTIONARY_TYPE)[keyof typeof DICTIONARY_TYPE]

export const getDictionary = (dictionaryId: DictionaryId) => {
  return query(`/dictionary/${dictionaryId}`)
}
