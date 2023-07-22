import { User } from './user'


export interface Comment{
    content: string
    likes: number
    shares: number
    user: User
}

export interface Post {
    id: number
    content?: string
    comments?: Comment[]
    image_url?: string
    likes: number
    shares: number
    created_at: string
    user: User
}

export interface Story{
    id: number
    content?: string
    image_url?: string
    user: User
}
