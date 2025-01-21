export interface badge {
    id: string
    level: number,
    icon: any
}

export interface IContact {
    id: string,
    link: string
}

export type TLangs = 'English' | 'French' | 'Spanish'

export interface IService {
    title: string,
    details: string[],
    price: {
        type: string,
        currency: string,
        value: number
    }
}

export interface ICompany {
    id: string,
    title: string,
    link: string
}

export type TCompanies = 'OWN' | 'X' | 'TELEGRAM' | 'COINSTORE' | 'THREE' | 'COINSTORE' | 'LENS' | 'PLANET' | 'KEY' | 'EGYPT';

export type TBadges = 'BEGINNER' | 'JUNIOR' | 'FIRST' | 'SECOND' | 'THIRD' | 'SENIOR' | 'SILVER' | 'AIRDROP';

export interface IBadge {
    id: TBadges,
    title: string,
}

export interface ICredential {
    company: ICompany[],
    badge: IBadge[]
}

export type TJobs = 'Full-time' | 'Part-time';

export interface IProject {
    company: string,
    role: string,
    duration: string,
    type: TJobs,
    attestedBy?: any
}

export interface ISkill {
    type: 'lang' | 'framework',
    content: string
}

export interface IUser {
    userName: string,
    nickName: string,
    joinDate: string,
    rank: number,
    bio: string,
    highlight: {
        provider: string,
        title: string,
        nickName: string,
        description: string
    },
    contact: IContact[],
    roles: string[],
    skills: ISkill[],
    langs: TLangs[],
    services: IService[],
    credentials: ICredential,
    projects: IProject[]
}

