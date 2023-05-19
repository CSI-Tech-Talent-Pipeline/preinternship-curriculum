#### Students will be able to:
- [ ] Explain what Git is
- [ ] Define Version Control System
- [ ] make the distinction between centralized VCS and Distributed VCS
- [ ] Identify Github
- [ ] make the distinction between `git` and `github`

- [ ] Explain terminal/CLI commands
- [ ] Introduce essential Git commands
- [ ] method 1: Start with Github
    - [ ] Show github and walk through the `Github` workflow 
        - [ ] Create a repo
        - [ ] Create a README.md page
        - [ ] Discuss md and readme
        - [ ] Commit
        - [ ] examine history page
    - [ ] Practice `Github` workflow on the local machine on VSC
        - [ ] ohmyzsh
        - [ ] git clone 
        - [ ] know if the folder has git history
        - [ ] know which branch you are on
        - [ ] add all files to the Git stage area
        - [ ] make a permanent snapshot with a message

- [ ] method 2: Start with the local machine
    - [ ] Walk through the steps on VSC
        * `$mkdir <foldername>`
        * `$cd <foldername>`
        * `$touch <filename>`
        * `$git init`
        * `$git status`
        * `$git add .`
        * `$git commit -m "message"`
        * `$git push -u origin main` XXX doesn't work FATAL
        *  go to github website and create a repo
        * `$git remote add origin <url>` 
        * `$git push -u origin <main>` -upstream, default let you just use git push in the future
        * `$git push`

- [ ] Explain Git branching
    - [ ] walk through git branching steps

# Do you have git on your local machine? lol
git --version

# What is Git?
Git is a distributed version control system that helps developers to collaborate more efficiently by tracking code changes that have been around since 2005.

Git is a distributed version control system that is free and open source. It is the most widely used VCS in development today. Most programmers interact with git on a daily basis.


# What is VCS, Version Control System?
VCS is a software that helps software engineers to track code changes. 

We first save the initial version of code into Git, then when we make changes, we can save it into Git, then save new changes again into Git.

This helps us to see what we did when, as well as track down bugs, or if a mistake is made, we can turn back the clock and compare earlier versions of the code. 

ex) google doc vs textEdit


# What are two main types of VCS?

* Centralized VCS
    -You have a single “central” copy of your project on a server and commit your changes to this central copy. 
    -You pull the files that you need, but you never have a full copy of your project locally.
    -ex) Subversion, Perforce

* Distributed VCS
    -You don't rely on a central server to store all the versions of a project’s files.
    -Instead, you clone a copy of a repository locally so that you have the full history of the project. 
    -While you don't have to have a central repository for your files, you may want one "central" place to keep your code so that you can share and collaborate on your project with others. That's where GitHub comes in. Keep a copy of your code in a repository on GitHub so that your team can use a D-VCS locally and to push and pull code.
    -ex) Git, Mercurial

# What is Github?
Github is a website, a code hosting platform for version control and collaboration that has been around since 2008. You can organize your code as a portfolio to potential employers.

ex) gitLab, BitBucket, SourceForce.

# So how are git and github different ?



# Terminal / CLI commands 
```
$cd ..       # Change Directory
$pwd         # print working directory
$ls          # list files in directory
$ls -a       # list all files including the hidden files. Check if .git exist
$cd          # change directory
$cd ..       # up one directory
$mkdir       # MaKe Directory = create new directory
$open        # open a file with the associated program, a directory with Finder, or a URL with the default web browser
$ps          # list all running processes
$kill        # terminate existing process
$rmd         # permanently delete file
$rmdir       # remove directory
```

# Git Commands introduction (high level)
## clone 
    `clone` downloads a repository(folder or file with code) that is hosted on github into your local machine.
## add
    `add` tracks your files and changes in Git. 
    When you makes any changed, we want to tell the git that we made changes and add that changes
## commit 
    `save` your file with messages.
## push
    `upload` git commits to the github remote repository 
## pull
    `download` new changes that was made by your collaborator 
## git help -a
    This is the real G, the real boss, the final exam, the ultimate cheat sheet.


# github 
https://github.com/

You should have your own github account in order to complete the Assignment-0 so 

 ## Github workflow on Github

  ### What is a repository?
     A repository is a project, a collection of code files and folders. Here is an example of my project. Show my swimwear CLI project.

  ### Steps
   * create a repository
   * create a README.md
   * what is md? markdown, a text file
   * why is README important?
   * README.md is default file that always shows on the repo under the files 
   * How to edit online ?
   * show the commits by clicking history
   * Add commit message
   * Point at at the main repo page
   * Each commit has its unique identifiers and message titles
   * green with the plus sign has been added to this commit
   * red line means it was deleted
   * white means it stayed the same
    
   # header
   ## h2
   ### h3
   #### h4
   ###### h6 


 ## Github workflow on the local machine

   ### VSC ( not VCS)
   * with ohmyzsh, it is listed so I recommend you installing it
   * open folder or `$mkdir <new folder name>`
   * open terminal
   * `$git clone <the repo git url address>`
   * how do you know if your folder has git history?
   * `$ls -a`
   * how to know which branch you are on?
   * `$git branch`
   * `$git add .` add all files to the Git staged area
   * `$git add <file name>` add only that particular file to the Git staging area
   * `$git commit -m "message"` takes everything from the staging area and makes a permanent snapshot with the message
   * `$git status` again then it shows what's been tracked 
   * `$git push -u origin <branch name>`
   * what is `origin`? It represents the location of our git repository

# Local Git Workflow

 ## steps on vsc
  * `$mkdir <foldername>`
  * `$cd <foldername>`
  * `$touch <filename>`
  * `$git init`
  * `$git status`
  * `$git add .`
  * `$git commit -m "message"`
  * `$git push -u origin main` XXX doesn't work FATAL
  *  go to github website and create a repo
  * `$git remote add origin <url>` 
  * `$git push -u origin <main>` -upstream, default let you just use git push in the future
  * `$git push`

# Review Github workflow and Local machine git workflow
  ![git-workflow](https://i.imgur.com/CgWF8J0.png)

# Git Branching
 ## what is Git Branching?
  ![branchImg](https://i.imgur.com/1gqXXRA.png)

  ![branchImg](https://i.imgur.com/iB5NmBH.png)
  Main - Feature branch  - Hot fix 

 ## steps
  * `$git branch`
  * `$git checkout -b ticket#1234-new-branch`
  * `$git checkout main`
  * `$git checkout ticket#1234-new-branch`
  * change README
  * M sign next to the folder in the explorer is "Modified"
  * `$git status`
  * `$git add .`
  * `$git commit -m "ticket #1234-1-readme"`
  * `$git checkout main`
  * You can't see the changes on main
  * `$git diff`
  * `$git checkout ticket#1234-new-branch`
  * What is `pull request` or `PR`
  * pull into another branch. ex) We make a pull request from the feature branch to the main branch.
  * go to github repo
  * pull request add notes
  * look at commits or file changes
  * click `merge pull request`
  * now it's merged, we need to go back to main branch and pull
  * `$git checkout main`
  * `$git pull origin main`
  * now it's time to delete the complete branch to reduce confusion
  * `$git branch` to see which branches are there
  * `$git branch -d <branch-name>` to delete the branch
  * delete the branch on github

# Creating Issues



#### How to tell the Github account that your local machine is the owner of the account?
* Verify SSH key
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh

### Resources
* Github Cheat Sheet
https://education.github.com/git-cheat-sheet-education.pdf

* Atlassian Git cheat sheet
https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet

* Interactive cheat sheet
https://ndpsoftware.com/git-cheatsheet.html#loc=remote_repo;

* High-level commands
https://git-scm.com/docs/git#_high_level_commands_porcelain

* colorful terminal ohmyzsh
https://ohmyz.sh/#install

* Verify SSH key
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh

* plain text generator
https://www.tablesgenerator.com/text_tables
