import React, {useState} from 'react'
import styled from 'styled-components'
import { notification } from 'antd';
import API from '../../../../../API/API';

export const Form = () => {
  const [fields, setFields] = useState({name: "", phone: "", message: ""})

  const openNotification = (desc) => {
    notification.open({
      message: 'Сообщение отправлено',
      description:desc,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

      setFields({name: '', phone: '', message: ''})
      openNotification(fields.message)
      API.send_notify(fields)
  }

  return (
    <SForm onSubmit={handleSubmit}>
        <Input required onChange={e => setFields({...fields, name: e.target.value})} value={fields.name} placeholder='Имя' />
        <Input required onChange={e => setFields({...fields, phone: e.target.value})}value={fields.phone} placeholder='+996'></Input>
        <MsgField required onChange={e => setFields({...fields, message: e.target.value})} value={fields.message} placeholder='Сообщение'/>
        <Btn type="submit" onSubmit={handleSubmit}>Отправить</Btn>
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
    @media (max-width: 860px) {
      grid-column-start:1;
      grid-column-end:2;
    }
    @media (max-width: 481px) {
      width: 100%;
    }
    @media (max-width: 481px) {
      grid-column-start:1;
      grid-column-end:3;
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
    @media (max-width: 481px) {
      grid-column-start:1;
      grid-column-end:3;
    }
`
const MsgField = styled.textarea`
  grid-column-start: 1;
  grid-column-end:3;
  padding-bottom: 115px;
  border:none;
  outline: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  background: #2A3B45;
  min-height: 150px

`
const SForm = styled.form`
    display: grid;
    width: 100%;
    gap: 20px;
    margin-top: 10px;
    grid-template-columns: 1fr 3fr;
    @media (max-width: 972px) {
      width: 50%;
    }
    @media (max-width: 481px) {
      width: 100%;
    }
`