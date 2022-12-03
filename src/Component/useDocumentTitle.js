import React, {useEffect} from 'react'

//All custom hooks function should start from use keyword
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `count ${count}`
    })
}

export default useDocumentTitle