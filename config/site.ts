import { AIRDROPImage, BasenameImage, BEGINNERImage, BelleImage, COINSTOREImage, CradenImage, DiscordIcon, EGYPTImage, EnglishIcon, EthereumImage, FIRSTImage, FrenchIcon, GnosisImage, HardhatIcon, HolonymImage, JUNIORImage, KEYImage, LENSImage, MetaImage, OWNImage, PLANETImage, RemixIcon, SECONDImage, SENIORImage, SILVERImage, SnapShotImage, SpanishIcon, TELEGRAMImage, THIRDImage, THREEImage, TruffleIcon, WebIcon, WordIcon, XImage } from "@/components/icons"

export const NavbarItems = [
    {
        id: 'HOME',
        title: 'Home',
        link: '/',
        isActive: false
    },
    {
        id: 'PROFILE',
        title: 'Profile',
        link: '/profile',
        isActive: true
    },
    {
        id: 'DISCOVER',
        title: 'Discover',
        link: '/discover',
        isActive: false
    },
    {
        id: 'REWARDS',
        title: 'Rewards',
        link: '/rewards',
        isActive: false
    },
    {
        id: 'CREDENTIALS',
        title: 'Credentials',
        link: '/credentials',
        isActive: true
    }
]

export const Company_Icon = {
    'Meta': {
        icon: MetaImage
    },
    'Belle': {
        icon: BelleImage
    },
    'Craden': {
        icon: CradenImage
    },
    'OWN': {
        icon: OWNImage
    },
    'X': {
        icon: XImage
    },
    'TELEGRAM': {
        icon: TELEGRAMImage
    },
    'COINSTORE': {
        icon: COINSTOREImage
    },
    'THREE': {
        icon: THREEImage
    },
    'LENS': {
        icon: LENSImage
    },
    'PLANET': {
        icon: PLANETImage
    },
    'KEY': {
        icon: KEYImage
    },
    'EGYPT': {
        icon: EGYPTImage
    },
}

export const Badge_Icon = {
    'BEGINNER': {
        icon: BEGINNERImage
    },
    'JUNIOR': {
        icon: JUNIORImage
    },
    'FIRST': {
        icon: FIRSTImage
    },
    'SECOND': {
        icon: SECONDImage
    },
    'THIRD': {
        icon: THIRDImage
    },
    'SENIOR': {
        icon: SENIORImage
    },
    'SILVER': {
        icon: SILVERImage
    },
    'AIRDROP': {
        icon: AIRDROPImage
    },
}

export const Lang_Icon = {
    'English': {
        icon: EnglishIcon
    },
    'French': {
        icon: FrenchIcon
    },
    'Spanish': {
        icon: SpanishIcon
    }
}

export const Skill_Icon = {
    'Truffle': {
        icon: TruffleIcon
    },
    'Hardhat': {
        icon: HardhatIcon
    },
    'Remix': {
        icon: RemixIcon
    },
}

export const Contact_Icon = {
    'WEBSITE': {
        icon: WebIcon
    },
    'DISCORD': {
        icon: DiscordIcon
    },
    'WORD': {
        icon: WordIcon
    }
}

export const Discover = [
    {
        id: 'X',
        title: 'X',
        link: '#',
        icon: XImage,
        points: 20,
        description: 'Verify your X profile',
        isDone: false
    },
    {
        id: 'TELEGRAM',
        title: 'Telegram',
        link: '#',
        icon: TELEGRAMImage,
        points: 20,
        description: 'Verify your Telegram account',
        isDone: false
    },
    {
        id: 'COINBASE',
        title: 'Coinbase Country',
        link: '#',
        icon: COINSTOREImage,
        points: 15,
        description: 'Confirm your coinbase account & onchain identity',
        isDone: true
    },
    {
        id: 'COINBASE_Profile',
        title: 'Coinbase Profile',
        link: '#',
        icon: COINSTOREImage,
        points: 20,
        description: 'Confirm your coinbase account & onchain identity',
        isDone: false
    },
    {
        id: 'IDENA',
        title: 'Idena',
        link: '#',
        icon: EGYPTImage,
        points: 20,
        description: 'Confirm open web academy Identity',
        isDone: false
    },
    {
        id: 'BASENAMES',
        title: 'Basenames',
        link: '#',
        icon: BasenameImage,
        points: 15,
        description: 'Connect to base to verify your identity',
        isDone: true

    },
    {
        id: 'LENS',
        title: 'Lens',
        link: '#',
        icon: LENSImage,
        points: 20,
        description: 'Connect to Lens to verify your social media presence on Web3',
        isDone: false
    },
    {
        id: 'ETHEREUM',
        title: 'Ethereum',
        link: '#',
        icon: EthereumImage,
        points: 20,
        description: 'Verify ethereum activity',
        isDone: false
    },
    {
        id: 'GUILD',
        title: 'Guild Membership',
        link: '#',
        icon: THREEImage,
        points: 20,
        description: 'Connect to Guild to verify your membership in open source company',
        isDone: false
    },
    {
        id: 'GNOSIS',
        title: 'Gnosis Safe',
        link: '#',
        icon: GnosisImage,
        points: 15,
        description: 'Gnosis Safe Signer/Owner Verification',
        isDone: true
    },
    {
        id: 'HOLONYM',
        title: 'Holonym',
        link: '#',
        icon: HolonymImage,
        points: 20,
        description: 'Connect to Holonym to verify your identity without revealing any per...',
        isDone: false
    },
    {
        id: 'SNAPSHOT',
        title: 'Snapshot',
        link: '#',
        icon: SnapShotImage,
        points: 10,
        description: 'Connect to Snapshot to verify your DAO voting power',
        isDone: false
    },
]