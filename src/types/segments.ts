import type { SegmentConditionSchema, SegmentConditionsSchema } from "@/schemas/segments";
import type { FieldApi, ReactFormExtendedApi } from "@tanstack/react-form";

export interface ISegmentNameDropdown {
    id: string;
    name: string;
    filters: SegmentConditionSchema["filters"];
}

export interface ICommonSegmentConditionProps {
    index: number;
    condition: SegmentConditionSchema;
    form: ReactFormExtendedApi<SegmentConditionsSchema, any, any, any, any, any, any, any, any, any>;
    field: FieldApi<SegmentConditionsSchema, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>;
}
