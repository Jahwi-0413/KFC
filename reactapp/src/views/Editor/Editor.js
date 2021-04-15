import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    font-size:25px;
    text-align:center;
    margin-top:80px;
`
const Editor = () =>
{
    return (
        <Text>
            나만의 손글씨로<br />
            편리하게 편지를 작성해보세요<br /><br />
            밑의 버튼을 눌러 폰트 파일을 등록하고<br />
            편집기를 사용해 보세요<br />
        </Text>
    )
}

export default Editor