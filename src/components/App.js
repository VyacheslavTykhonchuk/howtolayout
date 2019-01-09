import React, { Component } from "react";
import OptionListView from "./options/OptionsListView";
import ContentView from "./content/ContentView";
import { lensPath, set } from "ramda";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isPopoverOpen: false,
      options: [
        { id: 1, name: "Label", payload: { isChecked: true } },
        {
          id: 2,
          name: "Header",
          payload: {
            isChecked: true,
            textSize: {
              large: "56px",
              medium: "28px",
              small: "16px",
            },
            selectedFontSize: 56,
          },
        },
        { id: 3, name: "Emphsis", payload: { isChecked: true } },
        { id: 4, name: "Body Text", payload: { isChecked: true } },
      ],
    };
  }

  openPopover = () => {
    this.setState({ isPopoverOpen: true });
  };

  closePopover = () => {
    this.setState({ isPopoverOpen: false });
  };

  toggleElement = id => {
    const { options } = this.state;
    const element = options.find(i => i.id === id);
    //тащу рамду там где ненадо
    const isCheckedLens = lensPath(["payload", "isChecked"]);
    const toggleChecked = set(
      isCheckedLens,
      !element.payload.isChecked,
      element
    );

    this.setState({
      options: options.map(option => {
        if (option.id === id) {
          return toggleChecked;
        }
        return option;
      }),
    });
  };

  setHeaderSize = (size, id) => {
    //дублирование кода все дела
    //нет времени делать почеловечески
    const { options } = this.state;
    const element = options.find((i) => i.id === id);
    const textSizesLens = lensPath(["payload", "selectedFontSize"]);
    const headerSize = set(textSizesLens, size, element);

    this.setState({
      options: options.map(option => {
        if (option.id === id) {
          return headerSize;
        }
        return option;
      }),
    });
  };

  render() {
    const { options, isPopoverOpen } = this.state;

    return (
      //никогда не работал с бемом
      //поэтому не рофлите с неймингов :)
      <div className="main_container">
        <OptionListView
          //без редакса ваще не очень
          //приходится прокидывать кучу пропов, ну такое
          optionsList={options}
          isPopoverOpen={isPopoverOpen}
          toggleElement={this.toggleElement}
          openPopover={this.openPopover}
          closePopover={this.closePopover}
          setHeaderSize={this.setHeaderSize}
        />
        <ContentView
          optionsList={options.reduce((acc, curr) => {
            return {
              ...acc,
              //тупо оверинжиниринг
              [curr.name.toLowerCase().replace(/\s/g, "")]: { ...curr.payload },
            };
          }, {})}
        />
      </div>
    );
  }
}

export default App;
