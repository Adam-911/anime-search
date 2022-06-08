import { gql } from "@apollo/client";

export const GET_ALL_ITEMS = gql`
    query {
        Page (page: 1, perPage: 6) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (search: "Fate/Zero") {
                id
                title {
                    romaji
                    english
                    native
                }
            }
        }
    }
`