import { Toggle } from '@/app/components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { type } from 'os';
import { ReactNode } from 'react';

export interface Avatar{
    image?: any
    src?: any
    children?: IProps
    modifier?: string
    userId?: string
    width?: string
  }

type FunctionHandler = () => void;

type ToggleHandler = boolean | FunctionHandler

type ClickEvent =  MouseEventHandler<HTMLButtonElement> | string | (() => void)
 
export interface Toggle {

  toggle: boolean
  toggleHandle: FunctionHandler

}

export interface ToastProps {

  modifier?: string
  children?: JSX.Element
  text?: string
  icon?: IconDefinition
  clickEvent?: ClickEvent
  mode?: boolean
  
}


export type FormAuthData = {

  userName: string,
  name: string
  email: string,
  password: string,
  rememberMe: boolean
  
}

export type PostData = {
  body: string,
  image: string
}

export type EditData = {

  userName: string | undefined
  name: string | null | undefined
  bio: string | undefined 
  coverImage: string | undefined
  profileImage: string | undefined

}


export type ButtonProps = {

  text?: string 
  textColor?: string 
  bgColor?: string
  clickEvent?:  ClickEvent
  borderColor?: string 
  icon?: IconDefinition
  borderSize?: string 
  paddingX?: string
  paddingY?: string
  children?: JSX.Element
  modifier?: string
  tip?: string
  isActive?: boolean
  disabled?: boolean

}
 export interface Side {
    sideToggle: any
    handleSideToggle: any
}
  
export interface ContextData {

  width: number
  user?: IUser
  users?: IUser
  posts?: Post
  post?: Post
  height: number
  toggle?: ToggleHandler
  showPassword?: ToggleHandler
  handleToggle?: ClickEvent
  handleAdSectionToggle?: ClickEvent
  handlePassword?: ClickEvent
  adSectionToggle?: ClickEvent
  userId?: IUser.id
  editProfileToggle?: ToggleHandler
  handleEditProfileToggle?: ClickEvent
  addPostToggle?: ToggleHandler
  handleAddPostToggle?: ClickEvent
  darkMode?: ToggleHandler
  toggleDarkMode?: ClickEvent
  
}

  export interface NavigationLinks {

    id?: number
    name: string
    href?: string
    link?: string
    icon: IconDefinition
    notification?: number
    isAuthenticated?: boolean
    hasNotification?: boolean
  }

  export interface DiscoveryLinks {

    id: number
    name: string
    icon: IconDefinition

  }

  export interface IProps {

    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
      
  }
 
  export interface Post {
  id?: string
  body?: string
  image?: string
  video?: string
  createAt?: string
  userId?: string
  likedIds: string[]
  map?: any
  filter?: any
  user?: IUser
  comments: Comments[]
  length?: any
  }

  export interface Comments {
  id?: string 
  body?: string 
  createAt?: string 
  updateAt?: string 
  userId?: string
  postId?: string 
  user?: IUser
  post?: string 
  map?: any
  filter?: any
  length?: any
  name?: string
  userName?: string
  }
  
  
  export interface IUser {
    id?: string;
    name?: string | null | SetStateAction<string>
    userName?: string | SetStateAction<string>
    image?: string;
    bio?: string | SetStateAction<string>
    email: string;
    verifiedEmail: string
    image: string
    coverImage: string | SetStateAction<string>
    profileImage: string | SetStateAction<string>
    hashedPassword: string;
    createAt: string;
    updatedAt: string;
    followingId: string;
    hasNotification: boolean
    bg?: string
    filter?: any
    length?: any
    map?: any
  }

  type UserProfile = {

    currentProfileUser?: IUser
    currentUser?: IUser
    userId?: string
  
  }
