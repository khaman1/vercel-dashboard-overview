import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaGithub } from "react-icons/fa6";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div>
      <div className="p-8 grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        <Card className="bg-gray-600/10">
          <CardHeader>
            <CardTitle className="text-md">reservoir-fe-dev</CardTitle>
            <CardDescription>elementalanalytics.vercel.app</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap">
            <Button className="rounded-md bg-transparent text-white border rounded-full dark:bg-slate-600/10">
              <FaGithub className="text-xl" />
              <span className="pl-2">khaman1/reservoir-fe-dev</span>
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-ellipsis overflow-hidden whitespace-nowrap">
              Revert &quot;a&quot; This reverts commit
              be8e6b4df587aa98223bc4cb9c39c83b0bd528d8.
            </p>
          </CardFooter>
        </Card>

        <Card className="bg-gray-600/10">
          <CardHeader>
            <CardTitle className="text-md">reservoir-fe-dev</CardTitle>
            <CardDescription>elementalanalytics.vercel.app</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap">
            <Button className="rounded-md bg-transparent text-white border rounded-full dark:bg-slate-600/10">
              <FaGithub className="text-xl" />
              <span className="pl-2">khaman1/reservoir-fe-dev</span>
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-ellipsis overflow-hidden whitespace-nowrap">
              Revert &quot;a&quot; This reverts commit
              be8e6b4df587aa98223bc4cb9c39c83b0bd528d8.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProjectSection;
