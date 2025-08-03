import type { ISelectItem } from "@/types/common";
import type { ISegmentNameDropdown } from "@/types/segments";
import { COMMON_CONDITION_OPERATORS_KEY, getOperatorOptions } from "./common-data";
import { ALL_AUTOMATIONS } from "./automations-data";
import { ALL_SURVEYS } from "./surveys-data";

export const SEGMENT_MAIN_OPERATORS: ISelectItem[] = [
    {
        id: "and",
        name: "All (AND)"
    },
    {
        id: "or",
        name: "At least one (OR)"
    },
    {
        id: "none",
        name: "None"
    }
];
export const SEGMENT_CONDITIONS_CATEGORIES: Record<string, ISegmentNameDropdown[]> = {
    "Subscriber data": [
        {
            id: "attribute",
            name: "Attribute",
            data: {
                name: "Attribute",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "measure",
            name: "Engagement",
            data: {
                name: "Engagement",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        }
    ],
    "Email data": [
        {
            id: "all",
            name: "Any Email",
            data: {
                name: "Any Email",
                type: "email_action",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "automation_email",
            name: "Automation Email",
            data: {
                name: "Automation Email",
                type: "email_action",
                filters: { operator: "equal", value: "", resource_id: "" }
            }
        },
        {
            id: "email_to_segment",
            name: "Email to a segment",
            data: {
                name: "Email to a segment",
                type: "email_action",
                filters: { operator: "equal", value: "", resource_id: "" }
            }
        },
        {
            id: "post",
            name: "Post",
            data: {
                name: "Post",
                type: "email_action",
                filters: { operator: "equal", value: "", resource_id: "" }
            }
        },
        {
            id: "welcome_email",
            name: "Welcome email",
            data: {
                name: "Welcome email",
                type: "email_action",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "opt_in_email",
            name: "Opt-in email",
            data: {
                name: "Opt-in email",
                type: "email_action",
                filters: { operator: "equal", value: "" }
            }
        }
    ],
    "Automation data": [
        {
            id: "enrollment",
            name: "Enrollment",
            data: {
                name: "Enrollment",
                type: "automation_action",
                filters: { operator: "equal", value: "", resource_id: "" }
            }
        }
    ],
    "Behaviour data": [
        {
            id: "referral_count",
            name: "Referral count",
            data: {
                name: "Referral count",
                type: "behaviour_action",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "poll_response",
            name: "Poll response",
            data: {
                name: "Poll response",
                type: "behaviour_action",
                filters: { operator: "submitted", value: "" }
            }
        },
        {
            id: "survey_response",
            name: "Survey response",
            data: {
                name: "Referral count",
                type: "behaviour_action",
                filters: { operator: "submitted", value: "" }
            }
        }
    ]
};

// Segment Attribute Condition
export const SEGMENT_ATTRIBUTES_NAMES_DROPDOWN: Record<string, ISegmentNameDropdown[]> = {
    Subscription: [
        {
            id: "email",
            name: "Email",
            data: {
                name: "Email",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "status",
            name: "Status",
            data: {
                name: "Status",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "tier",
            name: "Tier",
            data: {
                name: "Tier",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "tier_interval",
            name: "Tier plan",
            data: {
                name: "Tier plan",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "free_trial",
            name: "Free trial",
            data: {
                name: "Free trial",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "signup_date",
            name: "Signup date",
            data: {
                name: "Signup date",
                type: "attribute",
                filters: { operator: "greater_than", value: "", date_type: "specific" }
            }
        },
        {
            id: "unsub_date",
            name: "Unsubscribe date",
            data: {
                name: "Unsubscribe date",
                type: "attribute",
                filters: { operator: "greater_than", value: "", date_type: "specific" }
            }
        },
        {
            id: "custom_field",
            name: "Custom field",
            data: {
                name: "Custom field",
                type: "attribute",
                filters: { operator: "equal", value: "", resource_id: "" }
            }
        },
        {
            id: "subscriber_tag",
            name: "Subscriber tags",
            data: {
                name: "Subscriber tags",
                type: "attribute",
                filters: { operator: "contain", value: "" }
            }
        }
    ],
    Location: [
        {
            id: "latest_location/city",
            name: "City",
            data: {
                name: "City",
                type: "attribute",

                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "latest_location/state",
            name: "State",
            data: {
                name: "State",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "latest_location/country",
            name: "Country",
            data: {
                name: "Country",
                type: "attribute",

                filters: { operator: "equal", value: "" }
            }
        }
    ],
    Acquisition: [
        {
            id: "channel",
            name: "Channel",
            data: {
                name: "Channel",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "source",
            name: "UTM source",
            data: {
                name: "UTM source",
                type: "attribute",

                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "medium",
            name: "UTM medium",
            data: {
                name: "UTM medium",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "campaign",
            name: "UTM campaign",
            data: {
                name: "UTM campaign",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "referring_url",
            name: "Referring URL",
            data: {
                name: "Referring URL",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "external_embed",
            name: "Embed source",
            data: {
                name: "Embed source",
                type: "attribute",
                filters: { operator: "equal", value: "" }
            }
        }
    ]
};
export const SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN: Record<string, ISelectItem[]> = {
    common: getOperatorOptions([
        COMMON_CONDITION_OPERATORS_KEY.equal,
        COMMON_CONDITION_OPERATORS_KEY.not_equal,
        COMMON_CONDITION_OPERATORS_KEY.contain,
        COMMON_CONDITION_OPERATORS_KEY.not_contain,
        COMMON_CONDITION_OPERATORS_KEY.start_with,
        COMMON_CONDITION_OPERATORS_KEY.end_with,
        COMMON_CONDITION_OPERATORS_KEY.exists,
        COMMON_CONDITION_OPERATORS_KEY.does_not_exist
    ]),
    date: getOperatorOptions([
        COMMON_CONDITION_OPERATORS_KEY.greater_than,
        COMMON_CONDITION_OPERATORS_KEY.greater_than_equal_to,
        COMMON_CONDITION_OPERATORS_KEY.less_than,
        COMMON_CONDITION_OPERATORS_KEY.less_than_equal_to
    ]),
    tags: getOperatorOptions([COMMON_CONDITION_OPERATORS_KEY.contain, COMMON_CONDITION_OPERATORS_KEY.not_contain]),
    embed: getOperatorOptions([COMMON_CONDITION_OPERATORS_KEY.equal, COMMON_CONDITION_OPERATORS_KEY.not_equal], {
        [COMMON_CONDITION_OPERATORS_KEY.equal]: "was",
        [COMMON_CONDITION_OPERATORS_KEY.not_equal]: "was not"
    })
};
export const SEGMENT_ATTRIBUTES_VALUE_DROPDOWN: Record<string, ISelectItem[]> = {
    status: [
        { id: "active", name: "Active" },
        { id: "inactive", name: "Inactive" },
        { id: "pending", name: "Pending" }
    ],
    tier: [
        { id: "free", name: "Free Tier" },
        { id: "any", name: "Any Paid Tier" }
    ],
    tier_interval: [
        { id: "month", name: "Monthly" },
        { id: "year", name: "Annual" },
        { id: "one_time", name: "One-Time" },
        { id: "donation", name: "Donation" }
    ],
    free_trial: [{ id: "active", name: "Active" }],
    custom_field: [
        {
            id: "5a34f1c0-abb0-43de-8107-6b26a0f7d1f1",
            name: "Random Custom Field Name 1"
        },
        {
            id: "c3a6a202-fb11-4de0-8c89-1c2b31497d6b",
            name: "Random Custom Field Name 2"
        },
        {
            id: "e57e1b82-6e67-43a6-9089-c7c18d8e8c13",
            name: "Random Custom Field Name 3"
        }
    ],
    subscriber_tag: [
        {
            id: "7fc5a70b-33e4-4f08-8f30-bdd4df7a63d6",
            name: "dummy subscriber tag 1"
        },
        {
            id: "0923c4cc-38a9-44b1-96e5-6c4df6b144a2",
            name: "dummy subscriber tag 2"
        },
        {
            id: "45ed2e1f-d401-4aa5-8a08-9dd2f1fa8462",
            name: "dummy subscriber tag 3"
        },
        {
            id: "ee98e3e6-56db-4b80-bd15-4a8b4e4e5e4c",
            name: "dummy subscriber tag 4"
        }
    ],
    "latest_location/country": [
        { id: "AF", name: "Afghanistan" },
        { id: "AX", name: "Åland Islands" },
        { id: "AL", name: "Albania" },
        { id: "DZ", name: "Algeria" },
        { id: "AS", name: "American Samoa" },
        { id: "AD", name: "Andorra" },
        { id: "AO", name: "Angola" },
        { id: "AI", name: "Anguilla" },
        { id: "AQ", name: "Antarctica" },
        { id: "AG", name: "Antigua and Barbuda" },
        { id: "AR", name: "Argentina" },
        { id: "AM", name: "Armenia" },
        { id: "AW", name: "Aruba" },
        { id: "AU", name: "Australia" },
        { id: "AT", name: "Austria" },
        { id: "AZ", name: "Azerbaijan" },
        { id: "BS", name: "Bahamas" },
        { id: "BH", name: "Bahrain" },
        { id: "BD", name: "Bangladesh" },
        { id: "BB", name: "Barbados" },
        { id: "BY", name: "Belarus" },
        { id: "BE", name: "Belgium" },
        { id: "BZ", name: "Belize" },
        { id: "BJ", name: "Benin" },
        { id: "BM", name: "Bermuda" },
        { id: "BT", name: "Bhutan" },
        { id: "BO", name: "Bolivia (Plurinational State of)" },
        { id: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
        { id: "BA", name: "Bosnia and Herzegovina" },
        { id: "BW", name: "Botswana" },
        { id: "BV", name: "Bouvet Island" },
        { id: "BR", name: "Brazil" },
        { id: "IO", name: "British Indian Ocean Territory" },
        { id: "BN", name: "Brunei Darussalam" },
        { id: "BG", name: "Bulgaria" },
        { id: "BF", name: "Burkina Faso" },
        { id: "BI", name: "Burundi" },
        { id: "CV", name: "Cabo Verde" },
        { id: "KH", name: "Cambodia" },
        { id: "CM", name: "Cameroon" },
        { id: "CA", name: "Canada" },
        { id: "KY", name: "Cayman Islands" },
        { id: "CF", name: "Central African Republic" },
        { id: "TD", name: "Chad" },
        { id: "CL", name: "Chile" },
        { id: "CN", name: "China" },
        { id: "CX", name: "Christmas Island" },
        { id: "CC", name: "Cocos (Keeling) Islands" },
        { id: "CO", name: "Colombia" },
        { id: "KM", name: "Comoros" },
        { id: "CG", name: "Congo" },
        { id: "CD", name: "Congo, Democratic Republic of the" },
        { id: "CK", name: "Cook Islands" },
        { id: "CR", name: "Costa Rica" },
        { id: "CI", name: "Côte d’Ivoire" },
        { id: "HR", name: "Croatia" },
        { id: "CU", name: "Cuba" },
        { id: "CW", name: "Curaçao" },
        { id: "CY", name: "Cyprus" },
        { id: "CZ", name: "Czech Republic" },
        { id: "DK", name: "Denmark" },
        { id: "DJ", name: "Djibouti" },
        { id: "DM", name: "Dominica" },
        { id: "DO", name: "Dominican Republic" },
        { id: "EC", name: "Ecuador" },
        { id: "EG", name: "Egypt" },
        { id: "SV", name: "El Salvador" },
        { id: "GQ", name: "Equatorial Guinea" },
        { id: "ER", name: "Eritrea" },
        { id: "EE", name: "Estonia" },
        { id: "SZ", name: "Eswatini" },
        { id: "ET", name: "Ethiopia" },
        { id: "FK", name: "Falkland Islands (Malvinas)" },
        { id: "FO", name: "Faroe Islands" },
        { id: "FJ", name: "Fiji" },
        { id: "FI", name: "Finland" },
        { id: "FR", name: "France" },
        { id: "GF", name: "French Guiana" },
        { id: "PF", name: "French Polynesia" },
        { id: "TF", name: "French Southern Territories" },
        { id: "GA", name: "Gabon" },
        { id: "GM", name: "Gambia" },
        { id: "GE", name: "Georgia" },
        { id: "DE", name: "Germany" },
        { id: "GH", name: "Ghana" },
        { id: "GI", name: "Gibraltar" },
        { id: "GR", name: "Greece" },
        { id: "GL", name: "Greenland" },
        { id: "GD", name: "Grenada" },
        { id: "GP", name: "Guadeloupe" },
        { id: "GU", name: "Guam" },
        { id: "GT", name: "Guatemala" },
        { id: "GG", name: "Guernsey" },
        { id: "GN", name: "Guinea" },
        { id: "GW", name: "Guinea-Bissau" },
        { id: "GY", name: "Guyana" },
        { id: "HT", name: "Haiti" },
        { id: "HM", name: "Heard Island and McDonald Islands" },
        { id: "VA", name: "Holy See (Vatican City State)" },
        { id: "HN", name: "Honduras" },
        { id: "HK", name: "Hong Kong" },
        { id: "HU", name: "Hungary" },
        { id: "IS", name: "Iceland" },
        { id: "IN", name: "India" },
        { id: "ID", name: "Indonesia" },
        { id: "IR", name: "Iran (Islamic Republic of)" },
        { id: "IQ", name: "Iraq" },
        { id: "IE", name: "Ireland" },
        { id: "IM", name: "Isle of Man" },
        { id: "IL", name: "Israel" },
        { id: "IT", name: "Italy" },
        { id: "JM", name: "Jamaica" },
        { id: "JP", name: "Japan" },
        { id: "JE", name: "Jersey" },
        { id: "JO", name: "Jordan" },
        { id: "KZ", name: "Kazakhstan" },
        { id: "KE", name: "Kenya" },
        { id: "KI", name: "Kiribati" },
        { id: "KP", name: "Korea (North)" },
        { id: "KR", name: "Korea (Republic of)" },
        { id: "KW", name: "Kuwait" },
        { id: "KG", name: "Kyrgyzstan" },
        { id: "LA", name: "Lao People’s Democratic Republic" },
        { id: "LV", name: "Latvia" },
        { id: "LB", name: "Lebanon" },
        { id: "LS", name: "Lesotho" },
        { id: "LR", name: "Liberia" },
        { id: "LY", name: "Libya" },
        { id: "LI", name: "Liechtenstein" },
        { id: "LT", name: "Lithuania" },
        { id: "LU", name: "Luxembourg" },
        { id: "MO", name: "Macao" },
        { id: "MG", name: "Madagascar" },
        { id: "MW", name: "Malawi" },
        { id: "MY", name: "Malaysia" },
        { id: "MV", name: "Maldives" },
        { id: "ML", name: "Mali" },
        { id: "MT", name: "Malta" },
        { id: "MH", name: "Marshall Islands" },
        { id: "MQ", name: "Martinique" },
        { id: "MR", name: "Mauritania" },
        { id: "MU", name: "Mauritius" },
        { id: "YT", name: "Mayotte" },
        { id: "MX", name: "Mexico" },
        { id: "FM", name: "Micronesia (Federated States of)" },
        { id: "MD", name: "Moldova (Republic of)" },
        { id: "MC", name: "Monaco" },
        { id: "MN", name: "Mongolia" },
        { id: "ME", name: "Montenegro" },
        { id: "MS", name: "Montserrat" },
        { id: "MA", name: "Morocco" },
        { id: "MZ", name: "Mozambique" },
        { id: "MM", name: "Myanmar" },
        { id: "NA", name: "Namibia" },
        { id: "NR", name: "Nauru" },
        { id: "NP", name: "Nepal" },
        { id: "NL", name: "Netherlands" },
        { id: "NC", name: "New Caledonia" },
        { id: "NZ", name: "New Zealand" },
        { id: "NI", name: "Nicaragua" },
        { id: "NE", name: "Niger" },
        { id: "NG", name: "Nigeria" },
        { id: "NU", name: "Niue" },
        { id: "NF", name: "Norfolk Island" },
        { id: "MP", name: "Northern Mariana Islands" },
        { id: "NO", name: "Norway" },
        { id: "OM", name: "Oman" },
        { id: "PK", name: "Pakistan" },
        { id: "PW", name: "Palau" },
        { id: "PS", name: "Palestine, State of" },
        { id: "PA", name: "Panama" },
        { id: "PG", name: "Papua New Guinea" },
        { id: "PY", name: "Paraguay" },
        { id: "PE", name: "Peru" },
        { id: "PH", name: "Philippines" },
        { id: "PN", name: "Pitcairn" },
        { id: "PL", name: "Poland" },
        { id: "PT", name: "Portugal" },
        { id: "PR", name: "Puerto Rico" },
        { id: "QA", name: "Qatar" },
        { id: "RE", name: "Réunion" },
        { id: "RO", name: "Romania" },
        { id: "RU", name: "Russian Federation" },
        { id: "RW", name: "Rwanda" },
        { id: "BL", name: "Saint Barthélemy" },
        { id: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
        { id: "KN", name: "Saint Kitts and Nevis" },
        { id: "LC", name: "Saint Lucia" },
        { id: "MF", name: "Saint Martin (French part)" },
        { id: "PM", name: "Saint Pierre and Miquelon" },
        { id: "VC", name: "Saint Vincent and the Grenadines" },
        { id: "WS", name: "Samoa" },
        { id: "SM", name: "San Marino" },
        { id: "ST", name: "Sao Tome and Principe" },
        { id: "SA", name: "Saudi Arabia" },
        { id: "SN", name: "Senegal" },
        { id: "RS", name: "Serbia" },
        { id: "SC", name: "Seychelles" },
        { id: "SL", name: "Sierra Leone" },
        { id: "SG", name: "Singapore" },
        { id: "SX", name: "Sint Maarten (Dutch part)" },
        { id: "SK", name: "Slovakia" },
        { id: "SI", name: "Slovenia" },
        { id: "SB", name: "Solomon Islands" },
        { id: "SO", name: "Somalia" },
        { id: "ZA", name: "South Africa" },
        { id: "GS", name: "South Georgia and the South Sandwich Islands" },
        { id: "SS", name: "South Sudan" },
        { id: "ES", name: "Spain" },
        { id: "LK", name: "Sri Lanka" },
        { id: "SD", name: "Sudan" },
        { id: "SR", name: "Suriname" },
        { id: "SJ", name: "Svalbard and Jan Mayen" },
        { id: "SE", name: "Sweden" },
        { id: "CH", name: "Switzerland" },
        { id: "SY", name: "Syrian Arab Republic" },
        { id: "TW", name: "Taiwan, Province of China" },
        { id: "TJ", name: "Tajikistan" },
        { id: "TZ", name: "Tanzania, United Republic of" },
        { id: "TH", name: "Thailand" },
        { id: "TL", name: "Timor-Leste" },
        { id: "TG", name: "Togo" },
        { id: "TK", name: "Tokelau" },
        { id: "TO", name: "Tonga" },
        { id: "TT", name: "Trinidad and Tobago" },
        { id: "TN", name: "Tunisia" },
        { id: "TR", name: "Turkey" },
        { id: "TM", name: "Turkmenistan" },
        { id: "TC", name: "Turks and Caicos Islands" },
        { id: "TV", name: "Tuvalu" },
        { id: "UG", name: "Uganda" },
        { id: "UA", name: "Ukraine" },
        { id: "AE", name: "United Arab Emirates" },
        { id: "GB", name: "United Kingdom of Great Britain and Northern Ireland" },
        { id: "UM", name: "United States Minor Outlying Islands" },
        { id: "US", name: "United States of America" },
        { id: "UY", name: "Uruguay" },
        { id: "UZ", name: "Uzbekistan" },
        { id: "VU", name: "Vanuatu" },
        { id: "VE", name: "Venezuela (Bolivarian Republic of)" },
        { id: "VN", name: "Viet Nam" },
        { id: "VG", name: "Virgin Islands (British)" },
        { id: "VI", name: "Virgin Islands (U.S.)" },
        { id: "WF", name: "Wallis and Futuna" },
        { id: "EH", name: "Western Sahara" },
        { id: "YE", name: "Yemen" },
        { id: "ZM", name: "Zambia" },
        { id: "ZW", name: "Zimbabwe" }
    ],
    channel: [
        { id: "website", name: "Website" },
        { id: "import", name: "Import" },
        { id: "embed", name: "Embed" },
        { id: "api", name: "API" },
        { id: "referral", name: "Referral" },
        { id: "recommendation", name: "Recommendation" },
        { id: "web_boost", name: "Web Boost" },
        { id: "email_boost", name: "Email Boost" },
        { id: "integration", name: "Integration" },
        { id: "magic_link", name: "Magic Link" },
        { id: "boost_direct_link", name: "Boost Direct Link" }
    ],
    external_embed: [
        {
            id: "f09d6be5-c845-41cf-91c6-7d2dfd4a4c1a",
            name: "New Subscribe form 1"
        },
        {
            id: "82a52f7c-1c43-4de5-98bb-c13b41c7a3dc",
            name: "New Subscribe form 2"
        },
        {
            id: "af2e801b-6107-4fef-92aa-dba34b2014de",
            name: "New Subscribe form 3"
        }
    ]
};
export const SEGMENT_ATTRIBUTE_DATE_TYPE_DROPDOWN: ISelectItem[] = [
    { id: "specific", name: "a specific date" },
    { id: "relative", name: "a relative date" }
];
export const SEGMENT_ATTRIBUTE_RELATIVE_DATE_TYPE_DROPDOWN: ISelectItem[] = [
    { id: "ago", name: "ago" },
    { id: "from_now", name: "from now" }
];

// Segment Engagement Condition
export const SEGMENT_ENGAGEMENT_NAMES_DROPDOWN: Record<string, ISegmentNameDropdown[]> = {
    Email: [
        {
            id: "unique_opens",
            name: "Unique opens",
            data: {
                name: "Unique opens",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "open_rate",
            name: "Open rate",
            data: {
                name: "Open rate",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "unique_clicks",
            name: "Unique clicks",
            data: {
                name: "Unique clicks",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "verified_unique_clicks",
            name: "Verified unique clicks",
            data: {
                name: "Verified unique clicks",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "click_through_rate",
            name: "Click through rate",
            data: {
                name: "Click through rate",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "verified_click_through_rate",
            name: "Verified click through rate",
            data: {
                name: "Verified click through rate",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "unique_sends",
            name: "Unique sends",
            data: {
                name: "Unique sends",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "link_click",
            name: "Link click",
            data: {
                name: "Link click",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        }
    ],
    "Mailbox rejections": [
        {
            id: "deferred",
            name: "Deferred",
            data: {
                name: "Deferred",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        },
        {
            id: "bounce",
            name: "Bounced",
            data: {
                name: "Bounced",
                type: "measure",
                filters: { operator: "equal", value: "" }
            }
        }
    ]
};
export const SEGMENT_ENGAGEMENT_OPERATORS_DROPDOWN: Record<string, ISelectItem[]> = {
    common: getOperatorOptions(
        [
            COMMON_CONDITION_OPERATORS_KEY.equal,
            COMMON_CONDITION_OPERATORS_KEY.not_equal,
            COMMON_CONDITION_OPERATORS_KEY.greater_than,
            COMMON_CONDITION_OPERATORS_KEY.greater_than_equal_to,
            COMMON_CONDITION_OPERATORS_KEY.less_than,
            COMMON_CONDITION_OPERATORS_KEY.less_than_equal_to
        ],
        {
            [COMMON_CONDITION_OPERATORS_KEY.equal]: "is exactly",
            [COMMON_CONDITION_OPERATORS_KEY.not_equal]: "is not exactly",
            [COMMON_CONDITION_OPERATORS_KEY.greater_than]: "is greater than",
            [COMMON_CONDITION_OPERATORS_KEY.greater_than_equal_to]: "is greater than or equal to",
            [COMMON_CONDITION_OPERATORS_KEY.less_than]: "is less than",
            [COMMON_CONDITION_OPERATORS_KEY.less_than_equal_to]: "is less than or equal to"
        }
    ),
    link: getOperatorOptions(
        [
            COMMON_CONDITION_OPERATORS_KEY.equal,
            COMMON_CONDITION_OPERATORS_KEY.not_equal,
            COMMON_CONDITION_OPERATORS_KEY.contain,
            COMMON_CONDITION_OPERATORS_KEY.not_contain,
            COMMON_CONDITION_OPERATORS_KEY.start_with,
            COMMON_CONDITION_OPERATORS_KEY.end_with,
            COMMON_CONDITION_OPERATORS_KEY.not_start_with,
            COMMON_CONDITION_OPERATORS_KEY.not_end_with
        ],
        {
            [COMMON_CONDITION_OPERATORS_KEY.equal]: "was",
            [COMMON_CONDITION_OPERATORS_KEY.not_equal]: "was not",
            [COMMON_CONDITION_OPERATORS_KEY.contain]: "contained",
            [COMMON_CONDITION_OPERATORS_KEY.not_contain]: "did not contain",
            [COMMON_CONDITION_OPERATORS_KEY.start_with]: "began with",
            [COMMON_CONDITION_OPERATORS_KEY.end_with]: "ended with",
            [COMMON_CONDITION_OPERATORS_KEY.not_start_with]: "did not begin with",
            [COMMON_CONDITION_OPERATORS_KEY.not_end_with]: "did not end with"
        }
    )
};

// Segment Email Action Condition
export const SEGMENT_EMAIL_ACTION_OPERATORS_DROPDOWN: Record<string, ISelectItem[]> = {
    common: getOperatorOptions([COMMON_CONDITION_OPERATORS_KEY.equal, COMMON_CONDITION_OPERATORS_KEY.not_equal], {
        [COMMON_CONDITION_OPERATORS_KEY.equal]: "was",
        [COMMON_CONDITION_OPERATORS_KEY.not_equal]: "was not"
    })
};
export const SEGMENT_EMAIL_ACTION_VALUE_DROPDOWN: ISelectItem[] = [
    { id: "sent", name: "Sent" },
    { id: "received", name: "Received" },
    { id: "opened", name: "Opened" },
    { id: "clicked", name: "Clicked" },
    { id: "verified_click", name: "Verified Click" }
];
export const SEGMENT_EMAIL_ACTION_RESOURCE_ID_DROPDOWN: Record<string, ISelectItem[]> = {
    posts: [
        {
            id: "fbbda288-7c60-45fd-9e35-6ace1ff3ce86",
            name: "Ava Sinclair on Working Remotely While Traveling"
        },
        {
            id: "fbbda288-7c60-45fd-9e35-6ad3gzs3ce86",
            name: "Rock Bottom Working From In Office"
        }
    ]
};

// Segment Automation Action Condition
export const SEGMENT_AUTOMATION_ACTION_OPERATORS_DROPDOWN: Record<string, ISelectItem[]> = {
    common: getOperatorOptions([COMMON_CONDITION_OPERATORS_KEY.equal, COMMON_CONDITION_OPERATORS_KEY.not_equal], {
        [COMMON_CONDITION_OPERATORS_KEY.equal]: "was",
        [COMMON_CONDITION_OPERATORS_KEY.not_equal]: "was not"
    })
};
export const SEGMENT_AUTOMATION_ACTION_VALUE_DROPDOWN: Record<string, ISelectItem[]> = {
    enrollment: [
        { id: "started", name: "Started" },
        { id: "completed", name: "Completed" }
    ]
};
export const SEGMENT_AUTOMATION_ACTION_RESOURCE_ID_DROPDOWN: Record<string, ISelectItem[]> = {
    enrollment: [{ id: "any", name: "Any automation" }].concat(ALL_AUTOMATIONS)
};

// Segment Behaviour Action Condition
export const SEGMENT_BEHAVIOUR_ACTION_OPERATORS_DROPDOWN: Record<string, ISelectItem[]> = {
    common: getOperatorOptions([COMMON_CONDITION_OPERATORS_KEY.submitted, COMMON_CONDITION_OPERATORS_KEY.not_submitted]),
    referral: getOperatorOptions(
        [
            COMMON_CONDITION_OPERATORS_KEY.equal,
            COMMON_CONDITION_OPERATORS_KEY.not_equal,
            COMMON_CONDITION_OPERATORS_KEY.greater_than,
            COMMON_CONDITION_OPERATORS_KEY.greater_than_equal_to,
            COMMON_CONDITION_OPERATORS_KEY.less_than,
            COMMON_CONDITION_OPERATORS_KEY.less_than_equal_to
        ],
        {
            [COMMON_CONDITION_OPERATORS_KEY.equal]: "is exactly",
            [COMMON_CONDITION_OPERATORS_KEY.not_equal]: "is not exactly",
            [COMMON_CONDITION_OPERATORS_KEY.greater_than]: "is greater than",
            [COMMON_CONDITION_OPERATORS_KEY.greater_than_equal_to]: "is greater than or equal to",
            [COMMON_CONDITION_OPERATORS_KEY.less_than]: "is less than",
            [COMMON_CONDITION_OPERATORS_KEY.less_than_equal_to]: "is less than or equal to"
        }
    )
};
export const SEGMENT_BEHAVIOUR_ACTION_VALUE_DROPDOWN: Record<string, ISelectItem[]> = {
    polls: [
        {
            id: "any",
            name: "Any poll"
        },
        {
            id: "414919f9-dd03-4375-965d-4cd4f37ed696",
            name: "Test Poll"
        }
    ],
    surveys: ALL_SURVEYS
};
export const SEGMENT_BEHAVIOUR_ACTION_RESOURCE_ID_DROPDOWN: Record<string, ISelectItem[]> = {
    pollchoices: [
        {
            id: "72758ee3-b0c2-4fb7-a9ee-1424d3feb3bb",
            name: "Biriyani"
        },
        {
            id: "d5be9973-b77c-4df4-82b0-81305ded1365",
            name: "Fried Rice"
        },
        {
            id: "0e10f659-d6a0-4140-a374-1ff58fb3a667",
            name: "Chowmein"
        }
    ]
};
