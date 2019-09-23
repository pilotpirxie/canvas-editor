import React from "react";
import fontFamilies from "../constants/fontFamilies";

export default function FontPreloader(props) {
  fontFamilies.map(el => {
    let myfont = new window.FontFaceObserver(el);
    return myfont.load().then(() => {
      return <p
        style={{ fontFamily: el }}
        key={el}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝ;ðÐâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸåÅæÆ;œŒ;ßøØ¢¿¡€çÇąęłżóź.,;:?!-_~#\"'&()[]|`\\\\/@°+=*$£€<>"}
      </p>;
    }).catch(err => {
      return err;
    });
  });

  return <div className="invisible d-none">
    {fontFamilies.map(el => {
      return <p
        style={{ fontFamily: el }}
        key={el}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝ;ðÐâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸåÅæÆ;œŒ;ßøØ¢¿¡€çÇąęłżóź.,;:?!-_~#\"'&()[]|`\\\\/@°+=*$£€<>"}
      </p>;
    })}
  </div>;
}