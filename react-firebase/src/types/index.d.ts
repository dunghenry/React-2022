import * as FirebaseAuth from 'firebase/auth';
import {ChangeEvent} from 'react';
export interface IParams{
    page: string
    id: string
}
export interface IRegister{
    name: string
    email: string
    password: string
    cf_password: string
}
export interface ILogin{
    email: string
    password: string
    remember: boolean
}

export type ChangeInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export interface IAuth extends FirebaseAuth.User{

}

export interface IProfile{
    fullName: string
    emailContact: string
    phoneNumber: string
    website: string
    address: string
    about: string
}