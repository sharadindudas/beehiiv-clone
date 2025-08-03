export interface IAutomation {
    id: string;
    name: string;
    description: string;
    state: string;
    stats: {
        completed_count: number;
        running_count: number;
        total_count: number;
    };
    created_at: string;
    updated_at: string;
    nodes_count: number;
    template: boolean;
}
