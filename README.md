# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

At first time
git config --global user.name Hafeez
git config --global user.email hafeez.solutionriver@gmail.com

Two ways for working with repo..
1-init (Creating from scratch)
2-clone(Make availabel whole repo on system)

Few states.
=> Untracked - Means github does not concern with them and we have to add the files in staged state.
git add [filename] this would add into staging area.
git commit
now press esc and :wq and enter.
git add -A for adding all untracked files.
In order to avoid "now press esc and :wq and enter."
Jus enter git commit -m "Added changes"
=> Unmodified- It says you have committed the files.
=> Modified - It says you have modified the files now stage them and commit them.

git checkout [filename]
git checkout -f (for all files)
This would recoever the last commit.

git log 
git log  -p -[# of commit do you want to see]
git diff (comapre working tree with staging area)
git diff -- stage (compare stagin area with last commit)

git commit -a -m (This would directly commit so
 that we do not need to first put everything
 inside stage state then commit)

git rm [filename] This would remove the from working
and staging area.

git rm --cached(Make tracked file untracked)
 This would only reomve from stage
area not from disk.

git status -s
[this box is for staging area][this for working area] filename

Now git ignore (Files which we do not want to track)
make a file with .gitignore extension
And just write a filename which we want  to ignore.

Branches
git branch [branchName] create a branch
git checkout [branchName] change branch

Remote repository
Now add remote repository after creating your
repository on github.
git remote add origin [Link]
git push origin master
git clone '' [folder name otherwise it would
create the folder with name of repo]

-Create a repo
-Copy link(this will create a new folder with repo name)
git clone ----(link)----
-copy all files into that fodler
-git status -s
-git add .
-git commit -m "Dummy Message"
-git push 


git branch: List all branches in the repository.
git branch <branch-name>: Create a new branch.
git checkout <branch-name>: Switch to the specified branch.
git checkout -b <branch-name>: Create and switch to a new branch.
git merge <branch-name>: Merge changes from the specified branch into the current branch.
git status: Check the status of the repository, including information about conflicts.
git diff: View the differences between branches or files.
git add <file>: Stage a modified file for the next commit.
git commit: Commit the changes, including conflict resolutions, after a merge.

You have made some modifications to your files, but they are not ready to be committed.
Run git stash to save your changes to a stash.
Your working directory is reverted back to a clean state.
Switch branches, pull changes, or perform any other necessary operations.
Return to your original branch.
Retrieve your stashed changes using git stash apply or git stash pop.
git stash apply keeps the stash intact for future use.
git stash pop applies the stash and removes it from the stash list.