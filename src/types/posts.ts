export interface IPost {
    id: string;
    image_url: string;
    stats_overview: IPostStatsOverview;
    status: "published" | "draft" | "scheduled" | string;
    subtitle: string;
    name: string;
    created_at: string;
    updated_at: string;
    url: string;
}

export interface IPostStatsOverview {
    total_sent: number;
    total_delivered: number;
    open_rate: number;
    click_rate: number;
    total_upgrades: number;
    total_web_viewed: number;
    total_unique_web_clicked: number;
}
