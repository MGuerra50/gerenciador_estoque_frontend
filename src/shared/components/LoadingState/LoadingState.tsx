interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex justify-center items-center py-8 text-gray-500 text-sm">
      {message}
    </div>
  );
}
