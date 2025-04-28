import { style1 } from "../utils/fontStyle";

const ActivityCalender = () => {
  return (
    <div className="bg-white border-1 border-gray-500 h-[122px] rounded-2xl flex flex-col bg-right bg-no-repeat ">
      <div className="flex m-2">
        <div
          className="w-auto text-white rounded-lg h-[28px] text-[12px] leading-3 tracking-normal bg-blue-500 p-2"
          style={style1}
        >
          Day Plan
        </div>
        <div
          className="w-auto h-[28px] rounded-lg text-[12px] ml-2 leading-3 tracking-normal  bg-white border-1 border-blue-500 p-2"
          style={style1}
        >
          14 Activities
        </div>
      </div>
      <div className="m-2  my-4">
        <div className="flex items-center justify-between  overflow-x-auto  space-x-4  scrollbar-hidden">
          <div className="flex w-[73px] h-[44px] rounded-lg border-1 items-center  border-blue-500">
            <div className="flex justify-center items-center w-[28px] h-[44px] rounded-l-lg bg-blue-500">
              <div
                className="w-[25px] h-[12px]  fon-[600] text-xs leading-3 tracking-normal rotate-270 text-white"
                style={style1}
              >
                JAN
              </div>
            </div>
            <div className="w-[46px] h-[42px] p-2 flex flex-col  rounded-r-lg bg-white">
              <div
                className="font-[500] text-xs leading-3 tracking-normal mb-2 text-center text-gray-600"
                style={style1}
              >
                MON
              </div>
              <div
                className="font-[500] text-xs leading-3 tracking-normal   text-gray-600"
                style={style1}
              >
                27
              </div>
            </div>
          </div>
          <div className="w-[46px] h-[44px] p-2 flex flex-col rounded-lg bg-gray-200">
            <div
              className="font-[500] text-xs leading-3 tracking-normal mb-2 text-center text-gray-600"
              style={style1}
            >
              TUE
            </div>
            <div
              className="font-[500] text-xs leading-3 tracking-normal text-center  text-gray-600"
              style={style1}
            >
              28
            </div>
          </div>
          <div className="w-[46px] h-[44px] p-2 flex flex-col rounded-lg bg-gray-200">
            <div
              className="font-[500] text-xs leading-3 tracking-normal mb-2 text-center text-gray-600"
              style={style1}
            >
              WED
            </div>
            <div
              className="font-[500] text-xs leading-3 tracking-normal text-center  text-gray-600"
              style={style1}
            >
              29
            </div>
          </div>
          <div className="w-[46px] h-[44px] p-2 flex flex-col rounded-lg bg-gray-200">
            <div
              className="font-[500] text-xs leading-3 tracking-normal mb-2 text-center text-gray-600"
              style={style1}
            >
              THU
            </div>
            <div
              className="font-[500] text-xs leading-3 tracking-normal text-center  text-gray-600"
              style={style1}
            >
              30
            </div>
          </div>
          <div className="w-[46px] h-[44px] p-2 flex flex-col rounded-lg bg-gray-200">
            <div
              className="font-[500] text-xs leading-3 tracking-normal mb-2 text-center text-gray-600"
              style={style1}
            >
              FRI
            </div>
            <div
              className="font-[500] text-xs leading-3 tracking-normal text-center  text-gray-600"
              style={style1}
            >
              31
            </div>
          </div>
          <div className="flex w-[73px] h-[44px] rounded-lg  items-center ">
            <div className="flex justify-center items-center w-[28px] h-[44px] rounded-l-lg bg-gray-600">
              <div
                className="w-[25px] h-[12px]  fon-[600] text-xs leading-3 tracking-normal rotate-270 text-white"
                style={style1}
              >
                FEB
              </div>
            </div>
            <div className="w-[46px] h-[44px] p-2 flex flex-col  rounded-r-lg bg-gray-200">
              <div
                className="font-[500] text-xs leading-3 tracking-normal mb-2  text-gray-600"
                style={style1}
              >
                SAT
              </div>
              <div
                className="font-[500] text-xs leading-3 tracking-normal  text-gray-600"
                style={style1}
              >
                1
              </div>
            </div>
          </div>
          <div className="w-[46px] h-[44px] p-2 flex flex-col rounded-lg bg-gray-200">
            <div
              className="font-[500] text-xs leading-3 tracking-normal mb-2 text-center text-gray-600"
              style={style1}
            >
              SUN
            </div>
            <div
              className="font-[500] text-xs leading-3 tracking-normal text-center  text-gray-600"
              style={style1}
            >
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityCalender;
