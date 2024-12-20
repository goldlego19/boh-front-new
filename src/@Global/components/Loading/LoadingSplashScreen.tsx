const LoadingSplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-darkBlue">
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="flex items-center justify-center h-full">
        <div className="bg-lightBlue flex flex-col rounded-[1.875rem] p-8 text-center justify-center shadow-2xl">
          <img src="/assets/splash/loadingSpinner.gif"></img>
        </div>
      </div>
    </div>
  );
};

export default LoadingSplashScreen;
