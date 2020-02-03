# Fullstack-Code-Challenge

Build a paint-bucket tool using plain React components (no outside libraries).  There is a react component (`components/paint-canvas/index.js`) that draws an image onto HTML canvas for you, but you will be building the paint-bucket functionality yourself. You will also build a Rails API that can store altered images made from the canvas (ie, saving a colored in image).  See requirements below for more deatils.

## Requirements
 - Create a rails app (only API functionality is needed - no rails views) in this same repo (example: `Fullstack-Code-Challenge/rails_project_example_name`)
 - When you select from the color choices on the right and then click on a blank space in the canvas and it should fill in the outline with the selected color
 - If the outline doesn't form an enclosed space, it should continue to fill the canvas with that same color until it either fills the whole screen, or reaches the limits of another enclosed space.
 - Use only React. No other runtime libraries. (Webpack and other build tools are fine)
 - Add a save button and takes user input for a filename and send it to a route defined as `/canvas_images` in the Rails API
 - Add another route to display previously saved images (get the data from the API you created) and display the 10 most recent files.
 - Allow the files to be editable on the canvas as they were the first time.  Upon submitting an edit, provide a confirmation to save over the existing file or overrite it with a new name.

## Bonus Requirements
Bonus requirements are all completely optional but will show us extra initiative and your skills.

 - Create an API endpoint to CRUD different color choices instead of the hard-coded choices provided.
 - Allow storing the canvas image in different file formats.
 - Add the ability to draw your own image on the canvas with mouse events. Save on each stroke and add an "undo" (ctrl + z) functionality.
 - Dockerize the react app and rails app
 - 

## Evaluation Criteria
 - Logic
   - We are interested in how well you handle logic and structuring of the pixel data from the canvas
 - React
   - How well your react fundamentals are and how well you separate functionality into components.
 - Commit details are helpful in tracking your thought process, so while this isn't directly evaluation criteria, it can help you out.

Timeliness is also a huge factor. While there is no maximum time, we are evaluating candidates on a rolling basis so if you take too long, we may accept another candidate before we can evaluate you.

# Submission
Upon completion upload your changes (minus node_modules) to a github.com repository and send it to [dev@pairin.com](mailto:dev@pairin.com?Subject=Fullstack%20Code%20Challenge)
