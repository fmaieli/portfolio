import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SkeletonLoader from "tiny-skeleton-loader-react";

export default function Header() {
  const [language, setLanguage] = useState("ES");
  const [isHide, setIsHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
    setIsHide(false);
  }, 3500);

  function AnimationLoading(text) {
    return (
      <TypeAnimation
        sequence={[`${text}`, 1000]}
        style={{ fontSize: "2em" }}
        speed={1}
        repeat={Infinity}
      />
    );
  }

  function ShowText(text) {
    return <div>{text}</div>;
  }

  function handleClick() {
    setLanguage(language === "ES" ? "EN" : "ES");
    setIsHide(true);
    setIsLoading(true);
  }

  if (language === "ES") {
    return (
      <div className="flex place-content-center">
        <div className="grid grid-rows-3">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              Translating
            </button>
          </div>
          <div>{!isHide ? ShowText("Hola") : AnimationLoading("Cargando")}</div>
          <div>
            {!isHide ? (
              ShowText("Esto es una prueba.")
            ) : (
              <SkeletonLoader width="100px" height="5px" background="#eff1f6" />
            )}
          </div>
        </div>
      </div>
    );
  } else if (language === "EN") {
    return (
      <div className="flex place-content-center">
        <div className="grid grid-rows-3">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              Translating
            </button>
          </div>
          <div>{!isHide ? ShowText("Hello") : AnimationLoading("Loading")}</div>
          <div>
            {!isHide ? (
              ShowText("This is a test.")
            ) : (
              <SkeletonLoader width="100px" height="5px" background="#eff1f6" />
            )}
          </div>
        </div>
      </div>
    );
  }
}
