import { CONNECTIONS } from "@/lib/constants";
import React from "react";
import ConnectionCard from "./_components/connection-card";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="md:text-4xl text-2xl top-0 z-20 p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
        Connections
      </h1>
      <div className="p-6 overflow-y-scroll h-full pb-32">
        {/* Further Content */}
        <div className="w-full flex flex-col gap-4 text-muted-foreground">
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification
          <div className="flex flex-col gap-4">
            {CONNECTIONS.map((connection) => (
              <ConnectionCard
                key={connection.title}
                title={connection.title}
                icon={connection.icon}
                description={connection.description}
                type={connection.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
