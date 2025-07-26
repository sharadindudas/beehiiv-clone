import { createFileRoute } from "@tanstack/react-router";
import SegmentConditionsSection from "./-components/segment-conditions";
import MainLayout from "@/components/layout/main-layout";

export const Route = createFileRoute("/_authenticated-layout/_main-layout/segments/")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <MainLayout
            title="Segmentations"
            description="Segments are a way to group your subscribers based on their attributes and activity.">
            <SegmentConditionsSection />
        </MainLayout>
    );
}
