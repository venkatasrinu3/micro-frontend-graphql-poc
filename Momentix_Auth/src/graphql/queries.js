import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
query GetUserData{
  indigoList {
    items {
      client_name
    }
  }
}
`
export const ADD_NEW_USER = gql`
mutation AddUserData($name:String, $age:Int, $gender:String, $email: String){
    addUser(name: $name, age: $age, gender: $gender, email: $email){
        name, age, email, gender
    }
}
`