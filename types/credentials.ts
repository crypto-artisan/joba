export type TCrendential = "basename" | "binance_account_bound" | "coinbase_verified_id" |
    "cyber_id" | "ens" | "farcaster" | "fractal_id" |
    "galxe" | "gitcoin" | "holonym" | "phaver";

export interface IPassportCredential {
    "calculating_score": boolean,
    "category": "Activity" | "Identity" | "Skills",
    "earned_at"?: null,
    "id": string,
    "last_calculated_at": string,
    "max_score": number,
    "name": string,
    "onchain_at"?: null,
    "score": 0,
    "type": TCrendential,
    "value": null
}

export interface IPassport {
    "activity_score": number,
    "calculating_score": boolean,
    "created_at": string,
    "human_checkmark": boolean,
    "identity_score": number,
    "last_calculated_at": string,
    "main_wallet": `0x${string}`,
    "main_wallet_changed_at"?: null,
    "onchain": boolean,
    "passport_id": number,
    "passport_profile": {
        "bio": string,
        "display_name": string,
        "image_url": string,
        "location": string,
        "name": string,
        "tags": string[]
    },
    "score": number,
    "skills_score": number,
    "socials_calculated_at": string,
    "verified": boolean,
    "verified_wallets": `0x${string}`[]
}
