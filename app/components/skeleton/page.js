import { Skeleton } from "./index";

export default function SkeletonPage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Skeleton</h1>
      <p className="text-gray-400">Different variants of the Skeleton component</p>

      <div className="space-y-4">
        <Skeleton variant="text, circle" />
        <Skeleton variant="circle" />
        <Skeleton variant="block" />
      </div>
    </div>
  );
}
