import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CapitalRiskRatioChart } from "./metrics/CapitalRiskRatioChart";
import { ProjectTimelineBudgetChart } from "./metrics/ProjectTimelineBudgetChart";
import { CostEstimateRefinementChart } from "./metrics/CostEstimateRefinementChart";
import { TechnologyValidationChart } from "./metrics/TechnologyValidationChart";
import { RiskRegisterClosureChart } from "./metrics/RiskRegisterClosureChart";

export function ProjectMetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Risk Metrics Group */}
      <Card className="min-h-[400px]">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Capital at Risk Ratio</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(400px-4rem)] flex items-center justify-center">
          <CapitalRiskRatioChart />
        </CardContent>
      </Card>
      
      {/* Timeline/Budget Group */}
      <Card className="min-h-[400px]">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Project Timeline/Budget</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(400px-4rem)] flex items-center justify-center">
          <ProjectTimelineBudgetChart />
        </CardContent>
      </Card>
      
      {/* Cost Group */}
      <Card className="min-h-[400px]">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Cost Estimate Refinement</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(400px-4rem)] flex items-center justify-center">
          <CostEstimateRefinementChart />
        </CardContent>
      </Card>
      
      {/* Risk Closure Group */}
      <Card className="min-h-[400px]">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Risk Register Closure Rate</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(400px-4rem)] flex items-center justify-center">
          <RiskRegisterClosureChart />
        </CardContent>
      </Card>
      
      {/* Technology Group */}
      <Card className="min-h-[400px]">
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Technology Validation Progress</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(400px-4rem)] flex items-center justify-center">
          <TechnologyValidationChart />
        </CardContent>
      </Card>
    </div>
  );
}
