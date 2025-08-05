import type { ISelectItem } from "./common";

export interface IPoll {
    id: string;
    name: string;
    description: string;
    question: string;
    redirect_url: string;
    poll_choices: ISelectItem[];
    metrics: Record<string, number>;
    completions: number;
    appearances: number;
    status: "published" | "draft" | string;
    most_recent_response: null;
    poll_type: "voting" | "trivia" | string;
    trivia_answer: string;
    created_at: string;
    updated_at: string;
}
