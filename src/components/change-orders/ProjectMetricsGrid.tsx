import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CapitalRiskRatioChart } from "./metrics/CapitalRiskRatioChart";
import { ProjectTimelineBudgetChart } from "./metrics/ProjectTimelineBudgetChart";
import { CostEstimateRefinementChart } from "./metrics/CostEstimateRefinementChart";
import { TechnologyValidationChart } from "./metrics/TechnologyValidationChart";
import { RiskRegisterClosureChart } from "./metrics/RiskRegisterClosureChart";
import { SeverityDistributionChart } from "./SeverityDistributionChart";
import { ChangeOrderSeverity, SeverityDistribution } from "@/models/changeOrder";
import { Button } from "@/components/ui/button";
import { Maximize } from "lucide-react";
import { ExpandedMetricChart } from "./metrics/ExpandedMetricChart";

interface ProjectMetricsGridProps {
  severityDistribution: SeverityDistribution[];
  onSeverityClick: (severity: ChangeOrderSeverity) => void;
}

type MetricChart = {
  id: string;
  title: string;
  description?: string;
  chart: React.ReactNode;
  additionalControls?: React.ReactNode;
  insights?: {
    title: string;
    content: React.ReactNode;
  }[];
};

export function ProjectMetricsGrid({ severityDistribution, onSeverityClick }: ProjectMetricsGridProps) {
  const [expandedChart, setExpandedChart] = React.useState<string | null>(null);

  const metricCharts: MetricChart[] = [
    {
      id: "capital-risk",
      title: "Capital at Risk Ratio",
      description: "Shows the ratio of capital at risk to total project value",
      chart: <CapitalRiskRatioChart />,
      insights: [
        {
          title: "Current Status",
          content: "The capital at risk ratio is within acceptable limits, indicating good risk management."
        }
      ]
    },
    {
      id: "timeline-budget",
      title: "Project Timeline/Budget",
      description: "Tracks project progress against planned timeline and budget",
      chart: <ProjectTimelineBudgetChart />,
      insights: [
        {
          title: "Schedule Performance",
          content: "Project is 5% ahead of schedule with 3 months remaining."
        },
        {
          title: "Budget Performance",
          content: "Currently 2% under budget with $500,000 contingency remaining."
        }
      ]
    },
    {
      id: "cost-estimate",
      title: "Cost Estimate Refinement",
      description: "Shows how cost estimates have evolved throughout the project",
      chart: <CostEstimateRefinementChart />,
      insights: [
        {
          title: "Estimate Accuracy",
          content: "Cost estimates have stabilized within ±5% range over the last 3 months."
        }
      ]
    },
    {
      id: "risk-closure",
      title: "Risk Register Closure Rate",
      description: "Tracks the rate at which identified risks are being closed",
      chart: <RiskRegisterClosureChart />,
      insights: [
        {
          title: "Risk Management Progress",
          content: "75% of identified risks have been successfully mitigated or closed."
        }
      ]
    },
    {
      id: "tech-validation",
      title: "Technology Validation Progress",
      description: "Shows progress in validating key technical aspects of the project",
      chart: <TechnologyValidationChart />,
      insights: [
        {
          title: "Validation Status",
          content: "All critical technical components have been validated and approved."
        }
      ]
    },
    {
      id: "severity",
      title: "Severity Distribution",
      description: "Distribution of change orders by severity level",
      chart: <SeverityDistributionChart data={severityDistribution} onSliceClick={onSeverityClick} />,
      insights: [
        {
          title: "Risk Profile",
          content: "Majority of change orders are minor, indicating good project control."
        }
      ]
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricCharts.map((metric) => (
          <Card key={metric.id} className="min-h-[400px]">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-md">{metric.title}</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setExpandedChart(metric.id)}
                >
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="h-[calc(400px-4rem)] flex items-center justify-center">
              {metric.chart}
            </CardContent>
          </Card>
        ))}
      </div>

      {expandedChart && (
        <ExpandedMetricChart
          {...metricCharts.find(m => m.id === expandedChart)!}
          onClose={() => setExpandedChart(null)}
        />
      )}
    </>
  );
}
