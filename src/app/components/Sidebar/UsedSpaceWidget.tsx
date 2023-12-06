export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 px-4 py-5 text-violet-500 bg-purple-50 dark:bg-zinc-800 rounded-lg">
      <div className="space-y-1">
        <span className="text-sm/5 text-violet-700 font-medium dark:text-zinc-100">
          Used Space
        </span>
        <p className="text-sm/5 dark:text-zinc-300">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>
      <div className="h-2 w-full bg-purple-100 rounded-full dark:bg-zinc-600">
        <div className="h-2 w-4/5 rounded-lg bg-violet-600 dark:bg-violet-400" />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="text-sm/5 font-semibold hover:text-violet-700 dark:text-violet-300 dark:hover:text-zinc-100"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm/5 font-semibold text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-zinc-100"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  );
}
