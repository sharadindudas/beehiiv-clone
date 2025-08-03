export interface ISurvey {
    id: string;
    publication_id: string;
    name: string;
    header: string;
    description: string;
    input_placeholder: null;
    button_text: string;
    created_at: string;
    updated_at: string;
    success_message_text: null;
    success_redirect_url: null;
    deleted_at: null;
    remove_email_from_redirect_url: boolean;
    version: string;
    config: {
        button_color: null;
        background_color: null;
        text_color: null;
        button_text_color: null;
        header_font: null;
        body_font: null;
        button_font: null;
    };
}
