export const LogoAnimation = () => {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => (window.location.href = "/dashboard")}
    >
      <div className="flex space-x-2 items-center dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-5 w-5 bg-[#00458b] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-5 w-5 bg-[#059d2f] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-5 w-5 bg-[#f2ba03] rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};
