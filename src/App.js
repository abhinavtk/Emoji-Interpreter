import React, { useState } from "react";
import "./styles.css";

var welcome = "Inside Out!!!";

var emojiDictionary = {
  "🤪": "Crazy Face",
  "😀": "Grinning Face",
  "😃": "Smiling Face With Open Mouth",
  "😅": "Smiling Face With Open Mouth & Cold Sweat",
  "😂": "Face With Tears of Joy",
  "🤣": "Rolling On The Floor, Laughing",
  "😊": "Smiling Face",
  "😇": "Smiling Face With Halo",
  "🙂": "Slightly Smiling Face",
  "😅": "Smiling Face With Open Mouth & Cold Sweat",
  "😁": "Beaming face with smiling eyes",
  "😬": "Grimacing Face",
  "😄": "Grin",
  "😆": "Grinning Squinting face",
  "😉": "Wink",
  "😋": "Face savouring food",
  "😎": "Smiling face with glasses on",
  "😍": "Heart Eyes",
  "😘": "Kissing Heart",
  "😗": "Kissing",
  "😙": "Kissing face with smiling eyes",
  "😚": "Kissing with closed eyes",
  "🤗": "Hugging"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, inputTextHandler] = useState("");

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in emojiDictionary) {
      meaning = emojiDictionary[inputEmoji];
    } else if (inputEmoji === "") {
      meaning = "";
    } else {
      meaning = "This emoji is not available.";
    }
    inputTextHandler(meaning);
  }
  function clickHandler(item) {
    meaning = emojiDictionary[item];
    inputTextHandler(meaning);
  }
  return (
    <div className="App">
      <h1>{welcome}</h1>
      <h2>Insert an emoji to check its meaning</h2>
      <input onChange={inputChangeHandler}></input>
      <div id="output">{meaning}</div>
      {emojiList.map((item) => {
        return (
          <span
            key={item}
            onClick={() => clickHandler(item)}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
