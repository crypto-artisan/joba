import { IUser } from "@/types/user";
import user_1_img from "@/public/img/User (1).png";
import user_2_img from "@/public/img/User (2).png";
import user_3_img from "@/public/img/User (3).png";
import user_4_img from "@/public/img/User (4).png";
import user_5_img from "@/public/img/User (5).png";

export const UserData: IUser =
{
    userName: 'Bryan Adams',
    nickName: '@johnthegreat',
    joinDate: '24 January 2022',
    rank: 1200,
    bio: 'Blockchain developer with a degree in Computer Science from MIT',
    highlight: {
        provider: 'Framer',
        title: 'Framer University',
        nickName: '@learnframer',
        description: `have you over come across this issue in @framer?\n
        your site not only scrolls up and down but also to the left and right.
        `
    },
    contact: [
        {
            id: 'WEBSITE',
            link: '#',
        },
        {
            id: 'DISCORD',
            link: '#',
        },
        {
            id: 'WORD',
            link: '#',
        }
    ],
    roles: ['Engineer', 'Blockchain'],
    skills: [
        {
            type: 'lang',
            content: 'Solidity'
        },
        {
            type: 'lang',
            content: 'Javascript'
        },
        {
            type: 'framework',
            content: 'Truffle'
        },
        {
            type: 'lang',
            content: 'C++'
        },
        {
            type: 'lang',
            content: 'Rust'
        },
        {
            type: 'framework',
            content: 'Remix'
        },
        {
            type: 'framework',
            content: 'Hardhat'
        },
    ],
    langs: [
        'English',
        'French',
        'Spanish'
    ],
    services: [
        {
            title: 'Responsive landing page design',
            details: ['Web Designer', 'UX Designer', 'Prototyper', 'Webflow'],
            price: {
                type: 'FIXED PRICE',
                currency: 'USDT',
                value: 1000
            }
        },
        {
            title: 'UX Audit',
            details: ['Web Designer', 'UX Designer', 'Prototyper', 'Webflow'],
            price: {
                type: 'FIXED RATE',
                currency: 'USDT',
                value: 30
            }
        }
    ],
    credentials: {
        company: [
            {
                id: 'OWN',
                title: '',
                link: '#'
            },
            {
                id: 'X',
                title: '',
                link: '#'
            },
            {
                id: 'TELEGRAM',
                title: '',
                link: '#'
            },
            {
                id: 'COINSTORE',
                title: '',
                link: '#'
            },
            {
                id: 'THREE',
                title: '',
                link: '#'
            },
            {
                id: 'COINSTORE',
                title: '',
                link: '#'
            },
            {
                id: 'LENS',
                title: '',
                link: '#'
            },
            {
                id: 'PLANET',
                title: '',
                link: '#'
            },
            {
                id: 'KEY',
                title: '',
                link: '#'
            },
            {
                id: 'EGYPT',
                title: '',
                link: '#'
            },
        ],
        badge: [
            {
                id: 'BEGINNER',
                title: ''
            },
            {
                id: 'JUNIOR',
                title: ''
            },
            {
                id: 'FIRST',
                title: ''
            },
            {
                id: 'SECOND',
                title: ''
            },
            {
                id: 'THIRD',
                title: ''
            },
            {
                id: 'SENIOR',
                title: ''
            },
            {
                id: 'SILVER',
                title: ''
            },
            {
                id: 'AIRDROP',
                title: ''
            }
        ]
    },
    projects: [
        {
            company: 'Meta',
            role: 'Senior Product Designer',
            duration: 'June 2023 - Present',
            type: 'Part-time',
            attestedBy: [
                'USER_1',
                'USER_2',
                'USER_3',
                'USER_4',
            ]
        },
        {
            company: 'Belle',
            role: 'Product Designed',
            duration: 'June 2022 - May 2023',
            type: 'Full-time',
            attestedBy: [
                'USER_1',
                'USER_2',
                'USER_5',
            ]
        },
        {
            company: 'Craden',
            role: 'Community manager',
            duration: 'June 2022 - May 2023',
            type: 'Full-time',
            attestedBy: [
                'USER_1',
                'USER_2',
            ]
        }
    ]

}

export const users = {
    'USER_1': user_1_img,
    'USER_2': user_2_img,
    'USER_3': user_3_img,
    'USER_4': user_4_img,
    'USER_5': user_5_img,
}


