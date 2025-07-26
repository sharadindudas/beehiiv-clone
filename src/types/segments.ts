import type { SegmentConditionSchema } from "@/schemas/segments";

export interface ISegmentNameDropdown {
    id: string;
    name: string;
    filters: SegmentConditionSchema["filters"];
}
