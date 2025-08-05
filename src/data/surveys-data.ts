import type { ISurvey } from "@/types/surveys";

export const ALL_SURVEYS: ISurvey[] = [
    {
        id: "b349adaa-bbcc-443f-b275-9c3da16d836d",
        name: "Dummy Survey",
        description: "",
        cta_text: "Submit",
        thank_you_message: "Thank you for your submission.",
        status: "live",
        url: "https://sharadindus-newsletter-81499c.beehiiv.com/forms/b349adaa-bbcc-443f-b275-9c3da16d836d",
        form_response_count: 0,
        form_questions: [
            {
                id: "6c94717a-7152-4239-a911-dd183a70d3f7",
                order: 1,
                prompt: "What is your favourite food?",
                required: true,
                multi_select: false,
                show_max_characters: false,
                max_character_limit: 400,
                min_character_limit: null,
                question_type: "free_form",
                custom_field: {
                    id: "1aaa9953-e436-4348-8efe-e3529e5e3fd1",
                    type: "string"
                },
                form_question_options: []
            }
        ],
        created_at: "2025-08-02T06:21:36.701Z",
        most_recent_response: null
    }
];
