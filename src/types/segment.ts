export interface ISegmentBaseCondition {
    id: string;
    name: string;
    type: string;
    category: string;
    inputType: string;
    filters: {
        value: string | number;
        operator: string;
        resource_id?: string;
    };
}

export interface ISegmentGroupCondition {
    id: "group";
    name: string;
    type: string;
    logical_operator: string;
    conditions: ISegmentBaseCondition[];
}

export interface ISegmentConditions {
    conditions: {
        conditions: (ISegmentBaseCondition | ISegmentGroupCondition)[];
        logical_operator: string;
    };
}

export interface ISegmentNameDropdown {
    id: string;
    name: string;
    operator: string;
    inputType?: string;
    date_type?: string;
}
