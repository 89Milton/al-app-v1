import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, X, Filter, Settings } from "lucide-react";
import { DataPanel } from "@/components/ui/DataPanel";

interface ExpandedMetricChartProps {
  title: string;
  description?: string;
  chart: React.ReactNode;
  onClose: () => void;
  additionalControls?: React.ReactNode;
  insights?: {
    title: string;
    content: React.ReactNode;
  }[];
}

export function ExpandedMetricChart({
  title,
  description,
  chart,
  onClose,
  additionalControls,
  insights
}: ExpandedMetricChartProps) {
  const [activeTab, setActiveTab] = React.useState("chart");

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsList>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-auto">
              <TabsContent value="chart" className="h-full mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
                  <div className="lg:col-span-2">
                    <DataPanel className="h-full">
                      <div className="h-full flex items-center justify-center p-4">
                        {chart}
                      </div>
                    </DataPanel>
                  </div>
                  <div className="space-y-4">
                    {additionalControls && (
                      <DataPanel title="Controls">
                        {additionalControls}
                      </DataPanel>
                    )}
                    {insights && insights.length > 0 && (
                      <DataPanel title="Key Insights">
                        <div className="space-y-4">
                          {insights.map((insight, index) => (
                            <div key={index}>
                              <h4 className="text-sm font-medium mb-2">{insight.title}</h4>
                              <div className="text-sm text-muted-foreground">
                                {insight.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      </DataPanel>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="insights" className="h-full mt-4">
                <DataPanel title="Detailed Insights" className="h-full">
                  <div className="space-y-6">
                    {/* Add detailed insights content here */}
                    <p className="text-muted-foreground">Detailed insights coming soon...</p>
                  </div>
                </DataPanel>
              </TabsContent>

              <TabsContent value="data" className="h-full mt-4">
                <DataPanel title="Raw Data" className="h-full">
                  <div className="space-y-6">
                    {/* Add data table or grid here */}
                    <p className="text-muted-foreground">Data table coming soon...</p>
                  </div>
                </DataPanel>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
} 