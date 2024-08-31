const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-2 animate-bounce">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
        <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
