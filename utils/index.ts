export function shortAddress(address: `0x${string}`) {
    return address.slice(0, 10) + '...' + address.slice(-5);
}