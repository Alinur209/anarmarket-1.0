import React, {useState} from 'react'
import styled from 'styled-components'
import Flex from '../../../../../UI/Flex'

export const Form = () => {
  const [fields, setFields] = useState({name: "", phone: "+996", message: ""})

  const handleSubmit = e => {
    e.preventDefault()
    console.log(fields)
  }

  return (
    <SForm onSubmit={handleSubmit}>
        <Input onChange={e => setFields({...fields, name: e.target.value})} value={fields.name} placeholder='Имя' />
        <Input onChange={e => setFields({...fields, phone: e.target.value})}value={fields.phone} placeholder='+996'/>
        <MsgField onChange={e => setFields({...fields, message: e.target.value})} value={fields.message} placeholder='Сообщение'/>
        <Btn type="submit">Отправить</Btn>
    </SForm>
  )
}


const Btn = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    background: #F9C535;
    font-size: 14px;
    color: #000;
    cursor:pointer;
    padding: 10px 0;
    grid-column-start:2;
    grid-column-end:3;
    &:hover {
      background: #CA9F28
    }
`
const Input = styled.input`
    border:none;
    outline: none;
    font-size: 16px;
    color: #fff;
    padding: 8px 15px;
    border-radius: 5px;
    background: #2A3B45;
`
const MsgField = styled(Input)`
  grid-column-start: 1;
  grid-column-end:3;
  padding-bottom: 115px;
`
const SForm = styled.form`
    display: grid;
    width: 100%;
    gap: 20px;
    margin-top: 10px;
    grid-template-columns: 1fr 3fr;
`