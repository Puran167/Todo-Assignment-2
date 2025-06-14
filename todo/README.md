Step 1: Create a New React Project
In the terminal, type:

npx create-react-app todo
This creates a new folder named todo site with all required files.
It takes a few minutes.

Step 2: Open Project Folder
Type this in terminal:

cd todo
Now you are inside the React project.

Step 3: Start the App
Run this:

npm start
It will open a web page:
http://localhost:3000

#todo

public
index.html  ← React inserts app here

src
App.js       ← Your main To-Do component
App.css      ← Styling
index.js     ← Starts the app
package.json  ← All dependencies

Features are :

1. Add Task
What it does:
You can type a task in the input box and click the Add button to add it to your task list.

2. Remove Task
What it does:
Each task has a Delete button. When you click it, that task is removed from the list.

3. Mark Task as Complete
What it does:
Click on a task's text to mark it as complete.

What happens when done:
The text becomes crossed out (line-through)
The color becomes light gray to show it's completed

4. Sort Tasks (A–Z / Z–A)
What it does:
Click the Sort button to arrange tasks by name.

Two sorting options:

A–Z: Alphabetical order (like Apple, Ball, Cat)
Z–A: Reverse alphabetical order (like Zebra, Yellow, Apple)

5. Filter Tasks (All / Active / Completed)
What it does:
You can filter which tasks are shown:

All: Shows every task
Active: Shows only tasks that are not completed
Completed: Shows only tasks that are completed

6. Save to LocalStorage
What it does:
Your tasks are automatically saved in your browser.

Details:

If you close or refresh the browser, your tasks will still be there
On page load, it loads your saved tasks
Every time you add, remove, or mark a task as complete, the saved data updates