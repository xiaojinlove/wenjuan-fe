import { useRequest } from 'ahooks'
import { getQuestionList } from '../services/question'
import { useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

function useLoadQuestionListData() {
  const [searchParams] = useSearchParams()

  const { loading, data, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const data = await getQuestionList({ keyword })
      return data
    },
    {
      refreshDeps: [searchParams],
    }
  )
  return { loading, data, error }
}

export default useLoadQuestionListData
