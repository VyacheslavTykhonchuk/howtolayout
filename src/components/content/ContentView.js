import React from "react";

export default function ContentView({ optionsList }) {
  return (
    <div className="content">
      {optionsList.label.isChecked && (
        <p className="content__label">Bbq Myths Getting You Down</p>
      )}
      {optionsList.header.isChecked && (
        <p
          className="content__header"
          style={{ fontSize: optionsList.header.selectedFontSize }}>
          Medical Care Is <br /> Just A Click Away
        </p>
      )}
      {optionsList.emphsis.isChecked && (
        <p className="content__emphsis">
          Business cards represent not only your business, but it also tells
          people your professionalism in the industry. In the business world
          today, the usage of business cards is far beyond just informing people
          who you are,
        </p>
      )}
      {optionsList.bodytext.isChecked && (
        <p className="content__body-text">
          Business cards represent not only your business, but it also tells
          people your professionalism in the industry. In the business world
          today, the usage of business cards is far beyond just informing people
          who you are,
        </p>
      )}
    </div>
  );
}
