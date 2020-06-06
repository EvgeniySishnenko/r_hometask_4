import React, { useState } from "react";

function СonverterСolor() {
  const [color, setColor] = useState({
    color: "",
    div: "",
    bg: "",
  });
  function checkHex(hex) {
    const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
    if (hexRegex.test(hex)) {
      return true;
    }
    return false;
  }
  function modifyHex(hex) {
    if (hex.length == 4) {
      hex = hex.replace("#", "");
    }
    if (hex.length == 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return hex;
  }
  function hexToRgb(hex) {
    let x = [];
    hex = hex.replace("#", "");
    if (hex.length != 6) {
      hex = modifyHex(hex);
    }
    x.push(parseInt(hex.slice(0, 2), 16));
    x.push(parseInt(hex.slice(2, 4), 16));
    x.push(parseInt(hex.slice(4, 6), 16));
    return "rgb(" + x.toString() + ")";
  }
  function errorMark(hex) {
    if (hex.length == 4) {
      return false;
    }
    if (hex.length == 3) {
      return false;
    }
    if (hex[0] != "#") {
      return false;
    }
    return hex;
  }

  const converter = (e) => {
    let color = e.target.value;

    if (checkHex(color) && errorMark(color)) {
      // color = modifyHex(color);
      console.log(color);
      setColor({
        color: e.target.value,
        div: hexToRgb(color),
        bg: hexToRgb(color),
      });
    } else {
      setColor({
        color: e.target.value,
        div: "Ошибка",
        bg: "#c70c2b",
      });
    }
  };
  console.log(color);
  return (
    <div className="wrapper" style={{ backgroundColor: color.bg }}>
      <form>
        <input
          value={color.color}
          className="input"
          type="text"
          onChange={converter}
        />
        <div className="rgb">{color.div}</div>
      </form>
    </div>
  );
}

export default СonverterСolor;
