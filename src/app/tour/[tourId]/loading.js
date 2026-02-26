"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Card className = "w-10/12 mx-auto my-5">
        <CardHeader>
            <Skeleton className = "h-4 w-2/3" />
            <Skeleton className = "h-4 w-1/2" />
        </CardHeader>
        <CardContent>
            <Skeleton className = "aspect-video w-full" />
        </CardContent>
    </Card>
  );
};

export default Loading;