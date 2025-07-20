import { createFileRoute } from "@tanstack/react-router";
import SegmentConditionsSection from "./-components/segment-conditions";

export const Route = createFileRoute("/_main-layout/segments/")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <main className="mt-7 px-5">
            {/* Header Section */}
            <h1>Segmentations</h1>
            <p>Segments are a way to group your subscribers based on their attributes and activity.</p>

            <SegmentConditionsSection />
        </main>
    );
}

