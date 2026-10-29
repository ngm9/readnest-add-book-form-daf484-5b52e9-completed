# ReadNest

## Task Overview

You are a developer who has just joined the ReadNest team, and a user has reported that the Add a book panel is not working. Typing into the title and author fields does not reflect the entered text reliably, and clicking the Add button never adds a new book to the list. Your job is to read through the existing panel and reading-list code, understand how the fields and the list state connect, and make the panel add books correctly while keeping the existing books intact.

## Helpful Tips

- Review how the existing fields get their displayed value and how they report changes back so that what the user types stays in sync with what is stored.
- Think about how a new book should be combined with the books already on the list so that none of the existing entries are lost.
- Consider what should happen when the user submits without filling both fields, and how a brief message can appear and disappear based on the current situation.
- Explore how the fields can be reset once a book has been successfully added.
- Consider following the file and component conventions already present in the project rather than introducing new patterns or libraries.

## Objectives

- Make the title and author fields controlled so typing updates each field correctly.
- Add a new book to the reading list when both fields are filled and the Add button is used, so it appears immediately without disturbing existing books.
- Prevent adding a book when either field is empty, and show a short inline message indicating both fields are required.
- Clear both fields after a book is added successfully.

## How to Verify

- Type into the title and author fields and confirm the characters appear exactly as typed.
- Fill both fields, add the book, and confirm a new card shows up in the list right away while the previously listed books remain unchanged.
- Leave one field empty, attempt to add, and confirm no book is added and an inline required-fields message is shown.
- After a successful add, confirm both fields are empty and ready for the next entry.
- Open the browser console and confirm there are no errors or warnings while performing the above steps.