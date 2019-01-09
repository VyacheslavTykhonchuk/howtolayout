import React from "react";

export default function OptionItemView(props) {
  const {
    isPopoverOpen,
    openPopover,
    closePopover,
    payload,
    name,
    id,
    toggleElement,
    setHeaderSize,
  } = props;

  return (
    <div className="block__options__option">
      <p className="block__options__option__heading">{name}</p>
      {name === "Header" && (
        <div
          className="block__options__option-toogle-header"
          onClick={openPopover}
        />
      )}
      {name === "Header" && isPopoverOpen && (
        <div className="block__options__option-popover">
          <div className="block__options__option-popover-heading">
            <p className="block__options__option-popover-header">Header</p>
            <a
              onClick={closePopover}
              className="block__options__option-close-popover"
            />
          </div>
          <div className="block__options__option-popover-button-group">
            {Object.values(payload.textSize).map((size, idx) => (
              <div
                key={idx}
                onClick={() => setHeaderSize(size, id)}
                className="block__options__option-popover-button">
                {size}
              </div>
            ))}
          </div>
        </div>
      )}
      <input
        id={id}
        onChange={() => toggleElement(id)}
        type="checkbox"
        className="block__options__option__check"
        checked={payload.isChecked}
      />
      <label
        htmlFor={id}
        className="block__options__option__check--check-toggle"
      />
    </div>
  );
}
