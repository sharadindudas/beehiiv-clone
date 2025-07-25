export interface ISegmentBaseCondition {
    id: string;
    name: string;
    type: string;
    category: string;
    filters: {
        value: string;
        operator: string;
        date_type?: string;
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
    filters: {
        operator: string;
        value: string;
        resource_id?: string;
        date_type?: string;
    };
}
