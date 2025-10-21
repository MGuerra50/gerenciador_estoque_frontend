const WidgetsBase = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className="shadow-md rounded-[30px] bg-white p-[17px] mt-[30px] mb-[30px]">
        {children}
      </div>
    </>
  );
};

export default WidgetsBase;
