import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
    LayoutDashboard,
    FileText,
    Users,
    ChevronDown,
    ChevronRight,
    TrendingUp,
    DollarSign,
    Globe,
    BarChart3,
    Settings,
    Plus,
    UserPlus,
    Layers,
    Zap,
    Vote,
    ClipboardList,
    UserCheck
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Sidebar() {
    const [audienceOpen, setAudienceOpen] = useState<boolean>(true);
    const [growOpen, setGrowOpen] = useState<boolean>(false);
    const [monetizeOpen, setMonetizeOpen] = useState<boolean>(false);
    const [websiteOpen, setWebsiteOpen] = useState<boolean>(false);
    const [analyzeOpen, setAnalyzeOpen] = useState<boolean>(false);

    return (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col fixed top-0 left-0 z-10 h-full">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">S</span>
                    </div>
                    <div>
                        <h2 className="font-medium text-sm">Sharadindu's Newsletter</h2>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {/* Dashboard */}
                <Link to="/dashboard">
                    <Button
                        variant="ghost"
                        className="w-full justify-start bg-gray-100">
                        <LayoutDashboard className="w-4 h-4 mr-3" />
                        Dashboard
                    </Button>
                </Link>

                {/* Start writing */}
                <Button className="w-full justify-start bg-black hover:bg-gray-800 text-white mb-4">
                    <Plus className="w-4 h-4 mr-3" />
                    Start writing
                </Button>

                {/* Posts */}
                <Link to="/posts">
                    <Button
                        variant="ghost"
                        className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-3" />
                        Posts
                    </Button>
                </Link>

                {/* Audience */}
                <Collapsible
                    open={audienceOpen}
                    onOpenChange={setAudienceOpen}>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            className="w-full justify-start">
                            <Users className="w-4 h-4 mr-3" />
                            Audience
                            {audienceOpen ? <ChevronDown className="w-4 h-4 ml-auto" /> : <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-7 space-y-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            <UserPlus className="w-3 h-3 mr-2" />
                            Subscribers
                        </Button>
                        <Link to="/segments">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start text-sm">
                                <Layers className="w-3 h-3 mr-2" />
                                Segments
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            <Zap className="w-3 h-3 mr-2" />
                            Automations
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            <Vote className="w-3 h-3 mr-2" />
                            Polls
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            <ClipboardList className="w-3 h-3 mr-2" />
                            Surveys
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            <UserCheck className="w-3 h-3 mr-2" />
                            Subscribe forms
                        </Button>
                    </CollapsibleContent>
                </Collapsible>

                {/* Grow */}
                <Collapsible
                    open={growOpen}
                    onOpenChange={setGrowOpen}>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            className="w-full justify-start">
                            <TrendingUp className="w-4 h-4 mr-3" />
                            Grow
                            {growOpen ? <ChevronDown className="w-4 h-4 ml-auto" /> : <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-7 space-y-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Referrals
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Recommendations
                        </Button>
                    </CollapsibleContent>
                </Collapsible>

                {/* Monetize */}
                <Collapsible
                    open={monetizeOpen}
                    onOpenChange={setMonetizeOpen}>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            className="w-full justify-start">
                            <DollarSign className="w-4 h-4 mr-3" />
                            Monetize
                            {monetizeOpen ? <ChevronDown className="w-4 h-4 ml-auto" /> : <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-7 space-y-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Subscriptions
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Ad Network
                        </Button>
                    </CollapsibleContent>
                </Collapsible>

                {/* Website */}
                <Collapsible
                    open={websiteOpen}
                    onOpenChange={setWebsiteOpen}>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            className="w-full justify-start">
                            <Globe className="w-4 h-4 mr-3" />
                            Website
                            {websiteOpen ? <ChevronDown className="w-4 h-4 ml-auto" /> : <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-7 space-y-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Pages
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Design
                        </Button>
                    </CollapsibleContent>
                </Collapsible>

                {/* Analyze */}
                <Collapsible
                    open={analyzeOpen}
                    onOpenChange={setAnalyzeOpen}>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            className="w-full justify-start">
                            <BarChart3 className="w-4 h-4 mr-3" />
                            Analyze
                            {analyzeOpen ? <ChevronDown className="w-4 h-4 ml-auto" /> : <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-7 space-y-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Analytics
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm">
                            Reports
                        </Button>
                    </CollapsibleContent>
                </Collapsible>
            </nav>

            {/* Settings */}
            <div className="p-4 border-t border-gray-200">
                <Button
                    variant="ghost"
                    className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                </Button>
            </div>
        </div>
    );
}
