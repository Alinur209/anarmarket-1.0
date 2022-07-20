import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import search from '../../../Media/Sticky/Search.png'

const Search = () => {
  let [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q")) || ''
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if(query) {
      navigate(`search/?q=${query}`)
    }
  }

  useEffect(() => {
    setQuery(searchParams.get("q") ? searchParams.get("q"): "")
  }, [searchParams.toString()])

  return (
    <SSearch onSubmit={handleSubmit} method='GET' action='/search/'>
      <Input value={query ? query : ""} name={"q"} onChange={e => setQuery(e.target.value)} placeholder="Поиск по каталогу.." />
      <SearchBtn onClick={handleSubmit} type="submit">
        <img src={search} alt=""/>
      </SearchBtn>
    </SSearch>
  )
}

const SearchBtn = styled.button`
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
`
const Input = styled.input`
  outline: none;
  width: 100%;
  border: 1px solid #DAE2F2;
  padding: 8px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
`
const SSearch = styled.form`
  width: 380px;
  height: 40px;
  display:flex;
`

export default Search

