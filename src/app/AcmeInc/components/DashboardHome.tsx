"use client";

import { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Note: You would need to install and import Chart.js and the necessary adapters
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

export default function DashboardHome() {
  const [chartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  });

  const [doughnutData] = useState({
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  });

  return (
    <div className="flex size-full min-h-screen flex-col">
      <main className="flex-grow bg-transparent p-1">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex w-full max-w-xs flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="flex w-full max-w-xs flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="flex w-full max-w-xs flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="flex w-full max-w-xs flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:row-span2 grid w-full grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-10">
          <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Bar data={chartData} />
            </CardContent>
          </Card>

          <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Bar data={chartData} />
            </CardContent>
          </Card>

          <Card className="col-span-4 lg:col-span-2">
            <CardHeader>
              <CardTitle>Product Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Doughnut data={doughnutData} />
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-4 lg:col-span-2">
            <CardHeader>
              <CardTitle>Product Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Doughnut data={doughnutData} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid w-full gap-2 md:grid-cols-2">
          <Card className="flex w-full flex-col">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="flex-grow">New user signed up</span>
                  <span className="text-sm text-gray-500">2m ago</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="flex-grow">Invoice paid</span>
                  <span className="text-sm text-gray-500">15m ago</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></span>
                  <span className="flex-grow">New product added</span>
                  <span className="text-sm text-gray-500">1h ago</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex w-full flex-col">
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span>Product A</span>
                  <span className="font-semibold">$12,345</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Product B</span>
                  <span className="font-semibold">$9,876</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Product C</span>
                  <span className="font-semibold">$7,654</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Product D</span>
                  <span className="font-semibold">$5,432</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
