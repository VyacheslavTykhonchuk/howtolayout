import React from "react";
import OptionItemView from "./OptionItemView";

export default function OptionsList(props) {
  const {
    optionsList,
    toggleElement,
    openPopover,
    closePopover,
    isPopoverOpen,
    setHeaderSize,
  } = props;
  return (
    <div className="block">
      <div className="block__header-options">
        <p className="block__header-options-heading">Text block</p>
        <div className="block__header-options-dots" />
      </div>
      <p className="block_options_header">Components</p>
      <div className="block__options-list">
        {optionsList.map(options => (
          <OptionItemView
            toggleElement={toggleElement}
            openPopover={openPopover}
            closePopover={closePopover}
            isPopoverOpen={isPopoverOpen}
            setHeaderSize={setHeaderSize}
            key={options.id}
            {...options}
          />
        ))}
      </div>
    </div>
  );
}
