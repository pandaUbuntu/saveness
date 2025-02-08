import React from "react"
import {Md5} from 'ts-md5'
import { UserType } from "../../../types/user"
import './style.css'

const MainPage = () => {
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
          usernameInput: HTMLInputElement
        }

        const name = (formElements.namedItem("userName") as HTMLInputElement).value
       
        const user: UserType = {
            id: Md5.hashStr(name),
            name: name,
            date: new Date((formElements.namedItem("userBirthday") as HTMLInputElement).value as string),
            result: []
        }
        
        localStorage.setItem(user.id, JSON.stringify(user))
        console.log(localStorage);
      }


  return (
        <div className="form-wrapper">
            <h1>Зареєструйтесь</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" name="userName" id="userName" placeholder="Введіть вашe ім'я"/>
                <input type="date" name="userBirthday" id="userBirthday"/>
                <input className="submit-button" type="submit" value="Почати тест" />
            </form>
        </div>
  )
}

export default MainPage
