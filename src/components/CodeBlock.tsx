"use client";
import { ArrowRight, ChevronRight, CopyCheck } from "lucide-react";
import React from "react";
import Prism from "prismjs";
import AppLayout from "@/utils/AppLayout";
function CodeBlock() {
  let code = `
import { devMood } from 'rico.dev';

const devMood = [
"Focused Mode 😤",
"Coffee Break ☕",
"Debugging Zone 🐞",
"Creative Burst 💡"
];

function toggleDevMood() {
  let mood = devMood[Math.floor(Math.random() 
  * devMood.length)];
  console.log("Current Dev Mood: ", mood);
}

toggleDevMood();

`;

  let highletd = Prism.highlight(
    code,
    Prism.languages.javascript,
    "javascript"
  );
  return (
    <AppLayout>
      <div className="  w-full">
        <h1 className="font-gradient text-center  font-effect-hero text-4xl mb-10 sm:text-5xl">
          Work Process
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="relative   z-10 w-full overflow-hidden rounded-3xl border border-customSlate min-h-[300px]">
            <div className="absolute right-0 top-0 z-10 h-px w-[300px] tip-border"></div>
            <div className="absolute bottom-0 left-0 z-10 h-px w-[300px] tip-border"></div>
            <header className="h-16 border-b border-customSlate flex items-center justify-between px-4">
              <div>
                <button className="group items-center border flex px-2 border-customSlate relative h-8 flex-shrink-0 rounded-lg p-px text-sm text-grayText-1a transition duration-200 ease-in-out hover:text-grayText-1b outline-none focus-visible:ring-2 focus-visible:ring-customSlate">
                  <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M11.8782 10.2346C11.5538 10.3275 11.2868 10.4074 11.0148 10.4888C10.7982 10.5536 10.5784 10.6194 10.3241 10.6934L10.3088 10.698C10.1845 10.7356 10.1715 10.7395 10.0558 10.5891C9.91709 10.4119 9.81534 10.2972 9.62107 10.1929C9.03829 9.86975 8.47401 9.96357 7.94673 10.3493C7.3177 10.808 6.99393 11.4857 7.00318 12.3302C7.01243 13.1642 7.5212 13.8523 8.252 13.967C8.88103 14.0608 9.40831 13.8106 9.82458 13.2789C9.88629 13.1939 9.94292 13.1031 10.0058 13.0025C10.0277 12.9673 10.0504 12.9309 10.0743 12.8932H8.289C8.09474 12.8932 8.04848 12.7576 8.11324 12.5804C8.2335 12.2572 8.45551 11.7151 8.58501 11.444C8.61277 11.3814 8.67752 11.2772 8.81627 11.2772H11.7933C11.927 10.7998 12.144 10.3487 12.4333 9.92191C13.1086 8.92106 13.9226 8.39979 15.0235 8.18085C15.967 7.99319 16.855 8.09745 17.6599 8.71256C18.3906 9.27554 18.8439 10.0366 18.9641 11.0375C19.1214 12.4449 18.7606 13.5917 17.9003 14.5716C17.2898 15.2701 16.5405 15.708 15.6802 15.9061C15.5163 15.9404 15.3523 15.9566 15.1909 15.9726C15.1065 15.9809 15.0228 15.9893 14.9401 16C14.0984 15.9791 13.3306 15.708 12.6831 15.0826C12.2276 14.6388 11.9139 14.0935 11.758 13.4586C11.6498 13.7049 11.5204 13.9407 11.3694 14.1651C10.7034 15.1555 9.83383 15.7706 8.73303 15.9374C7.82648 16.073 6.98468 15.8749 6.24464 15.2493C5.5601 14.6655 5.17158 13.894 5.06982 12.9349C4.94957 11.7985 5.24558 10.7768 5.85611 9.88017C6.5129 8.9106 7.38245 8.29549 8.44625 8.07656C9.31581 7.89932 10.1483 8.014 10.8976 8.5874C11.3879 8.9523 11.7394 9.45273 11.9707 10.0574C12.0262 10.1512 11.9892 10.2034 11.8782 10.2346ZM1.43379 10.4223C1.39679 10.4223 1.38754 10.4014 1.40604 10.3702L1.6003 10.0887C1.6188 10.0574 1.66505 10.0366 1.70205 10.0366H5.00448C5.04149 10.0366 5.05074 10.0678 5.03223 10.0991L4.87497 10.3702C4.85648 10.4014 4.81023 10.4327 4.78247 10.4327L1.43379 10.4223ZM0.0370019 11.3816C-3.96586e-06 11.3816 -0.00924815 11.3607 0.00924997 11.3295L0.203514 11.048C0.222012 11.0167 0.268262 10.9958 0.305268 10.9958H4.52349C4.5605 10.9958 4.579 11.0271 4.56974 11.0584L4.49574 11.3086C4.48649 11.3503 4.44949 11.3712 4.41249 11.3712L0.0370019 11.3816ZM2.24787 12.2781C2.22937 12.3093 2.23862 12.3406 2.27562 12.3406L4.29223 12.351C4.31998 12.351 4.35698 12.3198 4.35698 12.2781L4.37548 12.0278C4.37548 11.9861 4.35698 11.9549 4.31998 11.9549H2.46988C2.43289 11.9549 2.39588 11.9861 2.37738 12.0174L2.24787 12.2781ZM17.1354 11.677C17.1373 11.7119 17.1391 11.7487 17.1418 11.7881C17.0955 12.6847 16.6978 13.3519 15.967 13.7794C15.4767 14.0609 14.9679 14.0921 14.4591 13.8419C13.7931 13.5083 13.4416 12.6847 13.6081 11.8715C13.8116 10.8915 14.3667 10.2764 15.227 10.0575C16.1057 9.82809 16.9475 10.4119 17.114 11.444C17.1272 11.518 17.131 11.5919 17.1354 11.677Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Add</span>
                  <div className="absolute w-full rounded-lg h-8 left-0 bg-gradient-to-b from-grayBg-1b to-transparent"></div>
                </button>
              </div>
              <div>
                <button className="bg-transparent hover:bg-[#d9edfe25]  hover:text-grayText-1b text-grayText-1a p-1 rounded transition duration-200 ease-in-out">
                  <CopyCheck className="size-5" />
                </button>
              </div>
            </header>
            <div className="codeContainer  min-h-[300px] p-4 overflow-auto rounded-xl max-h-[400px]  w-full bg-back-bg light-up-a">
              <pre className="language-javascript  text-grayText-1b">
                <code
                  className="language-javascript"
                  dangerouslySetInnerHTML={{ __html: highletd }}
                />
              </pre>
            </div>
          </div>

          <div>
            <h1 className="font-gradient pt-10 text-3xl sm:text-5xl text-center">
              Developing Dreams{" "}
            </h1>
            <h1 className="from-blueShade-1a pt-4 text-center   via-pinkShade-1a to-greenShade-1a text-3xl text-transparent bg-clip-text bg-gradient-to-br">
              One Line Of Code at a Time
            </h1>
            <p className="text-grayText-1a pt-7  lg:text-left text-center text-[18px]">
              "Turning ideas into reality with every line of code. Committed to
              creating clean, efficient solutions that make an impact."
            </p>
          <div className="py-14 px-10">
          <button className="bg-gradient-to-br from-blueShade-1a  via-pinkShade-1a  to-greenShade-1a relative flex grow  items-center gap-3 shrink-0 py-3 group text-grayText-1a text-sm px-5 justify-center rounded-3xl">
              <p className="relative text-white text-[18px]">My Projects</p>
              <ChevronRight className=" size-4 group-hover:hidden group-hover:transition-all" />
              <ArrowRight className=" size-4 hidden group-hover:block group-hover:transition-all" />
              {/* <div className="absolute w-full rounded-lg h-8 left-0 bg-gradient-to-b from-grayBg-1b to-transparent"></div> */}
            </button>
          </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default CodeBlock;
