const toDisplay = {
  'Q-audio': 'Heater-1',
  'W-audio': 'Heater-2',
  'E-audio': 'Heater-3',
  'A-audio': 'Heater-4',
  'S-audio': 'Clap',
  'D-audio': 'Open-HH',
  'Z-audio': "Kick-n'-Hat",
  'X-audio': 'Kick',
  'C-audio': 'Closed-HH' };


const DrumPads = props => {

  const handleButtonClick = event => {
    if (props.power) {
      const buttonId = event.target.id;
      const audioElement = document.getElementById(`${buttonId[0]}`);
      audioElement.currentTime = 0;
      audioElement.volume = props.volume / 100;
      props.handleDisplayUpdate(toDisplay[buttonId]);
      audioElement.play();
    }
  };
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-pads" }, /*#__PURE__*/
    React.createElement("button", {
      id: "Q-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "Q", /*#__PURE__*/


    React.createElement("audio", {
      id: "Q",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "W-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "W", /*#__PURE__*/


    React.createElement("audio", {
      id: "W",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "E-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "E", /*#__PURE__*/


    React.createElement("audio", {
      id: "E",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "A-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "A", /*#__PURE__*/


    React.createElement("audio", {
      id: "A",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "S-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "S", /*#__PURE__*/


    React.createElement("audio", {
      id: "S",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "D-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "D", /*#__PURE__*/


    React.createElement("audio", {
      id: "D",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "Z-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "Z", /*#__PURE__*/


    React.createElement("audio", {
      id: "Z",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "X-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "X", /*#__PURE__*/


    React.createElement("audio", {
      id: "X",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" })), /*#__PURE__*/



    React.createElement("button", {
      id: "C-audio",
      className: "btn btn-dark drum-pad",
      onClick: handleButtonClick }, "C", /*#__PURE__*/


    React.createElement("audio", {
      id: "C",
      class: "clip",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }))));




};

const DrumControls = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-controls" }, /*#__PURE__*/
    React.createElement("button", {
      id: "power",
      style: { backgroundColor: props.color },
      onClick: props.powerButtonPress }), /*#__PURE__*/

    React.createElement("div", { id: "display" }, props.display), /*#__PURE__*/
    React.createElement("div", { id: "volume-control" }, /*#__PURE__*/
    React.createElement("input", {
      type: "range",
      id: "volume-range",
      min: "0",
      max: "100",
      value: props.volume,
      onChange: props.volumeChange,
      class: "slide-button" }), /*#__PURE__*/

    React.createElement("span", { id: "volume-level" }, `${props.volume}%`))));



};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      color: "#81C784",
      volume: 50,
      display: '' };

    this.volumeChange = this.volumeChange.bind(this);
    this.powerButtonPress = this.powerButtonPress.bind(this);
    this.handleDisplayUpdate = this.handleDisplayUpdate.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", playSoundOnKeyPress);
  }

  handleDisplayUpdate(displayValue) {
    this.setState({
      display: displayValue });

  }

  volumeChange(event) {
    if (this.state.power) {
      this.setState({
        volume: event.target.value });

      this.handleDisplayUpdate(`Volume: ${event.target.value}`);
    }
  }

  powerButtonPress() {
    this.setState({
      power: !this.state.power,
      color: this.state.power ? "#E53935" : "#81C784" });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement(DrumPads, {
        volume: this.state.volume,
        power: this.state.power,
        handleDisplayUpdate: this.handleDisplayUpdate }), /*#__PURE__*/

      React.createElement(DrumControls, {
        volume: this.state.volume,
        volumeChange: this.volumeChange,
        volume: this.state.volume,
        powerButtonPress: this.powerButtonPress,
        color: this.state.color,
        display: this.state.display })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("react-div"));

function convertRgbToHex(color) {
  // Extract the R, G, and B values from the color string
  const r = parseInt(color.substring(4, color.indexOf(',')));
  const g = parseInt(color.substring(color.indexOf(',') + 1, color.lastIndexOf(',')));
  const b = parseInt(color.substring(color.lastIndexOf(',') + 1, color.length - 1));

  // Convert each value to a hexadecimal string
  const rHex = r.toString(16).padStart(2, '0').toUpperCase();
  const gHex = g.toString(16).padStart(2, '0').toUpperCase();
  const bHex = b.toString(16).padStart(2, '0').toUpperCase();

  // Concatenate the hexadecimal strings into a single hex color string
  return '#' + rHex + gHex + bHex;
}

const playSoundOnKeyPress = event => {
  // Check power
  const power = convertRgbToHex(document.getElementById(`power`).style.backgroundColor) == "#81C784";
  if (power) {
    // console.log('Key was pressed')
    // get the key that was pressed
    const key = event.key.toUpperCase();
    // check if the key is one of the valid keys for this drum machine
    if (["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(key)) {
      // console.log('It was a drum key!')
      // if it is, get the corresponding audio element
      const audioElement = document.getElementById(`${key}`);
      // reset the current time to the start of the audio
      audioElement.currentTime = 0;
      // set the volume based on the props.volume value
      const volume = document.getElementById(`volume-range`).value;
      audioElement.volume = volume / 100;
      // Change color to indicate to user the sound that's playing
      const buttonId = document.getElementById(`${key}-audio`);
      console.log('buttonId:', buttonId);
      buttonId.style.color = "#81C784";
      // Display the sound that's to be played
      const display = document.getElementById(`display`);
      display.innerHTML = toDisplay[`${key}-audio`];
      // play the audio
      audioElement.play();
      // Change color back when key is lifted
      document.addEventListener("keyup", () => {
        console.log("Key was lifted!");
        buttonId.style.color = "#fff";
      });
    } // end of if
  }
};

// add an event listener to the document to listen for keydown events
document.addEventListener("keydown", playSoundOnKeyPress);