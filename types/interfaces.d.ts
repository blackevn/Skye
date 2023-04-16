import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    image: any
    src: any
  }

 export interface Side {
    sideToggle: any
    handleSideToggle: any
}
  
export interface ContextData  {

  toggle: any
  handleToggle: any
  width: any
  user: boolean 
  adSectionToggle: any
  handleAdSectionToggle: any
  height: number
  showPassword: any
  handlePassword: any

}


  export interface NavigationLinks {

    id: number
    name: string
    link: string
    icon: IconDefinition
    notification: number
    new: boolean
  }

  export interface DiscoveryLinks {

    id: number
    name: string
    icon: IconDefinition

  }

  export interface IProps {

    children: React.ReactNode | JSX.Element | JSX.Element[]
      
  }
 
  export interface Video {

    caption: string;

    video: {
      caption: string;
      asset: {
        _id: string;
        url: string;
      };
    };

    _id: string;
    
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };

    likes: {
      postedBy: {
        _id: string;
        userName: string;
        image: string;
      };
    }[];

    comments: {
      comment: string;
      _key: string;
      postedBy: {
        _ref: string;
      };
    }[];
    
    userId: string;
  }
  

  export interface IUser {
    _id: string;
    _type: string;
    userName: string;
    image: string;
  }
