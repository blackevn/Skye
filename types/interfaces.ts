import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    image: any
    src: any
  }

  export interface NavigationLinks {

    id: number
    name: string
    link: string
    icon: IconDefinition

  }