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
