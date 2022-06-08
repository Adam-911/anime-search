export type AnimeData = {
    pageInfo: PageInfo,
    media: Array<Media>
}

export type PageInfo = {
    currentPage: number,
    hasNextPage: boolean,
    lastPage: number,
    perPage: number,
    total: number,
    __typename: string
}

export type Media = {
    id: number,
    title: MediaTitle,
    __typename: string
}

export type MediaTitle = {
    english: string | null,
    native: string | null
    romaji: string | null
    __typename?: string 
}