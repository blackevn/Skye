import { Toggle } from '@/app/components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    image: any
    src: any
  }

type FunctionHandler = () => void;

type ToggleHandler = boolean | FunctionHandler

type ClickEvent =  MouseEventHandler<HTMLButtonElement> | string | (() => void)
 
export interface Toggle {

  toggle: boolean
  toggleHandle: () => void

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
  height: number
  toggle?: ToggleHandler
  showPassword?: ToggleHandler
  handleToggle?: ClickEvent
  handleAdSectionToggle?: ClickEvent
  handlePassword?: ClickEvent
  adSectionToggle?: ClickEvent
  

}

  export interface NavigationLinks {

    id: number
    name: string
    link: string
    icon: IconDefinition
    notification?: number
    new?: boolean
  }

  export interface DiscoveryLinks {

    id: number
    name: string
    icon: IconDefinition

  }

  export interface IProps {

    children: React.ReactNode | JSX.Element | JSX.Element[]
      
  }
 
  export interface Post {
  id: string
  body: string
  createAt: string
  userId: string
  likedIds: string[]
   
  }
  

  export interface IUser {
    _id?: string;
    name?: string | null;
    userName?: string;
    image?: string;
    bio?: string;
    email: string;
    verifiedEmail: string
    image: string
    coverImage: string
    profileImage: string;
    hashedPassword: string;
    createAt: string;
    updatedAt: string;
    followingId: string;
    hasNotification: boolean
  }
