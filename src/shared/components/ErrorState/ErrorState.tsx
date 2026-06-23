interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "Something went wrong",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-red-500 text-sm gap-2">
      <span>{message}</span>
      {onRetry && (
        <button onClick={onRetry} className="text-green-600 underline cursor-pointer">
          Try again
        </button>
      )}
    </div>
  );
}
