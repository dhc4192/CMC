# Project Overview

## Project Name

Change My ¢hange

##

## Project Description

This is a currency converter. We all know the currency value is different throughout the world. User will be able to convert U.S dollar (USD) to other currency values. So before booking a flight lets see how much our money will be worth somewhere else.
Here is the link to my project: https://pages.git.generalassemb.ly/Dhc4192/Change-My-Change/index.html

##

## API and Data Sample

```
{
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "time_zone": "UTC",
    "time_last_update": 1585872001,
    "time_next_update": 1585958521,
    "base": "USD",
    "conversion_rates": {
        "USD": 1,
        "AED": 3.6720,
        "ARS": 64.5116,
```

Here is the link to my API: https://prime.exchangerate-api.com/v5/ea19256df9d432e21c8cfc0e/latest/USD

##

## Wireframes

https://wireframe.cc/pro/pp/45d53fe9c330387

##

### MVP/PostMVP - 5min

#### MVP

- Think of a topic and search for a working API
- Create a responsive layout
- Add additional information about currency value
- Allow user to select currency types
- Allow user to input currency values
- Show results of the conversion

#### PostMVP

- Make currency type selection a dropdown box
- Additional information should expand
- Add additional page for... (Haven't decided yet)

##

## Project Schedule

| Day        | Deliverable                                               | Status   |
| ---------- | --------------------------------------------------------- | -------- |
| April 6th  | Pitch my project and get approval                         | Complete |
| April 7th  | Complete HTML, basic CSS, start Javascript                | Complete |
| April 8th  | Javascript                                                | Complete |
| April 9th  | Complete CSS, finishing touch, PostMVP (if there is time) | Complete |
| April 10th | Presentation                                              | Complete |

##

## Priority Matrix

![alt text](addins/Time-Importance-Matrix.png)

##

## Timeframes

| Component                   | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML and basic CSS          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Page layout                 |    M     |      1hr       |      1hr      |     1hr     |
| Currency selector           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Currency input              |    H     |      3hrs      |      1hr      |     1hr     |
| Conversion results          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Link API and store data     |    H     |      3hrs      |     5hrs      |    5hrs     |
| Javascript/DOM manipulation |    H     |      8hrs      |     9hrs      |    9hrs     |
| Finish CSS                  |    M     |      8hrs      |     5hrs      |    5hrs     |
| PostMVP                     |    L     |      4hrs      |     4hrs      |    4hrs     |
| Unexpected Debugging        |    H     |      4hrs      |     .5hrs     |    .5hrs    |
| Total                       |          |     40hrs      |    33.5hrs    |   33.5hrs   |

##

## Code Snippet

This code allowed me to display the hidden table and hide it again.

```
showTable.addEventListener("click", () => {
  const currentTable = document.querySelector(".currentTable");
  if (currentTable.style.display == "none") {
    currentTable.style.display = "inline-block";
    hideList.style.display = "inline-block";
  } else {
    currentTable.style.display = "none";
    hideList.style.display = "none";
  }
});
```

##

## Change Log

There were no changes made. However, I ended up adding an extra page.
