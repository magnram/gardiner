export const basicFetcher = (
    input: RequestInfo,
    init: RequestInit,
    ...args: any[]
) => fetch(input, init, ...(args as [])).then((response) => response.json())
