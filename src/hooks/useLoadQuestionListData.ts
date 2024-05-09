import { useRequest } from 'ahooks'
import { getQuestionList } from '../services/question'
import { useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}
function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const [searchParams] = useSearchParams()
  const { isStar, isDeleted } = opt
  const { loading, data, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const data = await getQuestionList({ keyword, isStar, isDeleted })
      return data
    },
    {
      refreshDeps: [searchParams],
    }
  )
  return { loading, data, error }
}

export default useLoadQuestionListData
