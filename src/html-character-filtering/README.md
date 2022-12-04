# Character Filtering

Click the [link](index.html) to open `index.html` with a browser and open developer tools by pressing `option+command+I (⌥+⌘+I)`.

This document shows how to apply filtering or validation to avoid user entering any character. _For example:_ we want to 
prevent the user to enter `<` or `>` to block code injection. This could be also used to prevent a user to enter any characters
that is not allowed to support certain expectations. This approach will eliminate a round trip to server to validate the input 
(Please note backend should always validate the data, UI validation is only for convenience to give user faster feedback 
and prevent common errors. Business logic should never be implemented in the UI).

---
Return to [Index](../../README.md)