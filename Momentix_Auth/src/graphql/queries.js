import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
query GetUserData{
    users {
        name,
        age,
        gender,
        userId
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