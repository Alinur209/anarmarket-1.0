import React from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'
import Carousel  from 'react-material-ui-carousel'
import {useSelector} from 'react-redux'
import Skeleton from '@mui/material/Skeleton';
import { Error } from '../../../UI/Error'

export const Banner = () => {
    const banners = useSelector(state => state.banners.banners)
    const error = useSelector(state => state.partners.error)
    const loading = useSelector(state => state.partners.isLoading)

  return (
    <SBanner>
        {
            loading ? 
                <Skeleton variant="rectangular" width={"100%"} height={350} />
            :
                error.err_code ?
                <Error
                    err_code={error.err_code}
                    message={error.message}
                />
            :
                <SCarousel 
                    swipe={false}
                    showDots={true}
                    autoPlay={true}
                    transitionDuration={200}
                    indicators={false}
                >
                    {
                        banners.map((banner, index) => 
                            <Item key={index} src={banner.image} />
                        )
                    }
                </SCarousel>    
        }
    </SBanner>
  )
}


const SCarousel = styled(Carousel)`
    width: 100%;
`
const Item = styled.div`
    background-image: ${({src}) =>  `url(${src})`};
    background-size: contain;
    background-position: background-position: left center;
    background-repeat: no-repeat;
    height: 40vw;
    vertical-align:top;
    border-radius: 5px;
`
const SBanner = styled(Flex)`
    width: 100%;
    height: auto;
`