# README.md Generator

## This application allows users to generate a high-quality and professionally structured README.md file in the markdown format.
This application is a command-line application where it prompts the users for a series of questions specific to their project.
The application then uses those input to generate a README.md file.  Users are free to modify the generated file on their own if they choose to.

### The structure of the generated README.md file is as followed (sections are listed in order):

* The project title
* The project description: This can either be a brief or a detailed description of the project.
* The table of contents: Lists the sections of the README.md file. When a link in the Table of Contents is click, the user is taken to the corresponding section in the README.md.
* Installation instructions: This section provides all installation instructions on what a user need to install to get the application to run.
* Usage information: This section provides information letting the user knows how to use the application.
* License information: The provides licensing information for the application.
* Contributing information: This section provides information on project contributors.
* Test information: Any testing information specific to the application can be provided in this section.
* Questions: This sections provides contact information to the application author/creator should the users wish to contact for further information.

### How to clone this README.md Generator:

1. In your browser, navigate to the (https://github.com/shellienguyen/readme-generator) GitHub repository.
2. Click the green button that says “Code” and copy the SSH key to your clipboard.
3) Navigate to your terminal  and to the working directory where you want this repository to be housed at.
4. At the terminal command line, type “git clone ” and paste the SSH key you copied from the repository, hit Enter.
5. This application uses Node.js and due to large file size, Node.js will not be cloned to your repository.
You will need to install Node.js for this application to run.  Visit https://www.guru99.com/download-install-node-js.html
for instructions on installing Node.js.
6. Open the project in Visul Studio Code and open the "Integrated Terminal.  At the integrated command line inside Visual Studio
Code, type in "npm install" to install the node modules.
7. The README.md Generator also uses Inquirer dependencies, which need to be installed.  At the command line, type in “npm i inquirer” to
install the Inquirer dependencies.

### How to run this application

README.md Generator is a command-line application. At the command line, type in "node index" to run the application.  The user will be presented
with a series of questions related to the project.  The user is to provide all needed information by answering the series of questions.  Once
the user has answered all questions, the README.md file will be generated under the "dist" folder.

To view the generated README.md file, click on "dist" to expand the folder, then click on "README.md" to open the file.  The user can right-click on the
README.md filename  and choose the "Open Preview" option to view the README.md file in markdown format.

### Instuctional Video

For a demonstration on how to run this application, please watch this video: https://drive.google.com/file/d/1hXW-GDtHH1_Jmlt_PQgfSmmsMBSuIu1q/view

### Screenshots

Below are screenshots of the user-input questions and the generated README.md for your reference:

![Mockup](https://github.com/shellienguyen/readme-generator/blob/main/assets/images/user-input1.jpg)
<br><br>
![Mockup](https://github.com/shellienguyen/readme-generator/blob/main/assets/images/user-input2.jpg)
<br><br>
![Mockup](https://github.com/shellienguyen/readme-generator/blob/main/assets/images/mockup.jpg)

