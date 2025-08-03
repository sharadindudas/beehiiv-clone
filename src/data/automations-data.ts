import type { IAutomation } from "@/types/automations";

export const ALL_AUTOMATIONS: IAutomation[] = [
    {
        id: "d82edd37-79ac-4e1f-a145-f7517ec64890",
        name: "Dummy Automation",
        description: "dummy automation description",
        state: "running",
        stats: {
            completed_count: 0,
            running_count: 0,
            total_count: 0
        },
        created_at: "2025-07-30T02:50:09Z",
        updated_at: "2025-07-30T02:50:09Z",
        nodes_count: 1,
        template: false
    },
    {
        id: "10b83848-1c9f-488f-9550-bb571652cfe3",
        name: "Test Automation",
        description: "test automation description",
        state: "inactive",
        stats: {
            completed_count: 0,
            running_count: 0,
            total_count: 0
        },
        created_at: "2025-08-02T15:54:43Z",
        updated_at: "2025-08-02T15:54:43Z",
        nodes_count: 0,
        template: false
    }
];
