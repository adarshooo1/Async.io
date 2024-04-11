import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const AuthSkeleton = (props: Props) => {
  return (
    <div className="h-full min-w-80 max-w-96 bg-black flex justify-center items-center gap-y-10">
      <div>
        <div className="flex flex-col gap-2 mb-6">
          <Skeleton className="h-6 w-[100px]" />
          <Skeleton className="h-6 w-[200px]" />
        </div>
        <div className="space-y-3 flex flex-col pb-10">
          <Skeleton className="h-14 w-[350px]" />
          <Skeleton className="h-14 w-[350px]" />
        </div>

        <div className="space-y-3 flex flex-col pb-10">
          <Skeleton className="h-14 w-[350px]" />
          <Skeleton className="h-10 w-[350px]" />
        </div>

        <div>
          <Skeleton className="h-5 w-36" />
        </div>
      </div>
    </div>
  );
};

export default AuthSkeleton;
