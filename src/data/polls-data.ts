import type { IPoll } from "@/types/polls";

export const ALL_POLLS: IPoll[] = [
    {
        id: "414919f9-dd03-4375-965d-4cd4f37ed696",
        name: "Dummy Poll",
        description: "",
        question: "Favourite Food",
        redirect_url: "",
        poll_choices: [
            {
                id: "2ead7123-661c-44fa-915e-612b5655bbbb",
                name: "Biriyani"
            },
            {
                id: "5bd74d85-dd7c-4a50-a681-025f75e01c10",
                name: "Fried Rice"
            },
            {
                id: "e060034b-b446-42a5-a9d2-25e6c1189d73",
                name: "Chowmein"
            }
        ],
        metrics: {
            Biriyani: 0,
            "Fried Rice": 0,
            Chowmein: 0
        },
        completions: 0,
        appearances: 1,
        status: "published",
        most_recent_response: null,
        poll_type: "voting",
        trivia_answer: "",
        created_at: "2025-07-31T18:05:20Z",
        updated_at: "2025-08-05T01:19:05Z"
    },
    {
        id: "54975141-86bc-4bf6-b14d-ee420eded99e",
        name: "Test Poll",
        description: "",
        question: "What type of sports do you like?",
        redirect_url: "",
        poll_choices: [
            {
                id: "4dfbcded-e7b9-4c92-88e1-0caa968d65f1",
                name: "Cricket"
            },
            {
                id: "0eeb49d2-ccb3-4f9d-aa67-930f53e831da",
                name: "Football"
            },
            {
                id: "90675248-941e-4397-8fd3-ebc87330c7d6",
                name: "Tennis"
            },
            {
                id: "06338eec-f408-48eb-8891-0939cd429af6",
                name: "Badminton"
            }
        ],
        metrics: {
            Cricket: 0,
            Football: 0,
            Tennis: 0,
            Badminton: 0
        },
        completions: 0,
        appearances: 0,
        status: "draft",
        most_recent_response: null,
        poll_type: "trivia",
        trivia_answer: "Cricket",
        created_at: "2025-08-05T01:22:47Z",
        updated_at: "2025-08-05T01:22:47Z"
    }
];
