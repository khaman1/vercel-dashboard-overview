import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

const RepoSearch = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center my-10 items-center w-full">
      <form>
        <div className="relative w-full sm:min-w-[200px] md:min-w-[800px]">
          <Search className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Repositories and Projects..."
            className="pl-9 text-xl dark:bg-gray-600/10 min-h-[50px] "
          />
        </div>
      </form>

      <Button className="mx-4 min-h-[49px] min-w-[150px]">
        Sort by activity
        <ChevronDown className="ml-1 h-[20px]" />
      </Button>
    </div>
  );
};

export default RepoSearch;
