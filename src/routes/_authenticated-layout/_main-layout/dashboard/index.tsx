import MainLayout from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Mail, Plus, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/_authenticated-layout/_main-layout/dashboard/")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <MainLayout
            title="Hi Sharadindu 👋"
            description="Here's how your publication is doing">
            <Tabs
                defaultValue="overview"
                className="space-y-6 mt-5">
                <div className="flex items-center justify-between">
                    <TabsList className="grid w-fit grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="audience">Audience</TabsTrigger>
                        <TabsTrigger value="engagement">Engagement</TabsTrigger>
                        <TabsTrigger value="monetization">Monetization</TabsTrigger>
                    </TabsList>

                    <Select defaultValue="4weeks">
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="4weeks">Last 4 weeks</SelectItem>
                            <SelectItem value="3months">Last 3 months</SelectItem>
                            <SelectItem value="6months">Last 6 months</SelectItem>
                            <SelectItem value="1year">Last year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <TabsContent
                    value="overview"
                    className="space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-gray-600">Active subscribers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-2">
                                    <span className="text-3xl font-bold">0</span>
                                    <Badge
                                        variant="secondary"
                                        className="text-gray-500">
                                        — 0%
                                    </Badge>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">from 0 (last 4 weeks)</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-gray-600">Open rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-2">
                                    <span className="text-3xl font-bold">0%</span>
                                    <Badge
                                        variant="secondary"
                                        className="text-gray-500">
                                        — 0%
                                    </Badge>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">from 0% (last 4 weeks)</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-gray-600">Click through rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-2">
                                    <span className="text-3xl font-bold">0%</span>
                                    <Badge
                                        variant="secondary"
                                        className="text-gray-500">
                                        — 0%
                                    </Badge>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">from 0% (last 4 weeks)</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* No Subscribers State */}
                    <Card className="bg-pink-50 border-pink-200">
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                                <Plus className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">You have no active subscribers</h3>
                            <p className="text-gray-600 mb-4">Would you like to start by importing a list?</p>
                            <Button className="bg-pink-600 hover:bg-pink-700">
                                <Plus className="w-4 h-4 mr-2" />
                                Import list
                            </Button>
                        </CardContent>
                    </Card>

                    {/* beehiiv Impact */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">beehiiv impact</CardTitle>
                            <CardDescription>Subscribers driven through the beehiiv network vs. alternative growth channels</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-8 h-8 text-gray-400" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="audience">
                    <Card>
                        <CardHeader>
                            <CardTitle>Audience Analytics</CardTitle>
                            <CardDescription>Detailed insights about your subscribers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Users className="w-8 h-8 text-gray-400" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="engagement">
                    <Card>
                        <CardHeader>
                            <CardTitle>Engagement Metrics</CardTitle>
                            <CardDescription>How your audience interacts with your content</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-8 h-8 text-gray-400" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="monetization">
                    <Card>
                        <CardHeader>
                            <CardTitle>Revenue Analytics</CardTitle>
                            <CardDescription>Track your newsletter's financial performance</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Mail className="w-8 h-8 text-gray-400" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </MainLayout>
    );
}
