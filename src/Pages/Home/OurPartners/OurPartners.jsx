import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Error } from '../../../UI/Error'
import Flex from '../../../UI/Flex'
import { Loader } from '../../../UI/Loader'
import { List } from './List'
import Skeleton from '@mui/material/Skeleton';

export const OurPartners = () => {
    const partners = useSelector(state => state.partners.partners)
    const error = useSelector(state => state.partners.error)
    const loading = useSelector(state => state.partners.isLoading)

  return (
    <SOurPartners>
        <Title>Наши клиенты</Title>
        {
            loading ? 
                <Flex justify="space-between" wrap={"true"} width="100%">  
                    {Array.from(new Array(4)).map((item, index) => 
                        <Flex key={index} direction="column" gap="15px" align="center">
                            <Skeleton variant="circular" width={150} height={150} />
                            <Skeleton variant="text" width={100} height={30} />
                        </Flex>  
                    )}
                </Flex>
            :
            error.err_code ?
            <Error
                err_code={error.err_code}
                message={error.message}

            />
            :
            <List
                data={partners}
            />
            
        }
    </SOurPartners>
  )
}

const Title = styled.h2`
    margin:50px 0;
    width: 100%;
    font-size: 2rem;
    text-align:center;
    @media(max-width: 868px) {
        margin: 20px 0;
    }
`
const SOurPartners = styled(Flex)`
    width: 100%;
    flex-direction:column
`
