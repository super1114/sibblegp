export default function Dashboard() {
  return (
    <div className="flex-col">
      <div className="flex w-full justify-between px-10">
        <div className="text-2xl border-2 p-2">Report</div>
        <div className="text-4xl">Level One Technical Due Diligence Report</div>
      </div>
      <div className="grid grid-cols-6 gap-10 mt-10 px-10">
        <div className="border-2 p-4 col-start-1 col-end-3 ">
          <div className="flex-col mx-auto mb-10">
            <div></div>
            <p className="text-2xl text-center">Ketchen Buddy</p>
          </div>
          <div className="flex-col space-y-10">
            <div className="flex justify-between">
              <p className="text-xl">CEO</p>
              <p className="text-xl">George Sibble</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">Website</p>
              <p className="text-xl">www.kitchenbuddy.com</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">Company LinkedIN</p>
              <p className="text-xl">www.linkedin.com/kitchen-buddy</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">CEO LinkedIN</p>
              <p className="text-xl">www.linkedin.com/george.sibble</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl"># of Employees</p>
              <p className="text-xl">4</p>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-7 space-y-10">
          <div className="flex-col space-y-6 text-center">
            <div className="text-6xl">Score</div>
            <div className="text-6xl">1.2/5.0</div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
