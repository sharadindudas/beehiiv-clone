export interface ISurvey {
    id: string;
    name: string;
    description: string;
    cta_text: string;
    thank_you_message: string;
    status: "live" | "draft" | "archived";
    url: string;
    form_response_count: number;
    form_questions: IFormQuestion[];
    created_at: string;
    most_recent_response: null;
}

export interface IFormQuestion {
    id: string;
    order: number;
    prompt: string;
    required: boolean;
    multi_select: boolean;
    show_max_characters: boolean;
    max_character_limit: number | null;
    min_character_limit: number | null;
    question_type: "free_form" | "multiple_choice" | "rating" | string;
    custom_field: ICustomField;
    form_question_options: IFormQuestionOption[];
}

export interface ICustomField {
    id: string;
    type: "string" | "number" | "date" | string;
}

export interface IFormQuestionOption {
    id?: string;
    label?: string;
    value?: string;
}
