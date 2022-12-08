import { useParams, Link } from "react-router-dom";
import data from "../../files/Lab3/pallete.json";
import "./Nabor.css";
import { useRef } from "react";
import audio from "../../files/Lab3/src_notify.mp3";

const Nabor = () => {
  const playAudio = (color) => {
    new Audio(audio).play();
    const fondiv = document.querySelector(".div-fon-color");
    fondiv.style.backgroundColor = `${color}`;
    document.querySelector("nav").style.display = "none";
    document.querySelector(".vmista").style.display = "none";
    document.querySelector("footer").style.display = "none";
    document.querySelector(".h1-text").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".h1-text").style.display = "none";
      document.querySelector("nav").style.display = "flex";
      document.querySelector(".vmista").style.display = "grid";
      document.querySelector("footer").style.display = "block";
    }, 1000);
  };
  const itemRefs = useRef([]);
  let { paleteId } = useParams();
  function activeclass(id) {
    itemRefs.current[id].style.visibility = "visible";
    itemRefs.current[id].style.transition = "0.7s";
    itemRefs.current[id].style.opacity = "1";
  }
  function downclass(id) {
    itemRefs.current[id].style.visibility = "hidden";
    itemRefs.current[id].style.transition = "0.7s";
    itemRefs.current[id].style.opacity = "0";
  }
  function shos() {
    const containerid = data[paleteId].colors.map((el, id) => {
      return (
        <div
          onMouseEnter={() => {
            activeclass(id);
          }}
          onMouseLeave={() => {
            downclass(id);
          }}
          onClick={() => navigator.clipboard.writeText(el.color)}
          tabIndex={0}
          className={`${el.name}`}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: `${el.color}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              playAudio(el.color);
            }}
            ref={(el) => (itemRefs.current[id] = el)}
            className="button-copy"
          >
            Copy
          </button>
        </div>
      );
    });
    return <>{containerid}</>;
  }
  const vmist = shos();
  return <div className="vmista">{vmist}</div>;
};
export default Nabor;
