import colors from "equal-hue-tailwind-colors";
import originals from "tailwindcss/colors";
import { marked } from "marked";
import { useCopyToClipboard } from "@uidotdev/usehooks";

const aboutText = `This is [tailwind's default colors](https://tailwindcss.com/docs/customizing-colors) 
but with all the hues within a series modified to be equal as determined by the [oklab color space](https://bottosson.github.io/posts/oklab/). 
This is done with the [@texel/color library](https://github.com/texel-org/color), 
converting the srgb values to okhsl, setting the hue to the 500-shade hue value and then converting back to srgb.
For most colors this is a negligible difference, yellows being the main exception. 
You can compare this equal-hue palette to tailwind's originals below. Click on a color to copy the hex value.
`;

function Dedication() {
  return (
    <div className="text-slate-500 px-6 pb-10 text-xs">
      {"By "}
      <a
        className="text-blue-500 font-medium"
        href={"https://github.com/thomaswright"}
      >
        {"Thomas Wright"}
      </a>
    </div>
  );
}

function App() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="bg-plain-900 text-plain-50 min-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold p-6 pb-0">
          Equal Hue Tailwind Colors
        </h1>

        <div
          className="px-6 pt-6  text-sm"
          dangerouslySetInnerHTML={{
            __html: marked.parse(aboutText),
          }}
        />
        <div
          className="px-6 pt-6  text-sm"
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              "See the [github repo](https://github.com/thomaswright/equal-hue-tailwind-colors) for more information."
            ),
          }}
        />

        <div className=" overflow-x-scroll p-6">
          {Object.entries(colors).map(([k, v]) => {
            if (typeof v === "string") {
              return null;
            } else {
              return (
                <div className="py-2">
                  <div className="text-plain-100 font-medium">{k}</div>
                  <div className="flex flex-row gap-1 text-plain-400 ">
                    <div className="min-w-20 text-xs uppercase py-2 self-end">
                      {"Equal Hue"}
                    </div>
                    {Object.entries(v).map(([k2, v2]) => {
                      return (
                        <div className="text-2xs w-20 ">
                          <div className="text-xs text-plain-100">{k2}</div>
                          <div className="text-2xs">{v2}</div>

                          <button
                            onClick={() => copyToClipboard(v2)}
                            className={
                              "mt-0.5 rounded-t w-12 h-8 border border-b-black border-plain-700 font-mono text-black"
                            }
                            style={{ backgroundColor: v2 }}
                          >
                            {copiedText === v2 ? "copied" : null}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-row gap-1 text-plain-400 ">
                    <div className="min-w-20 text-xs uppercase py-2">
                      {"Original"}
                    </div>
                    {Object.entries(originals[k]).map(([_k2, v2]) => {
                      return (
                        <div className="text-2xs w-20">
                          <button
                            onClick={() => copyToClipboard(v2)}
                            className="mb-0.5 rounded-b w-12 h-8 border border-t-0 border-plain-700 font-mono text-black"
                            style={{ backgroundColor: v2 }}
                          >
                            {copiedText === v2 ? "copied" : null}
                          </button>
                          <div className="text-2xs">{v2}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <Dedication />
      </div>
    </div>
  );
}

export default App;
