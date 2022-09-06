import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import styled, {css} from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQueryHook'
import search from '../../../Media/Sticky/Search.png'
import x from '../../../Media/Sticky/x.png'
import Flex from '../../../UI/Flex'

const Search = () => {
  let [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q")) || ''
  const navigate = useNavigate()
  const isMatch = useMediaQuery("(max-width: 652px)")
  const [expanded, setExpanded] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if(query) {
      navigate(`search/?q=${query}`)
    }
  }

  useEffect(() => {
    setQuery(searchParams.get("q") ? searchParams.get("q"): "")
  }, [searchParams.toString()])

  const searchClick = () => {
    if(isMatch) {
      setExpanded(true)
    }
  }

  return (
    <SSearch expanded={expanded} onSubmit={handleSubmit} method='GET' action='/search/'>
      {!isMatch && 
        <Input 
          value={query ? query : ""} 
          name={"q"} 
          onChange={e => setQuery(e.target.value)} 
          placeholder="Поиск по каталогу.." />
      }
      <SearchBtn expanded={expanded} onClick={searchClick} type="submit">
        <img src={search} alt=""/>
      </SearchBtn>
      {
          expanded && 
          <>
           <Input 
              value={query ? query : ""} 
              name={"q"} 
              onChange={e => setQuery(e.target.value)} 
              placeholder="Поиск по каталогу.."
              expanded={expanded} 
            />
            <CancelBox>
              <img 
                onClick={() => setExpanded(false)}
                src={x}
                alt=''
                width="16px"
              />
              </CancelBox> 
          </>
      }
    </SSearch>
  )
}

const CancelBox = styled(Flex)`
  width: 40px;
  height: 100%;
  align-items:center;
  justify-content:center;
`
const SearchBtn = styled.button`
  transition: none;
  border:none;
  background: none;
  outline: none;
  width: 50px;
  height: 40px;
  background: #F9C535;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display:flex
  justify-content:center;
  align-items: center;
  cursor:pointer;
  img {
    width: 50%; 
  }
  @media(max-width: 652px) {
    height: 39px;
    border: none;
    border-radius: 5px;
    ${props => props.expanded && css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}  
  }
`
const Input = styled.input`
  transition: none;
  outline: none;
  width: 100%;
  border: 1px solid #DAE2F2;
  padding: 8px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
  @media(max-width: 652px) {
    border: 1px solid #DAE2F2;
    border-radius: 5px;
    ${props => props.expanded && css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}  
  }
`
const SSearch = styled.form`
  transition: none;
  width: 380px;
  height: 40px;
  display:flex;
  @media(max-width: 652px) {
    width: auto;
    ${props => props.expanded && css`
      position: absolute;
      width: 100%;
      height: 59px;
      padding: 10px;
      background: #fff;
      display:flex;
      left: 0;
      top: 0;
      z-index: 9999;
    `}
  }
`

export default Search

