function ProtectedLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
        <p className="mt-4 text-sm font-medium text-gray-500">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default ProtectedLoader;