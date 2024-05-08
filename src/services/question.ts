import axios from './ajax'
import type { ResDataType, ResType } from './ajax'

export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as ResDataType
  return data
}
