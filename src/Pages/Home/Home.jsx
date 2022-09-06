import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBanners } from '../../Store/reducers/bannersReducer'
import { getPartners, resetPartners } from '../../Store/reducers/partnersReducer'
import ContentTemple from '../../UI/ContentTemple'
import { Banner } from './Banner/Banner'
import { OurAdvantages } from './OurAdvantages/OurAdvantages'
import { OurPartners } from './OurPartners/OurPartners'


export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPartners())
    dispatch(getBanners())

    return () => dispatch(resetPartners())
  }, [])
  
  return (
    <ContentTemple>
      <Banner />
      <OurAdvantages />
      <OurPartners />
    </ContentTemple>
  )
}
